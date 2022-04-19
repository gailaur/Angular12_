import { NgModule } from '@angular/core';
import {HotelListComponent} from "./hotel-list/hotel-list.component";
import {HotelDetailComponent} from "./hotel-detail/hotel-detail.component";
import {StarRatingComponent} from "../shared/composants/star-rating/star-rating.component";
import {ReplaceComma} from "../shared/pipes/replace-comma.pipe";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HotelDetailGuard} from "../shared/guards/hotel-detail.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {HotelEditComponent} from "./hotel-edit/hotel-edit.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HotelData} from "../shared/api/hotel.data";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";


const routes: Routes = [
  {path: '', component:HotelListComponent},
  {path: 'hotels', component:HotelListComponent},
  {path: 'hotels/:id', component: HotelDetailComponent, canActivate:[HotelDetailGuard]},
  {path: 'hotels/:id/edit', component: HotelEditComponent,},
];


@NgModule({
  declarations: [
    HotelListComponent,
    HotelDetailComponent,
    HotelEditComponent,
    StarRatingComponent,
    ReplaceComma,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    InMemoryWebApiModule.forFeature(HotelData),
    MatFormFieldModule,
    MatSelectModule,

  ]
})
export class HotelModule { }
