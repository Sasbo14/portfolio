import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Ajouté
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true, // <-- Ajouté
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>Mon Portfolio</span>
      <nav>
        <a mat-button routerLink="/">Accueil</a>
        <a mat-button routerLink="/projects">Projets</a>
        <a mat-button routerLink="/contact">Contact</a>
      </nav>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular';
}
