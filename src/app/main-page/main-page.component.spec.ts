import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../cart.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MainPageComponent } from './main-page.component';
import { from } from 'rxjs';

const data = [[
  { descrizione: "", imgurl: "", ingredienti: "", name: "", peso: "", prezzo: "" },
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

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [
        CartService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
