import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  windowWidth: number = 0;

  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth > 768) {
      this.isOpen = false;
      document.body.classList.remove('menu-open');
    }
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  closeMenu(): void {
    this.isOpen = false;
    document.body.classList.remove('menu-open');
  }
}