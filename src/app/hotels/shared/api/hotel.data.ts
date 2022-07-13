import {InMemoryDbService} from "angular-in-memory-web-api";
import {IHotel} from "../models/hotel";
export class HotelData implements InMemoryDbService{

  createDb(): Record<string, IHotel[]>{
    const hotels: IHotel[] = [

      {
        id: 1,
        hotelName: 'Buea sweet life',
        description: 'Belle vue au bord de la mer',
        price: 230.5,
        imageUrl: 'assets/images/1.png',
        category: "A",
        rating: 3.5
      },
      {
        id: 2,
        hotelName: 'Marakech',
        description: 'Profitez de la vue sur les montagnes',
        price: 145.5,
        imageUrl: 'assets/images/2.jpg',
        category: "B",
        rating: 5
      },
      {
        id: 3,
        
        hotelName: 'Abudja new look palace',
        description: 'Séjour complet avec service de voitures',
        price: 120.12,
        imageUrl: 'assets/images/3.png',
        category: "A",
        rating: 4
      },
      {
        id: 4,
        hotelName: 'Cape town city',
        description: 'Magnifique cadre pour votre séjour',
        price: 135.12,
        imageUrl: 'assets/images/4.jpg',
        category: "B",
        rating: 2.5
      }
    ];
    return {hotels};
  }

  genId(hotels: IHotel[]): number{
    return hotels.length > 0 ? Math.max(...hotels.map(hotel =>hotel.id)) +1 : 1;
  }
}
