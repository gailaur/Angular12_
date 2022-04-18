import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {HotelModule} from "./hotels/hotel/hotel.module";


const routes: Routes = [
  {path:'', redirectTo: 'hotels', pathMatch:'full'},
  {path: 'hotels', loadChildren: () => import('./hotels/hotel/hotel.module').then(m => m.HotelModule)},
  {path: '**', redirectTo: 'hotels', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    HotelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
