// 1. Import Dependencies
import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { RaviComponent } from "./ravi.component";
// 2. Configure Dependencies

@NgModule({
  declarations: [RaviComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [RaviComponent]
})
// 3. Export Dependencies
export class RaviModule {}
