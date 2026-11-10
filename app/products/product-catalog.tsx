"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "./product-data";

const filters = [
  "All products",
  "Web apps",
  "Mobile apps",
  "Business tools",
  "Real-time",
];

function ProductPreview({ type }: { type: string }) {
  if (type === "collaboration") {
    return (
      <div className="catalog-preview preview-collaboration" aria-hidden="true">
        <div className="preview-collab-window">
          <div className="preview-collab-video"><span>LIVE</span></div>
          <div className="preview-collab-sidebar"><i /><i /><i /></div>
          <div className="preview-collab-controls"><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="catalog-preview preview-mobile" aria-hidden="true">
        <div className="preview-phone">
          <span className="preview-phone-top" />
          <b>Today&apos;s schedule</b>
          <i className="preview-phone-map" />
          <i className="preview-phone-line" />
          <i className="preview-phone-line short" />
          <i className="preview-phone-button" />
        </div>
      </div>
    );
  }

  if (type === "portal") {
    return (
      <div className="catalog-preview preview-portal" aria-hidden="true">
        <div className="preview-browser">
          <div className="preview-browser-bar"><i /><i /><i /></div>
          <div className="preview-portal-content">
            <span>YOUR WORKSPACE</span>
            <b>A simpler way to stay on top of things.</b>
            <i /><i /><i />
          </div>
        </div>
      </div>
    );
  }

  if (type === "publishing") {
    return (
      <div className="catalog-preview preview-publishing" aria-hidden="true">
        <div className="preview-blog-window">
          <div className="preview-blog-header"><b>Studio Journal</b><span>Stories&nbsp;&nbsp; About</span></div>
          <div className="preview-blog-title">Latest stories<span>Ideas and updates from our team.</span></div>
          <div className="preview-blog-item"><i /><b>Designing for the details</b><span>5 min read&nbsp; · &nbsp;Read more ↗</span></div>
          <div className="preview-blog-item"><i /><b>A better way to collaborate</b><span>3 min read&nbsp; · &nbsp;Read more ↗</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`catalog-preview preview-${type}`} aria-hidden="true">
      <div className="preview-app-window">
        <div className="preview-app-nav">
          <b>{type === "crm" ? "northstar" : "Fieldwork"}</b>
          <i /><i /><i />
        </div>
        <div className="preview-app-main">
          <div className="preview-app-heading"><b>{type === "crm" ? "Good morning, Alex" : "Team overview"}</b><span /></div>
          <div className="preview-app-stats"><i /><i /><i /></div>
          <div className="preview-app-table">
            <i /><i /><i /><i />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState("All products");
  const visibleProducts =
    activeFilter === "All products"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="products-catalog-layout" id="product-solutions">
      <aside className="products-filter" aria-label="Filter products">
        <div className="products-filter-heading">
          <h2>Explore products</h2>
          <p>Find a solution by product type.</p>
        </div>
        <div className="products-filter-options" role="group" aria-label="Product categories">
          {filters.map((filter) => {
            const count =
              filter === "All products"
                ? products.length
                : products.filter((product) => product.category === filter).length;

            return (
              <button
                className={`products-filter-option${activeFilter === filter ? " is-active" : ""}`}
                type="button"
                key={filter}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                <span>{filter}</span>
                <span className="products-filter-count">{count}</span>
              </button>
            );
          })}
        </div>
        <div className="products-filter-note">
          <span aria-hidden="true">✳</span>
          <p>Looking for something custom? We can shape a product around your workflow.</p>
          <Link href="/contact">Talk to our team <span aria-hidden="true">↗</span></Link>
        </div>
      </aside>

      <div className="products-catalog-content">
        <div className="products-catalog-toolbar">
          <p>
            Showing <strong>{visibleProducts.length}</strong>{" "}
            {visibleProducts.length === 1 ? "product" : "products"}
          </p>
          <span>Built around your needs</span>
        </div>
        <div className="products-catalog-grid" aria-live="polite">
          {visibleProducts.map((product) => (
            <article className="catalog-product-card" key={product.slug}>
              <ProductPreview type={product.preview} />
              <div className="catalog-product-copy">
                <div className="catalog-product-tags">
                  {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link
                  href={`/products/${product.slug}`}
                  aria-label={`View details for ${product.name}`}
                >
                  Explore product <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
