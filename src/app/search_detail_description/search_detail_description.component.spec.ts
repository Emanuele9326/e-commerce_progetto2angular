import { MainPageComponent } from './../main-page/main-page.component';
import { RouterModule } from '@angular/router';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Search_detail_descriptionComponent } from './search_detail_description.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CartService } from '../cart.service';
import { from } from 'rxjs'

const data = [[
  { peso: '', prezzo: '', imgurl: '', descrizione: '', name: '', ingredienti: "" },
  { peso: '', prezzo: '', imgurl: '', descrizione: '', name: '', ingredienti: "" },
  { peso: '', prezzo: '', imgurl: '', descrizione: '', name: '', ingredienti: "" },
  { peso: '', prezzo: '', imgurl: '', descrizione: '', name: '', ingredienti: "" },
  { peso: '', prezzo: '', imgurl: '', descrizione: '', name: '', ingredienti: "" },
  { peso: '', prezzo: '', imgurl: '', descrizione: '', name: '', ingredienti: "" },
]];


const angularFirestoreStub = {
  collection: (name: string) => ({
    valueChanges: () => from(data)
  })

}


describe('Search_detail_descriptionComponent', () => {

  let component: Search_detail_descriptionComponent;
  let fixture: ComponentFixture<Search_detail_descriptionComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        Search_detail_descriptionComponent,
        MainPageComponent
      ],
      providers: [
        CartService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ],

      imports: [
        RouterTestingModule,
        RouterModule.forRoot([
          { path: "main-page", component: MainPageComponent },
        ]),

      ],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search_detail_descriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
