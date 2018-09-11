import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Tour} from '../model';
import {TourService} from '../tour.service';
@Component({
  selector: 'app-tour',   // TODO check the selectors
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  tours: Tour[];
  selectedTour: Tour;

  constructor(private router: Router, private tourService: TourService) { }

  ngOnInit() {
    this.tourService.getTours().subscribe( data => { this.tours = data; });
  }

  onSelect(tour: Tour): void {
    this.selectedTour = tour;
  }

}
