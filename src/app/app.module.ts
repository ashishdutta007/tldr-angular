import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CryptoFormComponent } from "./crypto-form/crypto-form.component";
import { CryptoService } from "./crypto.service";
import { SurveySummaryComponent } from "./survey-summary/survey-summary.component";
import { YesNoPipe } from "./yes-no.pipe";

const routes = [
  {
    path: "",
    component: CryptoFormComponent,
  },
  {
    path: "submitted",
    component: SurveySummaryComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    CryptoFormComponent,
    SurveySummaryComponent,
    YesNoPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
