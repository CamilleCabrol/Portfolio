import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MenubarModule],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'À propos',
        items: [
          {
            label: 'Informations personnelles',
            icon: 'pi pi-info',
            routerLink: '/a-propos'
          },
          {
            label: 'Parcours professionnel',
            icon: 'pi pi-briefcase',
            routerLink: '/parcours-professionnel'
          },
          {
            label: 'Parcours scolaire',
            icon: 'pi pi-graduation-cap',
            routerLink: '/parcours-scolaire'
          },
          {
            label: 'Recommandations',
            icon: 'pi pi-clipboard',
            routerLink: '/recommandations'
          },
        ]
      },
      {
        label: 'Projets',
        icon : 'pi pi-code',
        routerLink: '/projets'
      },
      {
        label: 'Compétences',
        icon: 'pi pi-star',
        routerLink: '/competences'
      },
      {
        label: 'Contact',
        icon: 'pi pi-user',
        routerLink: '/contact'
      }
    ];
  }
}
