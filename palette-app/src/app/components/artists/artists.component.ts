import { Component, inject } from '@angular/core';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { PaletteServiceService } from '../../services/palette-service.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artists',
  imports: [ToolBarComponent, CommonModule, MatCardModule, RouterLink],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);

}
