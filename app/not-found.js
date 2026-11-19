import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Page not found | Equity Fin Academy",
  description: "This address is not a page on Equity Fin Academy. Use the home page, the blog, or contact.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="tight">
          <div className="container prose-block">
            <h1>This address is not a page.</h1>
            <p>
              Equity Fin Academy teaches in Dubai, UAE, and online across the UAE. The link you opened is not one of the published pages. Fonts, the favicon, and old addresses are not articles.
            </p>
            <p>
              Start at the <Link href="/">home page</Link>, read the <Link href="/blog">class notes</Link>, or send a message from{" "}
              <Link href="/contact">contact</Link>. WhatsApp is +971 55 904 7030.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
