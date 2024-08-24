import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component'; // Ensure correct import path
import { HomeComponent } from './components/home/home.component'; // Import HomeComponent
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from "./components/courses/courses.component"; // Import FooterComponent


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HomeComponent, FooterComponent, CoursesComponent], // Add FooterComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Ensure the correct path
})

export class AppComponent {
  title = 'coursaty';
}