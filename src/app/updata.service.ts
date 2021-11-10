import { Injectable } from '@angular/core';
import { AngularFireList } from '@angular/fire/compat/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class ImageService {
  //picture details list
  imageDetailList: AngularFireList<any> | undefined;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    //imageDetails is the RealtimeDatabase node name
    this.imageDetailList = this.firebase.list('imageDetails');
  }
  insertImageDetails(imageDetails: any) {

    if (this.imageDetailList) {
      this.imageDetailList.push(imageDetails);
    }
  }

}



