import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineModule} from 'primeng/timeline';

@Component({
  selector: 'app-school',
  imports: [CommonModule, TimelineModule],
  standalone: true,
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})
export class SchoolComponent {
  studies = [
    {
      degree: 'Master MIAGE – Méthodes Informatiques Appliquées à la Gestion d\'Entreprises',
      school: 'Université Grenoble Alpes',
      date: '2024',
      description: `J'ai obtenu mon master MIAGE à l'Université Grenoble Alpes. Ce cursus en alternance, à forte dominante informatique et orienté gestion, m’a permis de développer des compétences solides en développement d'applications (Java, bases de données avancées, développement mobile), en ingénierie des systèmes d'information, ainsi qu’en gestion de projet (méthodologies agiles et cycle en V). En deuxième année, j'ai également suivi l'option entreprenariat, qui m’a apporté des bases solides en création et gestion de projets innovants. Grâce à de nombreux projets concrets et à l’alternance, j’ai acquis une vision complète du cycle de vie d'un projet numérique, ainsi qu'une capacité à évoluer en environnement professionnel agile et exigeant.`
    },
    {
      degree: 'Licence MIAGE – Méthodes Informatiques Appliquées à la Gestion d\'Entreprises',
      school: 'Université Grenoble Alpes',
      date: '2022',
      description: `J'ai obtenu ma licence Informatique parcours MIAGE à l'Université Grenoble Alpes. Cette troisième année de licence, orientée informatique de gestion, m’a permis d’acquérir de solides bases en programmation orientée objet, systèmes et réseaux, bases de données, ainsi qu’en gestion commerciale et comptable. J’ai également été formée à l'analyse et la conception de systèmes d'information et à la validation d'algorithmes. Ce parcours, conçu pour préparer une poursuite naturelle en master MIAGE, a allié rigueur technique, compréhension des enjeux métiers et premiers projets professionnels en équipe.`
    },
    {
      degree: 'BTS SIO – Services Informatiques aux Organisations',
      school: 'Lycée Jean Mermoz – Montpellier',
      date: '2021',
      description: `J'ai obtenu mon BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) dans l'Académie de Montpellier. Cette formation m’a permis d’acquérir des compétences solides en développement d’applications, en conception de bases de données, ainsi qu’en gestion de projets informatiques. Durant cette formation, j'ai réalisé un stage en entreprise en deuxième année, ce qui m'a permis d'appliquer mes connaissances sur le terrain. À l’issue du BTS, j'ai poursuivi mes études en intégrant une licence MIAGE, dans la continuité de mon projet professionnel orienté informatique de gestion.`
    },
    {
      degree: 'Licence Informatique',
      school: 'Faculté des Sciences – UM2',
      date: '2019',
      description: `Cette formation m’a permis d’acquérir des bases en algorithmique, programmation fonctionnelle et programmation en langage C, ainsi qu'une initiation aux systèmes informatiques et aux bases de données. Le programme incluait également des enseignements en mathématiques appliquées à l’informatique, en architecture des ordinateurs, en statistiques et en culture générale scientifique. Ces premières expériences universitaires ont consolidé mon intérêt pour l’informatique de gestion et ont préparé la suite de mon parcours vers des formations plus spécialisées.`
    },
    {
      degree: 'Baccalauréat Scientifique Sciences de l\'Ingénieur, spé Informatique et Sciences du Numérique',
      school: 'Lycée Auguste Loubatières – Agde',
      date: '2017',
      description: `J'ai obtenu mon Baccalauréat S SI option ISN, mention Assez Bien. Cette formation m’a permis d’acquérir des compétences solides en mathématiques, physique-chimie et sciences de l'ingénieur, tout en développant une culture numérique grâce à l'option ISN. `
    }
  ];
}
