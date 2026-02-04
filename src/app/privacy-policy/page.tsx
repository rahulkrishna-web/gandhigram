import React from 'react';

export const metadata = {
    title: 'Privacy Policy | Gandhigram',
    description: 'Privacy Policy for Gandhigram Trust.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="w-full bg-[var(--bg-primary)]">
            <div className="max-w-4xl mx-auto px-6 md:px-12" style={{ paddingTop: '50px', paddingBottom: '50px', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <h1 className="font-serif text-4xl mb-8 text-gray-900">Privacy Policy</h1>

                <div className="prose prose-lg text-gray-700 font-sans">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">1. Introduction</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            Welcome to Gandhigram. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">2. Information We Collect</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc mt-4 space-y-2" style={{ paddingLeft: '20px' }}>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">3. How We Use Your Data</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc mt-4 space-y-2" style={{ paddingLeft: '20px' }}>
                            <li>To provide and improve our services to you.</li>
                            <li>To communicate with you about updates, news, or changes to our services.</li>
                            <li>To comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">4. Data Security</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                            In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">5. Contact Us</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <p className="mt-4">
                            <strong>Gandhigram Trust</strong><br />
                            Gandhigram P.O, Dindigul District<br />
                            Tamil Nadu, India - 624 302<br />
                            Email: info@gandhigram.org
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
