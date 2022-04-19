import { Injectable } from '@angular/core';
import {IHotel} from "../models/hotel";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import * as url from "url";
import {error} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class HotelListService {

  private readonly HOTEL_API_URL = 'api/hotels';
  constructor(private http: HttpClient) {}
/*
  public getHotels(): IHotel[]{

  return[
      {
        "hotelId": 1,
        "hotelName": "Buea sweet life",
        "description": "Belle vue au bord de la mer",
        "price": 230.5,
        "imageUrl": "assets/images/1.png",
        "rating": 3.5
      },
      {
        "hotelId": 2,
        "hotelName": "Marakech",
        "description": "Profitez de la vue sur les montagnes",
        "price": 145.5,
        "imageUrl": "assets/images/2.jpg",
        "rating": 5
      },
      {
        "hotelId": 3,
        "hotelName": "Abudja new look palace",
        "description": "Séjour complet avec service de voitures",
        "price": 120.12,
        "imageUrl": "assets/images/3.png",
        "rating": 4
      },
      {
        "hotelId": 4,
        "hotelName": "Cape town city",
        "description": "Magnifique cadre pour votre séjour",
        "price": 135.12,
        "imageUrl": "assets/images/4.jpg",
        "rating": 2.5
      }
    ];
  } */


  // getAll
  public getHotels(): Observable <IHotel[]>{
    return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
      tap(hotels => console.log('hotels: ', hotels)),
      catchError(this.handleError)
    );
  }

  //getOne

  /*public getHotelById(id:number): Observable<IHotel>{

    if(id==0){
      return  of(this.getDefaultHotel());
    }
    return this.getHotels().pipe(
      map(hotels=>hotels.find(hotel=>hotel.id==id))
    );
  }*/

  public getHotelById(id:number): Observable<IHotel>{

    const url = `${this.HOTEL_API_URL}/${id}`;

    if(id==0){
      return  of(this.getDefaultHotel());
    }
    return this.http.get<IHotel>(url).pipe(
      catchError(this.handleError)
    );
  }

  private getDefaultHotel():IHotel{
    return {
      id: 0,
      hotelName: null,
      description: null,
      price: null,
      rating: null,
      category: null,
      imageUrl: null
    }
  }
  public updateHotel(hotel:IHotel): Observable<IHotel>{
    const url = `${this.HOTEL_API_URL}/${hotel.id}`;

    return this.http.put<IHotel>(url, hotel).pipe(
      catchError(this.handleError)
    );
  }

    createHotel(hotel: IHotel): Observable<IHotel>{
    return this.http.post<IHotel>(this.HOTEL_API_URL, hotel).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error :HttpErrorResponse)
    {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }
}
