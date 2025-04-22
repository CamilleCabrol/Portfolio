import { Component } from '@angular/core';
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
      { label: 'Accueil', routerLink: '/' },
      { label: 'À propos', routerLink: '/a-propos' },
      { label: 'Projets', routerLink: '/projets' },
      { label: 'Compétences', routerLink: '/competences' },
      { label: 'Contact', routerLink: '/contact' }
    ];
  }
}
