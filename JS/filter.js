//Фильтр товаров
function filterProducts(products, filters) {
    for (let product of products) {
        if (product.price < filters.maxPrice && product.category === filters.category) {
            return product;
        }
    }
   
}
const products = [
    { name: "Ноутбук", price: 50000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Кофеварка", price: 15000, category: "электроника" }
];
const filters = { maxPrice: 20000, category: "электроника" };

console.log(filterProducts(products, filters));