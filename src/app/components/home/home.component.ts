import { Component, HostListener,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutMe = {
    intro: "Hey, I'm Darpan!",
    description: "Full Stack Developer with expertise in building modern web applications. Passionate about creating efficient, scalable solutions with clean code.",
    points: [
      "2+ years of professional development experience",
      "Specialized in Angular and Node.js",
      "Strong focus on user experience and performance"
    ]
  };

 activeTestimonial = 0;
  testimonials = [
    {
      text: "Darpan is an exceptional developer with a keen eye for detail. His ability to solve complex problems with elegant solutions is truly impressive.",
      author: "John Doe",
      role: "Senior Developer at TechCorp"
    },
    {
      text: "Working with Darpan was a pleasure. His communication skills and technical expertise made our project a great success.",
      author: "Jane Smith",
      role: "Project Manager at InnovateCo"
    },
    {
      text: "I've rarely seen someone with such dedication to clean code and best practices. Darpan sets a high standard for the team.",
      author: "Mike Johnson",
      role: "CTO at DigitalSolutions"
    }
  ];

  ngOnInit() {
    // Optional: Auto-rotate testimonials
    setInterval(() => this.nextTestimonial(), 5000);
  }

  nextTestimonial() {
    this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.activeTestimonial = (this.activeTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.activeTestimonial = index;
  }






  skills = [
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'Material Design', icon: 'material-design.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'Firebase', icon: 'firebase.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'REST API', icon: 'api.svg' },
    { name: 'WordPress', icon: 'wordpress.svg' },
    { name: 'Figma', icon: 'figma.svg' },
    { name: 'Photoshop', icon: 'photoshop.svg' },
    { name: 'Illustrator', icon: 'illustrator.svg' },
    { name: 'InDesign', icon: 'indesign.svg' },
    { name: 'Growth Mindset', icon: 'growth.svg' }
  ];

  introText = `I have experience with various frontend and design tools and am always open to learning new technologies. 
  Staying up to date with the fast pace of the web is important to me. I adapt easily to deliver current and high-quality results.`;

  footerText = {
    question: 'Do you need another skill?',
    description: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
    cta: 'Let\'s Talk'
  };








  projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration and admin dashboard.",
      tags: ["Angular", "Spring Boot", "MySQL"],
      image: "ecommerce.jpg",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio with dark/light mode toggle.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "portfolio.jpg",
      link: "#"
    }
  ];

}