import type { Metadata } from "next";
import Link from "next/link";
import CopyrightNotice from "../copyright-notice";
import ProductCatalog from "./product-catalog";

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
);

export const metadata: Metadata = {
  title: "Our Products — Business Software Solutions | Codex Pro",
  description:
    "Explore adaptable business software solutions from Codex Pro, including CRM, service operations, customer portals, and real-time collaboration tools.",
};

export default function ProductsPage() {
  return (
    <>
      <main className="products-page">
        <section className="products-hero page-wrap">
          <div className="about-eyebrow">
            <span className="eyebrow-dot" />
            DIGITAL PRODUCTS, BUILT AROUND YOU
          </div>
          <h1>
            Useful tools for
            <br />
            <em>the way you work.</em>
          </h1>
          <p>
            Explore product directions we can tailor to your business. Each
            solution is shaped around your workflows, customers, and goals—not
            a one-size-fits-all template.
          </p>
          <a className="text-link" href="#product-solutions">
            Explore product solutions <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="products-catalog page-wrap" aria-label="Product catalog">
          <ProductCatalog />
        </section>

        <section className="products-cta page-wrap">
          <div>
            <span className="section-kicker">HAVE A DIFFERENT IDEA?</span>
            <h2>
              Let&apos;s shape a product
              <br />
              around <em>your business.</em>
            </h2>
          </div>
          <Link className="button button-lime" href="/contact">
            Talk to our team <ArrowUpRight />
          </Link>
          <span className="about-cta-spark" aria-hidden="true">
            ✳
          </span>
        </section>
      </main>

      
    </>
  );
}
