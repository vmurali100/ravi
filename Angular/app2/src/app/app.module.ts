import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LeelaComponent } from "./leela/leela.component";
import { RaviComponent } from './ravi/ravi.component';
import { LeelavathiComponent } from './leelavathi/leelavathi.component';
import { GayathriComponent } from './gayathri/gayathri.component';
import { LeelakrishnaComponent } from './leelakrishna/leelakrishna.component';

@NgModule({
  declarations: [AppComponent, LeelaComponent, RaviComponent, LeelavathiComponent, GayathriComponent, LeelakrishnaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
