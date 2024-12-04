import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-tool-bar',
  imports: [MatToolbarModule, RouterLink],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})

export class ToolBarComponent {

}
