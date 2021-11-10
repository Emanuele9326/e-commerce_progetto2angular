import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-delete_data',
  templateUrl: './delete_data.component.html',
  styleUrls: ['./delete_data.component.css']
})
export class Delete_dataComponent implements OnInit {
  date: any[] = [];

  constructor(public _firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._firestoreService.getDates().subscribe(data => {
      this.date = [];
      data.forEach((element: any) => {
        this.date.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  deleteData(id: string) {

    this._firestoreService.deleteData(id).then(() => {
      console.log('articolo eliminato con successo');
      window.alert('prodotto eliminato');
    }).catch(error => {
      console.log(error);
    })
  }

}
