import { Component, computed, inject, Signal } from '@angular/core';
import { Artwork, PaletteServiceService } from '../../services/palette-service.service';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { ArtworkCardComponent } from '../artwork-card/artwork-card.component';

@Component({
  selector: 'app-paintings',
  imports: [ToolBarComponent, ArtworkCardComponent],
  templateUrl: './paintings.component.html',
  styleUrl: './paintings.component.css'
})

export class PaintingsComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);
  route: ActivatedRoute = inject(ActivatedRoute);
  category = "paintings";
  artworks: Signal<Artwork[]> = toSignal(this.paletteService.artworks$, { initialValue: [] });

  currArtwork$: Signal<Artwork | undefined> = computed(()=>{
    return this.artworks().find((artwork) => artwork.category === this.category);
   })
}
