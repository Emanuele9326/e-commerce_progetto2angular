import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-search_detail_description',
  templateUrl: './search_detail_description.component.html',
  styleUrls: ['./search_detail_description.component.css']
})
export class Search_detail_descriptionComponent implements OnInit {
  collection: any;
  collection1: any;
  name: string | undefined;
  description: string | undefined;
  ingrediants: string | undefined;
  weight: string | undefined;
  price: string | undefined;
  imgurl: string | undefined;
  item: object | undefined;
  array_parameter: any[] | undefined


  constructor(public route: ActivatedRoute,
    public firestore: AngularFirestore,
    public cartService: CartService,

  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => this.handleRouteChange(params.name))
  }

  handleRouteChange(name: any) {

    const array_parameter = name.split('');
    let i = Number(array_parameter![0]);

    this.collection = this.firestore.collection('cookie').valueChanges();
    this.collection1 = this.collection.subscribe((array: any) => {
      this.item = array[i];
      this.name = array[i].name;
      this.description = array[i].descrizione;
      this.ingrediants = array[i].ingredienti;
      this.weight = array[i].peso;
      this.price = array[i].prezzo;
      this.imgurl = array[i].imgurl;


    });

  }

  addToCart(product: any) {
    this.cartService.addToCart(product);

  }
}


