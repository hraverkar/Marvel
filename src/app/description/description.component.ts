import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"],
})
export class DescriptionComponent {
  public comicsData: any;
  public eventsData: any;
  public seriesData: any;
  public storiesData: any;


  constructor(private router :Router) {
    this.getComicsData();
  }

  getComicsData(){
   this.comicsData =this.router.getCurrentNavigation().extras.state.data[0].comics.items;
   this.eventsData =this.router.getCurrentNavigation().extras.state.data[0].events.items;
   this.seriesData =this.router.getCurrentNavigation().extras.state.data[0].series.items;
   this.storiesData =this.router.getCurrentNavigation().extras.state.data[0].stories.items;
  }
}
