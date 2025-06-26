import { Component, HostListener,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
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
    { name: 'Java', icon: 'java.svg' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'React.js', icon: 'react.svg' },
    { name: 'Node.js', icon: 'node.svg' },
    { name: 'Express.js', icon: 'express.svg' },
    { name: 'MySql', icon: 'mysql.svg' },
    { name: 'MongoDB', icon: 'mongo.svg' },
    { name: 'HTML5', icon: 'html.svg' },
    { name: 'CSS3', icon: 'css.svg' },
    { name: 'JavaScript', icon: 'js.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'Github', icon: 'github.svg' },
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
      title: "Panveyo",
      description: "Panveyo: One platform for POS, Inventory, Payroll & AI Forecasting – run your whole business smarter.",
      tags: ["Angular", "Node.js", "MySQL","Rest Api"],
      image: "panveyo.png",
      link: "https://panveyo.live/"
    },
    {
  title: "CorpKites",
  description: "CorpKites: One platform for employee, event creation & HR coordination – manage corporate events seamlessly.",
  tags: ["React.js", "Spring Boot", "MySQL","Rest Api"],
  image: "corp.png",
  link: "https://corpkites.netlify.app/"
},
    {
      title: "RD interiors",
      description: "RD interiors: One platform to showcase personal design portfolio present your work professionally.",
      tags: ["Angular", "RestApi", "Google Sheets","Sheety APi"],
      image: "rd.png",
      link: "https://rdinteriors.netlify.app/"
    }
  ];




contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  loading = false;

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Form is invalid',
        text: 'Please fill in all required fields correctly.',
        background: 'linear-gradient(90deg, #1c1c1c 13.56%, #0f4038 84.01%)',
  color: 'white',
  confirmButtonColor: '#3ccfb6',
  confirmButtonText: 'Got it!',
  customClass: {
    container: 'swal-container',
    popup: 'swal-popup',
    title: 'swal-title',
    htmlContainer: 'swal-content',  
    confirmButton: 'swal-confirm-btn',
    icon: 'swal-icon'
  }
      });
      return;
    }

    this.loading = true;

    this.contactService.sendContactForm({ sheet1: this.contact }).subscribe({
      next: () => {
        this.loading = false;
        Swal.fire({
  icon: 'success',
  title: 'Message Sent!',
  text: 'Thank you for reaching out. I\'ll get back to you soon.',
  background: 'linear-gradient(90deg, #1c1c1c 13.56%, #0f4038 84.01%)',
  color: 'white',
  confirmButtonColor: '#3ccfb6',
  confirmButtonText: 'Got it!',
  customClass: {
    container: 'swal-container',
    popup: 'swal-popup',
    title: 'swal-title',
    htmlContainer: 'swal-content',  // Changed from 'content' to 'htmlContainer'
    confirmButton: 'swal-confirm-btn',
    icon: 'swal-icon'
  }
});
        form.resetForm();
        this.contact={
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      },
      error: () => {
        this.loading = false;
        Swal.fire({
  icon: 'error',
  title: 'Submission Failed',
  text: 'There was an issue sending your message. Please try again.',
  background: 'linear-gradient(90deg, #1c1c1c 13.56%, #0f4038 84.01%)',
  color: 'white',
  confirmButtonColor: '#3ccfb6',
  confirmButtonText: 'Got it!',
  customClass: {
    container: 'swal-container',
    popup: 'swal-popup',
    title: 'swal-title',
    htmlContainer: 'swal-content', 
    confirmButton: 'swal-confirm-btn',
    icon: 'swal-icon'
  }
});
      }
    });
  }

  

}