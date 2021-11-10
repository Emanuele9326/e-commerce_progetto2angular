/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SearchBarComponent } from './search-bar.component';
import { Search_input } from '../search_input';
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

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      providers: [
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
