/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from '../firestore.service';
import { Delete_dataComponent } from './delete_data.component';
import { from } from 'rxjs';


const result = [
  { name: '', imgurl: '', descrizione: '', prezzo: '', peso: '', ingredienti: '' },
  { name: '', imgurl: '', descrizione: '', prezzo: '', peso: '', ingredienti: '' },
  { name: '', imgurl: '', descrizione: '', prezzo: '', peso: '', ingredienti: '' },
];

const firestoreServiceStub = {
  getDates: () => from(result)
}

describe('Delete_dataComponent', () => {
  let component: Delete_dataComponent;
  let fixture: ComponentFixture<Delete_dataComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [Delete_dataComponent],
      providers: [
        { provide: FirestoreService, useValue: firestoreServiceStub }

      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Delete_dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
