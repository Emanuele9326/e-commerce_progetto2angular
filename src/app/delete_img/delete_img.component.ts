import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, list, deleteObject } from "firebase/storage"
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete_img',
  templateUrl: './delete_img.component.html',
  styleUrls: ['./delete_img.component.css']
})
export class Delete_imgComponent implements OnInit {
  name_array: any[] = [];

  constructor() { }



  ngOnInit() {
    this.pageTokenExample();
  }

  async pageTokenExample() {
    const firebaseApp= initializeApp(environment.firebaseConfig)
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage);
    const firstPage = list(storageRef, { maxResults: 100 });
    const items = (await firstPage).items

    for (let i = 0; i < items.length; i++) {
      this.name_array.push(items[i].name)
    }



    if ((await firstPage).nextPageToken) {
      const secondPage = list(storageRef, {
        maxResults: 100,
        pageToken: (await firstPage).nextPageToken,
      })
      const items2 = (await secondPage).items;
      for (let i = 0; i < items2.length; i++) {
        this.name_array.push(items2[i].name)
      }
    }

  };

  delete(path: string | undefined) {
    const firebaseApp= initializeApp(environment.firebaseConfig)

    const storage = getStorage(firebaseApp);
    const desertRef = ref(storage, path);
    deleteObject(desertRef).then(() => {
      window.alert('immagine eliminata');
      window.location.reload();
    }).catch((error) => {
      console.log(error)
    })
  }



}



