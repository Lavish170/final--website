/**
 * render.js
 * ------------------------------------------------------------
 * Renders PRODUCTS (from products.js) into the masonry grid.
 * Vanilla JS, no framework/build step — keeps the page fast for
 * cold Pinterest traffic on mobile.
 */

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.setAttribute("data-collection", product.collection);

  card.innerHTML = `
    <a href="product.html?id=${product.id}" class="card-image-link" aria-label="View ${product.title}">
      <img
        src="${product.imageUrl}"
        alt="${product.imageAlt}"
        loading="lazy"
        decoding="async"
        class="card-image"
      />
      <span class="curator-note">Curator's pick</span>
    </a>
    <div class="card-body">
      <p class="card-brand">${product.brand}</p>
      <h3 class="card-title">
        <a href="product.html?id=${product.id}">${product.title}</a>
      </h3>
      <p class="card-desc">${product.description}</p>
      <div class="card-footer">
        <span class="card-price">${product.price}</span>
        <a
          href="${product.affiliateLink}"
          class="card-cta"
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          Shop now
        </a>
      </div>
    </div>
  `;

  return card;
}

function renderGrid(products, containerId = "product-grid") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    fragment.appendChild(createProductCard(product));
  });

  container.appendChild(fragment);
}

function initFilters(products) {
  const filterButtons = document.querySelectorAll("[data-filter]");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => b.classList.remove("filter-active"));
      btn.classList.add("filter-active");

      const filtered =
        value === "all" ? products : products.filter((p) => p.collection === value);

      renderGrid(filtered);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid(PRODUCTS);
  initFilters(PRODUCTS);
});
