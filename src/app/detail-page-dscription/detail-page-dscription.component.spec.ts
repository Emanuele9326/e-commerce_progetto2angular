import {from} from 'rxjs';

import {ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from './../cart.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MainPageComponent } from './../main-page/main-page.component';
import { DetailPageDscriptionComponent } from './detail-page-dscription.component';
import { RouterModule } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

const data =[
  {peso: '',prezzo: '',imgurl: '',descrizione: '',name: '',ingredienti: ""},
  {peso: '',prezzo: '',imgurl: '',descrizione: '',name: '',ingredienti: ""},
  {peso: '',prezzo: '',imgurl: '',descrizione: '',name: '',ingredienti: ""},
  {peso: '',prezzo: '',imgurl: '',descrizione: '',name: '',ingredienti: ""},
  {peso: '',prezzo: '',imgurl: '',descrizione: '',name: '',ingredienti: ""},
  {peso: '',prezzo: '',imgurl: '',descrizione: '',name: '',ingredienti: ""},
];


const angularFirestoreStub={
  collection:(name:string)=>({
    valueChanges: ()=> from(data)
  })

}


describe('DetailPageDscriptionComponent', () => {


  let component: DetailPageDscriptionComponent;
  let fixture: ComponentFixture<DetailPageDscriptionComponent>;


  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPageDscriptionComponent,
      MainPageComponent ],
      imports:[
        RouterTestingModule,
        RouterModule.forRoot([
          {path:"main-page",component:MainPageComponent},
        ]),
      ],
      providers:[
        CartService,
        {provide: AngularFirestore, useValue: angularFirestoreStub}
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPageDscriptionComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
