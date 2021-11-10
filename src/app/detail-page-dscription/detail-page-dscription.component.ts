import { CartService } from './../cart.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-detail-page-dscription',
  templateUrl: './detail-page-dscription.component.html',
  styleUrls: ['./detail-page-dscription.component.css']
})
export class DetailPageDscriptionComponent implements OnInit {

  cookie: Observable<any> | undefined;
  cookie1: any;
  name: string | undefined;
  imgurl: string | undefined;
  descrizione: string | undefined;
  prezzo: string | undefined;
  ingredienti: string | undefined;
  peso: string | undefined;
  item: any;


  constructor(private route: ActivatedRoute,
    public firestore: AngularFirestore,
    public cartService: CartService) { }

  ngOnInit() {

    const i = Number(this.route.snapshot.paramMap.get('i'));
    const parameter = this.route.snapshot.paramMap.get('parameter');

    console.log()
    this.cookie = this.firestore.collection('cookie').valueChanges();

    this.cookie1 = this.cookie.subscribe(art => {

      this.item = art[i]

      this.name = art[i].name;

      this.imgurl = art[i].imgurl;
      this.descrizione = art[i].descrizione;
      this.prezzo = art[i].prezzo;
      this.ingredienti = art[i].ingredienti;
      this.peso = art[i].peso;


    })


  }


  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}










