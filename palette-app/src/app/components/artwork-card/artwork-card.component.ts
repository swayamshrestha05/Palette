import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridTile } from '@angular/material/grid-list';
import { MatCardContent } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PaletteServiceService, Artwork } from '../../services/palette-service.service';
import { collectionData } from '@angular/fire/firestore';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-artwork-card',
  imports: [MatCardModule, CommonModule, MatCardContent, MatGridTile, AsyncPipe],
  templateUrl: './artwork-card.component.html',
  styleUrl: './artwork-card.component.css'
})
export class ArtworkCardComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);

  // artworks$: Observable<Artwork[]> = this.paletteService.getArtwork();
}
