import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatCardModule, MatGridListModule, ToolBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  artworks = [
    {
      image: 'path_to_image1.jpg',
      title: 'Learning the Truth',
      artist: 'Allison Zuckerman',
      year: '2016',
      price: 'Price on request',
    },
    {
      image: 'path_to_image2.jpg',
      title: 'Unique Painting',
      artist: 'Adam Handler',
      year: '',
      price: 'Price on request',
    },
    {
      image: 'path_to_image3.jpg',
      title: 'The modern and contemporary auction',
      artist: 'Albert Willem',
      year: '2024',
      price: '€16,000–€20,000',
    },
    {
      image: 'path_to_image4.jpg',
      title: 'Summer in the city',
      artist: 'Albert Willem',
      year: '2024',
      price: '€25,000–€27,000',
    },
    {
      image: 'path_to_image5.jpg',
      title: 'Park Stroll',
      artist: 'Ekaterina Ermilkina',
      year: '2024',
      price: 'US$2,150',
    },
    // Add more artworks as needed
  ];
}
