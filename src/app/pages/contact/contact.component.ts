import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, CardModule, DividerModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  openLinkedIn() {
    window.open('https://www.linkedin.com/in/camille-cabrol-7b6648169/', '_blank');
  }

  sendMail() {
    window.location.href = 'mailto:camille.cabrol@free.fr';
  }
}
