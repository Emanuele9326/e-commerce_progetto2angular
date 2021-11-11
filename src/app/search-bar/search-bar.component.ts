import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Search_input } from '../search_input';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements AfterViewInit,OnInit{

  collection: any;
  collection_obs: any;
  names: string[] = []
  rif: any;
  a: any;
  data: any[] = [];
  input_name: any;
  array: any[] | undefined;

  constructor(public firestore: AngularFirestore, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnInit() {

    this.collection = this.firestore.collection('cookie').valueChanges()
    this.collection_obs = this.collection.subscribe((array: any) => {

      for (let i = 0; i < array.length; i++) {
        this.data.push(i + '_' + array[i].name);
      };

    });


    this.input_name = new Search_input(this.data[0])


  }


}
