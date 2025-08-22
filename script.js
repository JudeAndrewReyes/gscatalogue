// Sample placeholder products
const products = [
  { id: 1, name: "Stihl MS 170 Chainsaw", category: "chainsaws", image: "src/images/ms170.jpg" },
  { id: 2, name: "Stihl FS 120 Brushcutter", category: "brushcutters", image: "src/images/fs120.jpg" },
  { id: 3, name: "Stihl BG 50 Blower", category: "blowers", image: "src/images/bg50.jpg" },
  { id: 4, name: "Stihl FSA 45 Trimmer", category: "trimmers", image: "src/images/fsa45.png" },
  { id: 5, name: "Stihl SR 420 Sprayer", category: "sprayers", image: "src/images/sr420.jpg" }
];

const catalogue = document.getElementById("catalogue");
const categoryBtns = document.querySelectorAll(".cat-btn");
const searchInput = document.getElementById("search");

// Render products
function renderProducts(items) {
  catalogue.innerHTML = items.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.name}">
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <button class="inquiry-btn" data-id="${item.id}">Add to Inquiry</button>
      </div>
    </div>
  `).join("");

  // Add event listeners for inquiry buttons
  document.querySelectorAll(".inquiry-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = btn.dataset.id;
      const product = products.find(p => p.id == productId);
      alert(`${product.name} added to inquiry list (NOT YET FUNCTIONAL).`);
    });
  });
}

// Initial render
renderProducts(products);

// Category filter
categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    if (category === "all") {
      renderProducts(products);
    } else {
      renderProducts(products.filter(p => p.category === category));
    }
  });
});

// Search filter
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
});

// Contact form (demo only)
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
});
