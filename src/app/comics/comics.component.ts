import { Component, OnInit } from "@angular/core";
import { UniversalService } from "../universal.service";

@Component({
  selector: "app-comics",
  templateUrl: "./comics.component.html",
  styleUrls: ["./comics.component.css"],
})
export class ComicsComponent implements OnInit {
  Data: any;
  constructor(private universalService: UniversalService) {}
  ngOnInit() {

  }
}
