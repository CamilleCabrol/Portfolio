import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  infos = [
    {
      icon: '📍',
      title: 'Localisation',
      text: 'Je vis à Montpellier, suis véhiculée et mobile.',
    },
    {
      icon: '🚗',
      title: 'Déplacements',
      text: 'Je suis ouverte à du télétravail partiel. Possibilité de déplacements ponctuels si nécessaire.',
    },
    {
      icon: '💼',
      title: 'Objectif professionnel',
      text: 'Je suis à la recherche d’un CDI dans la région de Montpellier et ses alentours.',
    },
    {
      icon: '🌐',
      title: 'Langues parlées',
      text: [
        '🇫🇷 Français – Langue maternelle',
        '🇬🇧 Anglais – Niveau C1',
        '🇪🇸 Espagnol – Niveau B1 (intermédiaire)',
      ],
    },
    {
      icon: '🏐',
      title: 'Sport & engagement',
      text: `Je suis joueuse de volleyball (niveau pré-national) et coach d’une équipe féminine (pré-régional d’accession et Coupe de France).`,
    },
  ];
  protected readonly Array = Array;
}
