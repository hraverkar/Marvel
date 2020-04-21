import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UniversalService } from "../universal.service";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.css"],
})
export class DescriptionComponent implements OnInit {
  public Data: any;
  message: any = {};
  subscription: Subscription;
  constructor(private universalService: UniversalService) {}

  ngOnInit() {}
}
