import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  constructor() { }
  title = 'Liste Hotels';

  hotels:any[] = [
    {
      hotelId:1,
      hotelName:'Hilton Yaoundé Cameroun',
      price: 230.5,
      imageUrl:'assets/img/chambre1.jpg',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s content.',

    },
    {
      hotelId:2,
      hotelName:'Djega Palace Doula',
      price: 130.5,
      imageUrl:'assets/img/chambre2.jpg',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      hotelId:3,
      hotelName:'Hotel Franco Kribi',
      price: 93.5,
      imageUrl:'assets/img/chambre3.jpg',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      hotelId:4,
      hotelName:'Sam F Nice',
      price: 2305.8,
      imageUrl:'assets/img/chambre4.jpg',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      hotelId:5,
      hotelName:'Buea sweet life',
      price: 430.5,
      imageUrl:'assets/img/chambre5.jpg',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      hotelId:1,
      hotelName:'New belle Town',
      price: 43.5,
      imageUrl:'assets/img/chambre6.jpg',
      description:'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    }
  ];

  showBadge:Boolean;

  toggleIsNewbadge():void{
    this.showBadge  = ! this.showBadge;
  }
  hotelFilter = 'mot';
  ngOnInit(): void {

  }

}
