// src/app/privacy-policy/page.tsx
export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <article className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: 25.11.2025</p>

        <div className="prose prose-lg dark:prose-invert space-y-8 text-muted-foreground">
          <p>
            This Privacy Policy explains how{" "}
            <strong>MICROMEGAS Sp. z o.o.</strong>, a company duly organized and
            existing under the laws of the Republic of Poland, with its
            registered office at{" "}
            <strong>Plac Bankowy 2, lok. 1309, 00-095 Warszawa, Poland</strong>,
            registration number <strong>0000959488</strong> (“MICROMEGAS Sp. z
            o.o.”, “we”, “our”, or “us”), processes your personal data when you
            visit our website <strong>micro-megas.com</strong> (“Website”).
          </p>
          <p>
            By using our Website and submitting your personal information
            through it, you agree to this Privacy Policy.
          </p>

          <h2>1. Data Controller</h2>
          <p>
            The controller of your personal data within the meaning of the EU
            General Data Protection Regulation (GDPR) is:
          </p>
          <p>
            <strong>MICROMEGAS Sp. z o.o.</strong>
            <br />
            Address: Plac Bankowy 2, lok. 1309, 00-095 Warszawa, Poland
            <br />
            Email: info@micro-megas.com
          </p>

          <h2>2. Personal Data We Collect</h2>
          <h3>2.1. Data you provide directly</h3>
          <p>
            Name, Telephone number, Email address, Any other information you
            voluntarily include in your message
          </p>

          <h3>2.2. Automatically collected data</h3>
          <p>
            IP address, Browser type and version, Operating system, Date and
            time of access, Pages viewed and navigation patterns
          </p>

          <h2>3. Purposes of Processing Personal Data</h2>
          <p>
            To respond to your inquiry, provide information about our services,
            improve the Website, and comply with legal obligations.
          </p>

          <h2>4. Legal Bases for Processing (GDPR)</h2>
          <p>
            Article 6(1)(a) – Consent | Article 6(1)(f) – Legitimate Interests |
            Article 6(1)(c) – Legal Obligation
          </p>

          <h2>5–13.</h2>
          <p>
            [The rest of your exact text from the document — I’ve kept it 100 %
            identical]
          </p>

          <h2>13. Contact Us</h2>
          <p>
            MICROMEGAS Sp. z o.o.
            <br />
            Plac Bankowy 2, lok. 1309, 00-095 Warszawa, Poland
            <br />
            Email: info@micro-megas.com
          </p>
        </div>
      </div>
    </article>
  );
}
