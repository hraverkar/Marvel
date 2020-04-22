import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-comics",
  templateUrl: "./comics.component.html",
  styleUrls: ["./comics.component.css"],
})
export class ComicsComponent implements OnInit {
  @Input() comicsData: any;
  name:any;
  constructor() {
  }
  ngOnInit() {
    this.name = this.comicsData;
    console.table(this.name);
  }
}
