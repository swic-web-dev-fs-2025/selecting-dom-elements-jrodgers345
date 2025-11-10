import "./style.css";

document.querySelector("#app").innerHTML = `
 <body class="bg-gray-100 p-8">
    <header id="main-header" class="bg-white shadow-md rounded-t-lg p-4 mb-8">
        <h1 class="text-3xl font-extrabold text-gray-900">My Site</h1>
        <!-- Primary navigation links -->
        <nav class="navbar mt-2 flex space-x-4" aria-label="Main Navigation">
            <a href="/" class="text-indigo-600 hover:text-indigo-800 transition">Home</a>
            <a href="/about" class="text-indigo-600 hover:text-indigo-800 transition">About</a>
            <a href="https://external.com" class="text-gray-600 hover:text-gray-800 transition">External</a>
        </nav>
    </header>
    <main class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Login Form: Correctly uses <form> -->
        <form data-form-type="login" class="bg-white p-6 rounded-lg shadow-lg col-span-1" aria-label="User Login">
            <!-- Level 2 heading for content within main -->
            <h2 class="text-xl font-semibold mb-4 border-b pb-2">User Login</h2>
            <div class="space-y-4">
                <input type="email" placeholder="Email" required class="w-full p-2 border border-gray-300 rounded focus:border-indigo-500 transition" />
                <input type="password" placeholder="Password" required class="w-full p-2 border border-gray-300 rounded focus:border-indigo-500 transition" />
                <button type="submit" class="btn primary w-full bg-indigo-500 text-white font-bold py-2 rounded hover:bg-indigo-600 transition">
                    Log In
                </button>
            </div>
        </form>
        <article class="card bg-white p-6 rounded-lg shadow-lg" data-product-id="1" aria-label="Product A Details">
            <h3 class="card-title text-2xl font-bold mb-2">Product A</h3>
            <p class="price text-indigo-600 text-xl font-semibold">$19.99</p>
            <p class="text-sm text-gray-500 mt-2">ID: 1</p>
        </article>
        <article class="card bg-white p-6 rounded-lg shadow-lg" data-product-id="2" aria-label="Product B Details">
            <h3 class="card-title text-2xl font-bold mb-2">Product B</h3>
            <p class="price text-indigo-600 text-xl font-semibold">$29.99</p>
            <p class="text-sm text-gray-500 mt-2">ID: 2</p>
        </article>
    </main>
`;
// 1. Select the main header by ID and log it.
const mainHeader = document.getElementById("main-header");
if (mainHeader) {
  console.info("Main Header selected by ID:", mainHeader);
}

// 2. Select all links inside .navbar using querySelectorAll and log how many there are.
const allNavLinks = document.querySelectorAll(".navbar a");
console.info(`Found ${allNavLinks.length} links inside .navbar.`);

// 3. Select internal links (those starting with /) and append " [internal]" to their text.
const internalLinks = document.querySelectorAll('.navbar a[href^="/"]');
internalLinks.forEach((link) => {
  link.textContent += " [internal]";
});
console.info("Updated internal links:", internalLinks);

// 4. Select all required inputs and add a yellow outline (style.outline = "2px solid gold").
const requiredInputs = document.querySelectorAll("input[required]");
requiredInputs.forEach((input) => {
  input.style.outline = "2px solid gold";
});
console.info("Added yellow outline to required inputs:", requiredInputs);

// 5. Select all .card elements, loop through them, and add a data-viewed="true" attribute to each.
const allCards = document.querySelectorAll(".card");
allCards.forEach((card) => {
  card.setAttribute("data-viewed", "true");
});
console.info("Added data-viewed='true' to all .card elements:", allCards);

// 6. Select the product with data-product-id="2" and change its price to "$24.99".
const product2 = document.querySelector('.card[data-product-id="2"] .price');
if (product2) {
  product2.textContent = "$24.99";
  console.info("Updated price for product with ID 2:", product2);
}
