import { Component, computed, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PaletteServiceService, Artwork, Artist } from '../../services/palette-service.service';
import { collectionData } from '@angular/fire/firestore';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-artwork-card',
  imports: [MatCardModule, CommonModule, RouterLink ],
  templateUrl: './artwork-card.component.html',
  styleUrl: './artwork-card.component.css'
})
export class ArtworkCardComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);

  isHome: boolean = false;
  router: Router = inject(Router);

  constructor(){
    this.router.events.subscribe(()=>{
      this.isHome = this.router.url ==='/';
    })
  }

  route: ActivatedRoute = inject(ActivatedRoute);
  // artwork = signal<Artwork | null>(null);
  id = this.route.snapshot.paramMap.get('id');
  artists: Signal<Artist[]> = toSignal(this.paletteService.artists$, { initialValue: [] });

  currArtist$: Signal<Artist | undefined> = computed(()=>{
    return this.artists().find((artist) => artist.id === this.id);
   })
}
