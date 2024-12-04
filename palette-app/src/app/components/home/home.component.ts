import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { ArtworkCardComponent } from '../artwork-card/artwork-card.component';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatCardModule, MatGridListModule, ToolBarComponent, ArtworkCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
