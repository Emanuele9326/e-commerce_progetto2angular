import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //items stores current products in the cart
  items: any[] = [];
  addToArray: any;

  constructor() { }

  //add item to cart
  addToCart(product: any) {
    if (this.items.length === 0) {
      this.items.push(product);

      window.alert('Il prodotto è stato inserito nel carrello');
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === product.name) {
          this.addToArray = true;
        }
      };
      if (this.addToArray == true) {
        this.addToArray = false;
        window.alert("Prodotto già presente");
        console.log('prodotto già inserito');
      } else {
        this.items.push(product);

        window.alert('Il prodotto è stato inserito nel carrello');
      }
    }

  }
  // return shopping cart item
  getItems() {
    return this.items;
  }


  //delete cart items
  clearCart() {
    this.items = []
    return this.items;
  }

}
