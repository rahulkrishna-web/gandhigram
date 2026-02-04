'use client';

import { ImpactStat } from '@/data/impactData';
import {
    BarChart, Bar, XAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface StatCardProps {
    stat: ImpactStat;
    index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
    const [key, setKey] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            onViewportEnter={() => setKey(prev => prev + 1)}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                height: '360px',
                border: '1px solid rgba(0,0,0,0.05)',
                width: '100%',
            }}
        >
            <div style={{ marginBottom: '1rem' }}>
                <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#1a202c',
                    marginBottom: '0.25rem'
                }}>
                    {stat.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#718096' }}>{stat.subtitle}</p>
            </div>

            <div style={{ flex: 1, minHeight: 0 }}>
                <ResponsiveContainer key={key} width="100%" height="100%">
                    {stat.type === 'bar' ? (
                        <BarChart data={stat.data}>
                            <XAxis
                                dataKey="name"
                                tick={{ fontSize: 10 }}
                                interval={0}
                                tickLine={false}
                                axisLine={false}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                cursor={{ fill: 'transparent' }}
                            />
                            <Bar
                                dataKey="value"
                                fill={stat.color}
                                radius={[4, 4, 0, 0]}
                                animationDuration={1000}
                                animationBegin={0}
                            />
                        </BarChart>
                    ) : (
                        <PieChart>
                            <Pie
                                data={stat.data}
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={60}
                                paddingAngle={5}
                                dataKey="value"
                                animationDuration={1000}
                                animationBegin={0}
                            >
                                {stat.data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill || stat.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                        </PieChart>
                    )}
                </ResponsiveContainer>
            </div>

            <div style={{
                marginTop: '1rem',
                textAlign: 'right',
                borderTop: '1px solid #f0f0f0',
                paddingTop: '0.75rem'
            }}>
                <span style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: stat.color,
                    lineHeight: 1
                }}>
                    {stat.value}
                </span>
            </div>
        </motion.div>
    );
};

export default StatCard;
