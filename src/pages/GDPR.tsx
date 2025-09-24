import Layout from '../components/Layout';

const GDPR = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="container-ai max-w-4xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gradient">GDPR Compliance</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Your Rights Under GDPR</h2>
              <p className="text-muted-foreground mb-4">
                Under the General Data Protection Regulation (GDPR), you have the following rights 
                regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Data Processing Legal Basis</h2>
              <p className="text-muted-foreground mb-4">
                We process your personal data based on legitimate interests, contractual necessity, 
                and your consent where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Exercising Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                To exercise any of your GDPR rights, please contact our Data Protection Officer at 
                dpo@neurotrain.ai. We will respond to your request within 30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Contact Our DPO</h2>
              <p className="text-muted-foreground">
                For any GDPR-related questions or requests, please contact our Data Protection Officer 
                at dpo@neurotrain.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GDPR;