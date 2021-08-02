import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  flag: boolean = true;
  images = ['../../../../assets/imgs/products/chicken-and-rice.jpg', '../../../../assets/imgs/products/chicken-and-rice.jpg'];
  constructor(
    private config: NgbCarouselConfig
  ) {
    this.config.interval = 1000;
    this.config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }



}
