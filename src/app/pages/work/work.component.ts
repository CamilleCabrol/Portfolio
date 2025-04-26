import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineModule} from 'primeng/timeline';

@Component({
  selector: 'app-work',
  imports: [CommonModule, TimelineModule],
  standalone: true,
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  experiences = [
    {
      title: 'Apprentie développeuse full-stack',
      company: 'TollSys',
      date: 'Du 08/09/2022 au 06/09/2024',
      description: 'Lors de mon alternance chez TollSys, j’ai participé au projet de modernisation du système de péage du pont de l’île de Ré. Intégrée dès le début au sein de l\'équipe projet composée de 1 lead développeur, 1 développeuse et moi-même, j\'ai contribué à la rédaction des spécifications fonctionnelles puis au développement back-end (Java/Spring Boot) et front-end (Angular). Ce projet m\'a permis de renforcer mes compétences en développement, en gestion de base de données (PostgreSQL) ainsi qu’en gestion de projet agile adaptée. Cette expérience a été très formatrice sur les aspects techniques, méthodologiques et relationnels.',
      skills: ['Java', 'Spring', 'TypeScript', 'Angular', 'CSS', 'Git', 'Gitlab', 'Docker', 'MS Project']
    },
    {
      title: 'Stagiaire développeuse back-end',
      company: 'Capgemini',
      date: 'Du 23/05/2022 au 12/08/2022',
      description: 'Lors de mon stage chez Capgemini Montpellier, j’ai travaillé au sein du service bancaire pour le compte du CATS (Crédit Agricole Technologies & Service). J\'ai participé à deux projets : d\'abord sur la phase de recette d\'un projet consistant au développement et correction d\'anomalies sur une API de gestion de patrimoine, puis sur la phase de conception d\'un projet de modernisation d\'une application patrimoniale. Cette expérience m\'a permis de développer mes compétences en Java, en modélisation UML (RSA Modeler), en outils de gestion de projet (Jira, Git, Jenkins) et de mieux appréhender le travail en méthode cycle en V optimisée par l\'agilité. J\'ai également renforcé mes capacités d\'adaptation et de travail en équipe.',
      skills: ['Java', 'Spring', 'HTML', 'CSS', 'Git', 'Gitlab', 'Jira', 'Jenkins', 'RSA Modeler']
    },
    {
      title: 'Stagiaire développeuse full-stack',
      company: 'Cirad',
      date: 'Du 01/02/2021 au 03/02/2024',
      description: 'Lors de mon stage au CIRAD, j’ai participé au développement et à l\'amélioration de la plateforme scientifique MEANS, dédiée à l’analyse de cycle de vie (ACV) dans les domaines agricoles et aquacoles. J\'ai principalement travaillé sur la partie administration du site : ajout de filtres et d\'exports CSV sur plusieurs pages, amélioration de l’ergonomie, mise en place de politiques de sécurité (mot de passe, droits utilisateurs), et création d\'un tableau de bord interactif pour le suivi des utilisateurs et des projets. Cette expérience m’a permis de consolider mes compétences en Java, Spring, JavaScript, SQL (PostgreSQL), ainsi qu’en intégration d’éléments visuels dynamiques (Chart.js) dans un environnement MVC.',
      skills: ['Java', 'Spring', 'HTML', 'CSS', 'JavaServerPages', 'JavaScript', 'PHP', 'ChartJs', 'PostgreSQL']
    }
  ];
}
