import { Delete_dataComponent } from './delete_data/delete_data.component';
import { Delete_imgComponent } from './delete_img/delete_img.component';
import { DeleteComponent } from './delete/delete.component';
import { Search_detail_descriptionComponent } from './search_detail_description/search_detail_description.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPageComponent } from './detail-page/detail-page.component';
import { DetailPageDscriptionComponent } from './detail-page-dscription/detail-page-dscription.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UploadsComponent } from './uploads/uploads.component';


const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'uploads', component: UploadsComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'detail-page',
    component: DetailPageComponent,
    children: [
      { path: 'detail-page-dscription/:parameter/:i', component: DetailPageDscriptionComponent },
      { path: "search_detail_description/:name", component: Search_detail_descriptionComponent, runGuardsAndResolvers: 'paramsChange' }
    ],
    runGuardsAndResolvers: 'paramsChange'
  },
  {
    path: 'delete',
    component: DeleteComponent,
    children: [
      { path: 'delete_img', component: Delete_imgComponent },
      { path: 'delete_data', component: Delete_dataComponent },
    ]
  },

  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




