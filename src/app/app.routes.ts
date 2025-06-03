import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RoomBookingComponent } from './components/room-booking-project/room-booking-project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
  {
    path: 'projects/room-booking',
    component: RoomBookingComponent,
    data: { title: 'Gestionnaire de Salles' },
  },
];
