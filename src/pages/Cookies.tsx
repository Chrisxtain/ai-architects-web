import Layout from '../components/Layout';

const Cookies = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="container-ai max-w-4xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gradient">Cookie Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They help us provide you with a better experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                <li>Preference cookies: Remember your settings and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies through your browser settings. However, removing 
                or blocking cookies may impact your user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our use of cookies, please contact us at privacy@neurotrain.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;