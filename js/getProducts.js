async function getProducts() {
    try {
        let resp = await fetch('../products/products.json');
        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        localStorage.setItem('products', JSON.stringify(await resp.json()))

    } catch (err) {
        console.error('Failed to fetch and parse the data:', err);
    }
}
getProducts()