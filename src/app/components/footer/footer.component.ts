import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  socialLinks = [
    { icon: 'github', type: 'brands', url: 'https://github.com/darpan1401' },
    { icon: 'linkedin-in', type: 'brands', url: 'https://www.linkedin.com/in/darpan-dasani-9a891b338/' },
    { icon: 'envelope', type: 'solid', url: 'mailto:darpanvydasani14@gmail.com' }
  ];
}