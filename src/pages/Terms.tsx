import Layout from '../components/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="container-ai max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Terms of Service</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using NeuroTrain AI services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily access and use NeuroTrain AI services for personal, 
                non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">User Obligations</h2>
              <p className="text-muted-foreground mb-4">
                Users are responsible for maintaining the confidentiality of their account information 
                and for all activities that occur under their account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at legal@neurotrain.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;