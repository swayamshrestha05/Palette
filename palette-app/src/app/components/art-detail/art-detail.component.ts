import { Component, computed, inject, input, Signal } from '@angular/core';
import { Artwork, PaletteServiceService } from '../../services/palette-service.service';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-art-detail',
  imports: [ToolBarComponent],
  templateUrl: './art-detail.component.html',
  styleUrl: './art-detail.component.css'
})
export class ArtDetailComponent {
  id = input.required<string>();
  paletteService: PaletteServiceService = inject(PaletteServiceService);
  
  }