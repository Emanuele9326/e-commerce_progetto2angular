import { AngularFirestore } from '@angular/fire/compat/firestore';

import { TestBed, async, inject } from '@angular/core/testing';
import { FirestoreService } from './firestore.service';
import { from } from 'rxjs';

const result = [
  { name: '', imgurl: '', descrizione: '', prezzo: '', peso: '', ingredienti: '' },
  { name: '', imgurl: '', descrizione: '', prezzo: '', peso: '', ingredienti: '' },
  { name: '', imgurl: '', descrizione: '', prezzo: '', peso: '', ingredienti: '' },
];
const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => from(result)
    })
  })
}


describe('Service: Firestore', () => {
  let service: FirestoreService;
  let angularfirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirestoreService,
        { provide: AngularFirestore, useValue: FirestoreStub }]
    });
  });

  it('should ...', inject([FirestoreService], (service: FirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
