import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Titre 1',
      description: 'Description 1',
      technos: ['Angular', 'Spring Boot', 'JWT', 'TypeScript'],
      link: 'lien1',
      image: 'assets/images/portfolio.jpg'
    },
    {
      title: 'Titre 2',
      description: 'Description 2',
      technos: ['Angular', 'SCSS', 'PrimeNG'],
      link: 'lien2',
      image: 'assets/images/portfolio.jpg'
    },
    {
      title: 'Titre 3',
      description: 'Description 3',
      technos: ['Angular', 'HTML', 'CSS'],
      link: 'lien3',
      image: 'assets/images/portfolio.jpg'
    }
  ];
}
