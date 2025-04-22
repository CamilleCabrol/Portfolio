import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ButtonModule, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  telechargerCV(): void {
    const fileUrl = 'assets/CV_CABROL_Camille_Developpeuse.pdf';

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'CV_CABROL_Camille_Developpeuse.pdf';
    a.click();
  }
}

