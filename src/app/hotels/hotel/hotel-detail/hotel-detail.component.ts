import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HotelListService} from "../../shared/services/hotel-list.service";
import {IHotel} from "../../shared/models/hotel";


@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  public hotel: IHotel = <IHotel>{};

  constructor(
    private route: ActivatedRoute,
    private hotelService : HotelListService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotels().subscribe((hotels: IHotel[])=>{
      this.hotel = hotels.find(hotel =>id ==id)
      console.log('hotel:', this.hotel);
    })
  }

  public backToList():void {
    this.router.navigate(['/hotels'])
  }







}
