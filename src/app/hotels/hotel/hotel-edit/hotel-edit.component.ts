import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelListService} from "../../shared/services/hotel-list.service";
import {IHotel} from "../../shared/models/hotel";

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.scss']
})
export class HotelEditComponent implements OnInit {
   hotelForm: FormGroup;

   hotel: IHotel;



  constructor(
    private fb: FormBuilder,
    private route : ActivatedRoute,
    private hotelService: HotelListService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formulaire
   console.log(this.formulaire());

    this.route.paramMap.subscribe(params=>{
      const id = +params.get('id');
      //console.log(id);
      this.getSelectedHotel(id); //pour récupérer les données

    });

    //this.getSelectedHotel('id');
  }
  //ce formulaire ne depend pas du model jusque là
  // notre createForm
  formulaire(){
    this.hotelForm = this.fb.group({
      hotelName : ['', Validators.required],
      description: ['', Validators.required],
      price: [''],
      starRating: ['']
    });
  }


  saveHotel():void {
    if (this.hotelForm.value){
      if(this.hotelForm.dirty){

        const hotel: IHotel = {
          ...this.hotel,
          ...this.hotelForm.value
        };

        if(hotel.id == 0){
          this.hotelService.createHotel(hotel).subscribe({
            next: () =>this.saveCompleted()
          });

        }else{
          this.hotelService.updateHotel(hotel).subscribe({
            next: () =>this.saveCompleted()
          })
        }
      }
    }
  }

  public saveCompleted(): void{
    this.hotelForm.reset();
    this.router.navigate(['/hotels'])
  }

  getSelectedHotel(id:number):void{
    this.hotelService.getHotelById(id).subscribe(
      (hotel:IHotel)=>{
        //console.log(hotel);
        this.displayHotel(hotel);
      }
    )
  }

  //patchValue permet d'appeler les valeurs dans un formulaire
  //notre prepare

  public displayHotel(hotel:IHotel): void{
    this.hotel = hotel;

    this.hotelForm.patchValue({
      hotelName: this.hotel.hotelName,
      price: this.hotel.price,
      starRating: this.hotel.rating,
      description: this.hotel.description
    });
  }

  getTilte(){
<<<<<<< HEAD
    if(this.hotel?.id==0){
=======
    if(this.hotel?.hotelId==0){
>>>>>>> origin/master
      return 'créer un hotel';
    }else{
      return `Modifier l\'hotel ${this.hotel?.hotelName}`
    }

  }

}














function afficheNom(nom: string, prenom?: string): void {
  let texte = nom; //on a definie la variable
  if (prenom) {
    texte += ' ' + prenom; // => (nouveauTexte = ancienTexte + prenom ) / a = +25 => a = a +25
  }
  alert(texte);
}
//afficheNom('Durand');
console.log('Dupont', 'Marcel');

function ajouter(base, ...elements) {
  for (var i = 0; i < elements.length; i++) {
    base += elements[i];
  }
  return base;
}
var resultat = ajouter(10, 1, 2); // =>13
console.log(resultat);

function compresse(value: string, mode: string | number) {
  if (typeof mode === 'string') {
    return value.substr(0, mode.length); // il va limiter le nombre de carractère (de value) en fonction de la taille de mode
  }
  else if (typeof mode === 'number') {
    return value.substr(0, mode); //il va limiter le nombre de carractère (de value) en fonction de la valeur de mode
  }
  return value;
}
console.log(compresse('trucacompresser', 6)); //
console.log(compresse('trucacompresser', 'comprimer'));

var str = "Apples are round, and apples are juicy.";
console.log("(1,2): "    + str.substr(1,2));
console.log("(-2,2): "   + str.substr(-2,2)); //
console.log("(1): "      + str.substr(1));
console.log("(-20, 2): " + str.substr(-20,2));
console.log("(20, 2): "  + str.substr(20,2));

