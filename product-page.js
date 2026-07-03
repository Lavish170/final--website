/**
 * product-page.js
 * ------------------------------------------------------------
 * Reads ?id= from the URL, finds the matching product in PRODUCTS,
 * and renders the Product Bridge Page layout: gallery, "why we
 * love it" benefit copy, and the outbound affiliate CTA.
 */

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProductPage() {
  const root = document.getElementById("product-root");
  const id = getProductIdFromUrl();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    root.innerHTML = `
      <div class="text-center py-20">
        <p class="font-display text-2xl mb-2">We couldn't find that pick.</p>
        <a href="index.html" class="text-accent font-medium">Back to all picks &rarr;</a>
      </div>
    `;
    return;
  }

  document.title = `${product.title} — Curated Picks`;

  root.innerHTML = `
    <nav class="text-xs text-muted mb-6">
      <a href="index.html" class="hover:text-ink">Home</a>
      <span class="mx-1">/</span>
      <span>${product.collection}</span>
    </nav>

    <div class="grid sm:grid-cols-2 gap-8 sm:gap-10">
      <!-- Gallery -->
      <div>
        <div class="rounded-xl overflow-hidden border border-ink/5">
          <img
            src="${product.imageUrl}"
            alt="${product.imageAlt}"
            class="w-full h-auto"
            loading="eager"
          />
        </div>
      </div>

      <!-- Details -->
      <div class="flex flex-col">
        <p class="text-xs uppercase tracking-wide text-muted mb-1">${product.brand}</p>
        <h1 class="font-display text-3xl leading-tight mb-3">${product.title}</h1>
        <p class="text-xl font-semibold mb-5">${product.price}</p>

        <!-- Why We Love It -->
        <div class="bg-surface border border-ink/5 rounded-xl p-5 mb-6">
          <p class="font-display italic text-accent text-sm mb-2">Why we love it</p>
          <p class="text-sm text-ink/80 leading-relaxed">${product.description}</p>
        </div>

        <a
          href="${product.affiliateLink}"
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-sm rounded-full px-6 py-3.5 transition-colors"
        >
          Shop at ${product.brand} &rarr;
        </a>

        <p class="text-xs text-muted mt-3">
          Opens ${product.brand}'s site in a new tab. Prices and availability set by the retailer.
        </p>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderProductPage);
