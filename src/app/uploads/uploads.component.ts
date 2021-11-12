import { FirestoreService } from './../firestore.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ImageService } from '../updata.service';
import { ref, remove } from 'firebase/database';
import { getDatabase } from '@firebase/database';





@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],

})
export class UploadsComponent implements OnInit {

  //form 1
  imgSrc: string | undefined;
  selectedImage: any = null;
  isSubmitted: boolean | undefined;

  collection: string | undefined;
  imgurl: string | undefined;
  items: any;


  //form 1
  formTemplate = new FormGroup({
    imageurl: new FormControl('', Validators.required)
  })

  //From 2
  submitted = false;
  formArtc: FormGroup;


  constructor(
    private afStorage: AngularFireStorage,
    private service: ImageService,
    public db: AngularFireDatabase,
    private firestoreService: FirestoreService,
    private fb: FormBuilder
  ) {




    this.formArtc = this.fb.group({
      imgurl: new FormControl({ value: null, disabled: true }, Validators.required),
      name: ['', Validators.required],
      ID_prodotto:['', Validators.required],
      prezzo: ['', Validators.required],
      peso: ['', Validators.required],
      descrizione: ['', Validators.required],
      ingredienti: ['', Validators.required]

    })

  }



  ngOnInit() {
    this.service.getImageDetailList()
    this.resetForm();


  }

  //preview image
  showPreview(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];

    } else {
      this.imgSrc = '/assets/image/img-placeholder.jpg';
      this.selectedImage = null;
    }
  }

  //validation form
  onSubmit(formValue: any) {
    this.isSubmitted = true;
    const db = getDatabase();
    remove(ref(db));

    //valid template check
    if (this.formTemplate.valid) {
      var filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.afStorage.ref(filePath);

      //upload storage
      this.afStorage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {

          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageurl'] = url;
            this.imgurl = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe()
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageurl: ''
    });
    this.imgSrc = '/assets/image/img-placeholder.jpg';
    this.isSubmitted = false;
    this.selectedImage = null;
  }

  insertItem() {
    if (this.formArtc.invalid) {
      this.submitted = true;
      console.log(this.formArtc.invalid);
    }

    const art: any = {

      imgurl: this.imgurl,
      name: this.formArtc.value.name,
      ID: this.formArtc.value.ID_prodotto,
      prezzo: this.formArtc.value.prezzo,
      peso: this.formArtc.value.peso,
      descrizione: this.formArtc.value.descrizione,
      ingredienti: this.formArtc.value.ingredienti,


    }

    if (art.imgurl == undefined || this.formArtc.invalid) {
      this.submitted = true;
      console.log(this.submitted)
    } else {
      if (this.submitted) {
        this.submitted = false;
      }
      this.firestoreService.uploadArt(art).then(() => {

        console.log('prodotto inserito con successo');
        window.alert('prodotto inserito con successo');
        this.resetForm2();

      }).catch(error => {
        console.log(error)
      });
    }

  }

  resetForm2() {
    this.formArtc.reset();
    this.formArtc.setValue({
      imgurl: '',
      name: '',
      ID_prodotto:'',
      prezzo: '',
      peso: '',
      descrizione: '',
      ingredienti: ''
    });
  }
}

