import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';

export interface Shirt { name: string; price: number; };
export interface ShirtId extends Shirt { id: string; };


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  cookie: Observable<any> | undefined;
  cookie1: any;
  array: Array<any> | undefined;


  constructor(
    public firestore: AngularFirestore,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cookie = this.firestore.collection('cookie').valueChanges();
    this.cookie1 = this.cookie.subscribe(value => {
      this.array = value;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);

  }

}







