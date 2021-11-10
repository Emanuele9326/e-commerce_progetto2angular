import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import { environment } from 'src/environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UploadsComponent } from './uploads/uploads.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DetailPageDscriptionComponent } from './detail-page-dscription/detail-page-dscription.component';
import { FormsModule } from '@angular/forms';
import { Search_detail_descriptionComponent } from './search_detail_description/search_detail_description.component';
import { DeleteComponent } from './delete/delete.component';
import { Delete_imgComponent } from './delete_img/delete_img.component';
import { Delete_dataComponent } from './delete_data/delete_data.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailPageComponent,
    PageNotFoundComponent,
    UploadsComponent,
    CartComponent,
    SearchBarComponent,
    DetailPageDscriptionComponent,
      Search_detail_descriptionComponent,
      DeleteComponent,
      Delete_imgComponent,
      Delete_dataComponent
   ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
