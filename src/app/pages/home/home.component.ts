import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ButtonModule, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  telechargerCV() {

  }

}

