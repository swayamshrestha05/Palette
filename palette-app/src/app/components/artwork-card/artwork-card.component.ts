import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PaletteServiceService, Artwork } from '../../services/palette-service.service';
import { collectionData } from '@angular/fire/firestore';
import { Router, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-artwork-card',
  imports: [MatCardModule, CommonModule, RouterLink ],
  templateUrl: './artwork-card.component.html',
  styleUrl: './artwork-card.component.css'
})
export class ArtworkCardComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);

  // artworks$: Observable<Artwork[]> = this.paletteService.getArtwork();
}
