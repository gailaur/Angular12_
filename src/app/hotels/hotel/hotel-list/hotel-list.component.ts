import { Component, OnInit } from '@angular/core';
import { IHotel } from '../../shared/models/hotel';
import {HotelListService} from "../../shared/services/hotel-list.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  public title='Liste des hotels';

  categoryFilter: string = '';
  private _hotelFilter ='';
  public filteredHotels: IHotel[] = [];


  public showBadge: boolean;
  public receivedRating: string;
  public hotels: IHotel []= [];
  hotelsBase: IHotel []= [];
  public errMsg: string;


  constructor(private hotelListService: HotelListService) {}

   ngOnInit(): void {

     this.hotelListService.getHotels().subscribe(res=>{
       if(res){
         this.hotels = res;
         this.filteredHotels = this.hotels;
       }
     },  error=>{
       this.errMsg = "not exist"
     });
    this._hotelFilter ='';
    this.categoryFilter ='';
  }

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string{
    return this._hotelFilter;
  }

  public set hotelFilter(filter:string){
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  public filterHotels(criteria:string): IHotel[]{
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1
    );
    return res;
  }

   tri(): IHotel[]{
    const res = this.hotels.filter(

      (hotel: IHotel) => hotel.category === this.categoryFilter
    );
    return res;
  }

  /**
   * FilterByCategory
   */
  filterByCategory() {
    this.hotels = this.hotelsBase;

    if (this.categoryFilter !='') {
      this.hotels = this.hotels.filter(el => el.category ==this.categoryFilter);
    }

  }


  public receiveRatingClick(message:string): void {
    console.log(message)
    this.receivedRating = message;
  }
}
