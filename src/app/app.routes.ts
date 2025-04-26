import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {ContactComponent} from './pages/contact/contact.component';
import {WorkComponent} from './pages/work/work.component';
import {SchoolComponent} from './pages/school/school.component';
import {RecommendationComponent} from './pages/recommendation/recommendation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'parcours-professionnel', component: WorkComponent },
  { path: 'parcours-scolaire', component: SchoolComponent },
  { path: 'recommandations', component: RecommendationComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'competences', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
