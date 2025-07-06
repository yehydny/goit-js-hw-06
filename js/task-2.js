class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }

    getItems() {
            return this.#items;
        
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        const updatedItems = [];
        for (const item of this.#items) {
          if (item !== itemToRemove) {
            updatedItems.push(item);
          }
        }
        this.#items = updatedItems;
      }
}


// Код для перевірки ментором
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
