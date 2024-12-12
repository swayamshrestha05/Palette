import { Component, computed, inject, Signal } from '@angular/core';
import { Artwork, PaletteServiceService } from '../../services/palette-service.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { ArtworkCardComponent } from '../artwork-card/artwork-card.component';

@Component({
  selector: 'app-ceramics',
  imports: [ToolBarComponent, ArtworkCardComponent],
  templateUrl: './ceramics.component.html',
  styleUrl: './ceramics.component.css'
})

export class CeramicsComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);
  route: ActivatedRoute = inject(ActivatedRoute);
  // artwork = signal<Artwork | null>(null);
  category = "ceramics";
  artworks: Signal<Artwork[]> = toSignal(this.paletteService.artworks$, { initialValue: [] });

  currArtwork$: Signal<Artwork | undefined> = computed(()=>{
    return this.artworks().find((artwork) => artwork.category === this.category);
   })
}
