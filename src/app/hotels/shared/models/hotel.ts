export interface IHotel{
  id:number;
  hotelName: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
}

export class Hotel implements IHotel{
  constructor(
    public id:number,
    public hotelName: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public category: string,
    public rating: number,
  ) {}

  getNewPrice(price: number): number {
    return price -5;
  }
}



