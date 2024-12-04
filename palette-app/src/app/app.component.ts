import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardContent } from '@angular/material/card';
import { PaletteServiceService } from './services/palette-service.service';

import { MatCardModule } from '@angular/material/card';
import { MatGridTile } from '@angular/material/grid-list';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, RouterOutlet, MatToolbarModule, CommonModule, MatCardContent, MatCardModule, MatGridTile],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'palette-app';
  
  paletteService: PaletteServiceService = inject(PaletteServiceService);
  // artworks$: Observable<Artwork[]> = this.paletteService.getArtwork();


}

