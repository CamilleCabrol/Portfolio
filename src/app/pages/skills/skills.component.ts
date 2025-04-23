import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipModule} from 'primeng/chip';
import {ButtonGroupModule} from 'primeng/buttongroup';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';

type Competence = {
  nom: string;
  image: string;
  categorie: string;
  description?: string;
};

@Component({
  selector: 'app-skills',
  imports: [CommonModule, ChipModule, ButtonGroupModule, ButtonModule, TooltipModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {
  categories = ["Tous", "Langages", "Frameworks", "Outils", "Soft Skills"];
  selectedCategory = "Tous";

  competences: Competence[] = [
    {nom: "Java", image: "assets/icons/java.png", categorie: "Langages", description: "Utilisé depuis 3 ans, je l'ai pratiqué à l'école et également pendant 2 ans en entreprise."},
    {nom: "C#", image: "assets/icons/csharp.png", categorie: "Langages"},
    {nom: "TypeScript", image: "assets/icons/typescript.png", categorie: "Langages"},
    {nom: "JavaScript", image: "assets/icons/javascript.png", categorie: "Langages"},
    {nom: "SQL", image: "assets/icons/sql.png", categorie: "Langages"},
    {nom: "HTML", image: "assets/icons/html.png", categorie: "Langages"},
    {nom: "CSS", image: "assets/icons/css.png", categorie: "Langages"},
    {nom: "XML", image: "assets/icons/xml.png", categorie: "Langages"},
    {nom: "PHP", image: "assets/icons/php.png", categorie: "Langages"},

    {nom: "Angular", image: "assets/icons/angular.png", categorie: "Frameworks"},
    {nom: "Spring", image: "assets/icons/spring.png", categorie: "Frameworks"},
    {nom: "Bootstrap", image: "assets/icons/bootstrap.png", categorie: "Frameworks"},
    {nom: "JPA", image: "assets/icons/jpa.png", categorie: "Frameworks"},
    {nom: "GitLab", image: "assets/icons/gitlab.png", categorie: "Frameworks"},
    {nom: "GitHub", image: "assets/icons/github.png", categorie: "Frameworks"},
    {nom: "Docker", image: "assets/icons/docker.webp", categorie: "Frameworks"},
    {nom: "VueJs", image: "assets/icons/vuejs.png", categorie: "Frameworks"},
    {nom: "JQuery", image: "assets/icons/jquery.png", categorie: "Frameworks"},
    {nom: "Symfony", image: "assets/icons/symfony.png", categorie: "Frameworks"},

    {nom: "Git", image: "assets/icons/git.png", categorie: "Outils"},
    {nom: "IntelliJ", image: "assets/icons/intellij.png", categorie: "Outils"},
    {nom: "WebStorm", image: "assets/icons/webstorm.png", categorie: "Outils"},
    {nom: "VSCode", image: "assets/icons/vscode.png", categorie: "Outils"},
    {nom: "pgAdmin", image: "assets/icons/pgadmin.png", categorie: "Outils"},
    {nom: "SQLServer", image: "assets/icons/sqlserver.png", categorie: "Outils"},
    {nom: "MS Project", image: "assets/icons/msproject.png", categorie: "Outils"},
    {nom: "Gantt Project", image: "assets/icons/ganttproject.png", categorie: "Outils"},
    {nom: "Pack Office", image: "assets/icons/packoffice.png", categorie: "Outils"},
    {nom: "Figma", image: "assets/icons/figma.png", categorie: "Outils"},

    {nom: "Écoute & communication", image: "assets/icons/ecoutecommunication.jpg", categorie: "Soft Skills"},
    {nom: "Créative", image: "assets/icons/creativite.jpg", categorie: "Soft Skills"},
    {nom: "Esprit d’équipe", image: "assets/icons/teamwork.jpg", categorie: "Soft Skills"},
    {nom: "Esprit critique", image: "assets/icons/espritcritique.jpg", categorie: "Soft Skills"},
  ];

  get filteredCompetences() {
    if (this.selectedCategory === "Tous") return this.competences;
    return this.competences.filter(c => c.categorie === this.selectedCategory);
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}
