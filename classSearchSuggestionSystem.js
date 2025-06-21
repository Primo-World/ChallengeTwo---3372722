class SearchSuggestionSystem {
    constructor(products) {
        // Sort the products lexicographically
        this.products = products.slice().sort();
    }

    getSuggestions(searchWord) {
        const result = [];
        let prefix = '';
        let filtered = this.products;

        for (const char of searchWord) {
            prefix += char;
            // Filter products that start with the current prefix
            filtered = filtered.filter(product => product.startsWith(prefix));
            // Add up to 3 matches for the current prefix
            result.push(filtered.slice(0, 3));
        }

        return result;
    }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";
const system = new SearchSuggestionSystem(products);
console.log(system.getSuggestions(searchWord));
// Output:
// [
//   ["mobile", "moneypot", "monitor"],
//   ["mobile", "moneypot", "monitor"],
//   ["mouse", "mousepad"],
//   ["mouse", "mousepad"],
//   ["mouse", "mousepad"]
// ]