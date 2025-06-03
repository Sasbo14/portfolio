import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-room-booking',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './room-booking-project.component.html',
  styleUrls: ['./room-booking-project.component.scss'],
})
export class RoomBookingComponent {
  // Données de démonstration
  projectDetails = {
    title: 'Gestionnaire de Réservation de Salles',
    description:
      'Application console Java pour la gestion des réservations de salles avec vérification des conflits',
    features: [
      'Gestion des salles (capacité, équipements)',
      'Système de réservation intelligent',
      'Vérification des conflits de planning',
      'Gestion des utilisateurs',
    ],
    technologies: ['Java 17', 'POO', 'Collections', 'java.time'],
    codeSnippets: {
      availabilityCheck: `public boolean isAvailable(LocalDateTime start, LocalDateTime end) {
  return bookings.stream().noneMatch(booking -> 
    !start.isAfter(booking.getEndTime()) && 
    !end.isBefore(booking.getStartTime())
  );
}`,
    },
  };
}
