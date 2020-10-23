import { Component, OnInit } from "@angular/core";
import { CryptoService } from "../crypto.service";

@Component({
  selector: "app-crypto-form",
  templateUrl: "./crypto-form.component.html",
  styleUrls: ["./crypto-form.component.css"],
})
export class CryptoFormComponent implements OnInit {
  today = new Date();
  dogBreeds;
  dogBreedSurvey = {
    name: "Milo",
    favouriteDog: "Eskimo",
    comments: "For real !!!!",
  };

  constructor(public cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService.getBreeds().subscribe((data) => {
      console.log(Object.keys(data["message"]));
      this.dogBreeds = Object.keys(data["message"]);
    });
  }

  sendForm() {
    console.log(this.dogBreedSurvey);
  }
}
