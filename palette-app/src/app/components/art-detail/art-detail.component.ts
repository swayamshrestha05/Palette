import { Component, computed, inject, input, signal, Signal } from '@angular/core';
import { Artwork, PaletteServiceService } from '../../services/palette-service.service';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-art-detail',
  imports: [ToolBarComponent],
  templateUrl: './art-detail.component.html',
  styleUrl: './art-detail.component.css'
})
export class ArtDetailComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);
  route: ActivatedRoute = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  artworks: Signal<Artwork[]> = toSignal(this.paletteService.artworks$, { initialValue: [] });

  currArtwork$: Signal<Artwork | undefined> = computed(()=>{
    return this.artworks().find((artwork) => artwork.id === this.id);
   })

}