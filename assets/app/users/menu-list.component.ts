import { Component, OnInit } from "@angular/core";
import { Item } from "./item";
import { Cart } from "./cart";
import { CartService } from "./cart.service";

@Component({
  selector: 'menu-list',
  template: `
    <h1>{{cart.name}} Menu</h1>
    <section>
       <menu-detail *ngFor="let item of items" [item]=item></menu-detail>
    </section>
  `
})
export class MenuListComponent implements OnInit {
  constructor(private cartService: CartService) {}

  items: Item[] = [];
  cart: Cart;

  ngOnInit() {
    this.cart = this.cartService.votedCart;
    this.cartService.getItems(this.cartService.votedCart)
      .subscribe(
        items => {
          this.items = items;
        },
        error => console.log('cannot get carts error')
      );
  }
}
