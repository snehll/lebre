export const metadata = { title: "Cookie Policy" };

export default function CookiePolicy() {
  return (
    <article className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">
          Please read this Cookie Policy carefully (&quot;Cookie Policy&quot;,
          &quot;Policy&quot;) before using the site{" "}
          <strong>https://lebre.com.tr</strong> which is operated by{" "}
          <strong>LEBRE TİCARET LİMİTED ŞİRKETİ</strong> (hereinafter
          &quot;we&quot;, &quot;our&quot;).
        </p>

        <div className="prose prose-lg dark:prose-invert space-y-8 text-muted-foreground">
          <h2>What are cookies?</h2>
          <p>
            Cookies are simple text files that are stored on your computer or
            mobile device by a website server. Each cookie is unique to your web
            browser. It will contain some anonymous information, such as a unique
            identifier, the website&apos;s domain name, and some numbers.
          </p>

          <h2>What types of cookies do we use?</h2>

          <h3>Essential cookies</h3>
          <p>
            Essential cookies allow us to provide you with the best possible
            experience when accessing and navigating through our website and
            using its features. For example, these cookies let us recognize that
            you have created an account and have logged into that account.
          </p>

          <h3>Functionality cookies</h3>
          <p>
            Functionality cookies let us operate the site in accordance with the
            choices you make. For example, we will recognize your username and
            remember how you customized the site during future visits.
          </p>

          <h3>Analytical cookies</h3>
          <p>
            These cookies enable us and third-party services to collect
            aggregated data for statistical purposes on how our visitors use the
            website. These cookies do not contain personal information such as
            names and email addresses and are used to help us improve your user
            experience of the website.
          </p>

          <h2>How to delete cookies?</h2>
          <p>
            If you want to restrict or block the cookies that are set by our
            website, you can do so through your browser setting. Alternatively,
            you can visit <strong>https://lebre.com.tr</strong>, which contains
            comprehensive information on how to do this on a wide variety of
            browsers and devices. You will find general information about cookies
            and details on how to delete cookies from your device.
          </p>

          <h2>Contacting us</h2>
          <p>
            If you have any questions about this policy or our use of cookies,
            please contact us.
          </p>
        </div>
      </div>
    </article>
  );
}
