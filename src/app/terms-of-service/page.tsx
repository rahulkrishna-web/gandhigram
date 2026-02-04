import React from 'react';

export const metadata = {
    title: 'Terms of Service | Gandhigram',
    description: 'Terms of Service for Gandhigram Trust.',
};

export default function TermsOfServicePage() {
    return (
        <div className="w-full bg-[var(--bg-primary)]">
            <div className="max-w-4xl mx-auto px-6 md:px-12" style={{ paddingTop: '50px', paddingBottom: '50px', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <h1 className="font-serif text-4xl mb-8 text-gray-900">Terms of Service</h1>

                <div className="prose prose-lg text-gray-700 font-sans">
                    <p className="mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">1. Acceptance of Terms</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                            In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">2. Use License</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Gandhigram's website for personal, non-commercial transitory viewing only.
                            This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc mt-4 space-y-2" style={{ paddingLeft: '20px' }}>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on Gandhigram's website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">3. Disclaimer</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            The materials on Gandhigram's website are provided on an 'as is' basis. Gandhigram makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">4. Limitations</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            In no event shall Gandhigram or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Gandhigram's website, even if Gandhigram or a Gandhigram authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">5. Governing Law</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-serif text-2xl mb-4 text-gray-900">6. Changes to Terms</h2>
                        <p className="mb-4" style={{ marginBottom: '1rem' }}>
                            Gandhigram reserves the right, at its sole discretion, to modify or replace these Terms at any time.
                            What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
