import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CopyrightNotice from "../../copyright-notice";
import LiveProductDemo from "../live-product-demo";
import { products } from "../product-data";

const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
);

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product not found | Codex Pro" };
  }

  return {
    title: `${product.name} | Codex Pro Products`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Codex Pro`,
      description: product.description,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <>
      <main className="product-detail-page">
        <section className="product-detail-hero page-wrap">
          <Link className="product-back-link" href="/products">
            <span aria-hidden="true">←</span> All products
          </Link>
          <div className="about-eyebrow">
            <span className="eyebrow-dot" />
            {product.category.toUpperCase()} · PRODUCT CONCEPT
          </div>
          <h1>{product.name}</h1>
          <p>{product.fullDescription}</p>
          <div className="product-detail-actions">
            <a className="button button-dark" href="#live-demo">
              Live demo <ArrowUpRight />
            </a>
            <a
              className="text-link"
              href={`mailto:hello@codexpro.dev?subject=${encodeURIComponent(`Let's discuss ${product.name}`)}`}
            >
              Discuss this product <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="product-detail-main page-wrap">
          <div className="product-overview">
            <div className="product-overview-heading">
              <span className="section-kicker">PRODUCT OVERVIEW</span>
              <h2>Designed around your <em>workflow.</em></h2>
              <p>{product.fullDescription}</p>
            </div>
            <div className="product-capabilities">
              <h3>What it can do</h3>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="product-detail-tags">
                {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="live-demo-section page-wrap" id="live-demo">
          <div className="live-demo-heading">
            <div>
              <span className="section-kicker">INTERACTIVE PREVIEW</span>
              <h2>Take it for a <em>test drive.</em></h2>
            </div>
            <p>
              Try the sample controls below. This is a front-end concept preview,
              not a connected production system.
            </p>
          </div>
          <LiveProductDemo slug={product.slug} />
        </section>

        <section className="products-cta page-wrap">
          <div>
            <span className="section-kicker">MAKE THIS PRODUCT YOURS</span>
            <h2>
              Let&apos;s tailor it
              <br />
              to <em>your business.</em>
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
