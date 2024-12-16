import { Component, computed, inject, Signal } from '@angular/core';
import { Artist, PaletteServiceService } from '../../services/palette-service.service';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ArtworkCardComponent } from '../artwork-card/artwork-card.component';

@Component({
  selector: 'app-artist-detail',
  imports: [ToolBarComponent, ArtworkCardComponent],
  templateUrl: './artist-detail.component.html',
  styleUrl: './artist-detail.component.css'
})
export class ArtistDetailComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);

  route: ActivatedRoute = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  artists: Signal<Artist[]> = toSignal(this.paletteService.artists$, { initialValue: [] });

  currArtist$: Signal<Artist | undefined> = computed(()=>{
    return this.artists().find((artist) => artist.id === this.id);
   })
}
