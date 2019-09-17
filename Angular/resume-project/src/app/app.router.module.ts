import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { InterestsComponent } from "./interests/interests.component";
import { SkillsComponent } from "./skills/skills.component";
import { AwardsComponent } from "./awards/awards.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "education", component: EducationComponent },
  { path: "interests", component: InterestsComponent },
  { path: "skills", component: SkillsComponent },
  { path: "awards", component: AwardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Step 5 :Exporting Routing Module
export class AppRoutingModule {}
