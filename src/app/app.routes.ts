import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProgrammingComponent } from './components/courses/programming/programming.component';
import { DesignComponent } from './components/courses/design/design.component';
export const routes: Routes = [
    { 'path': '', component: HomeComponent },
    {
        'path': 'courses', component: CoursesComponent,
        children: [
            { path: '', redirectTo: 'programming', pathMatch: 'full' }, // Default route to programming
            { path: 'programming', component: ProgrammingComponent },
            { path: 'design', component: DesignComponent }
        ]

    }
];