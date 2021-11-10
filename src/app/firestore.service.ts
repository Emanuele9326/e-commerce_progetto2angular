import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }
  uploadArt(art: any): Promise<any> {

    return this.firestore.collection('cookie').add(art);
  };

  getDates(): Observable<any> {
    return this.firestore.collection("cookie", ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  deleteData(id: string): Promise<any> {
    return this.firestore.collection('cookie').doc(id).delete();
  }

}
