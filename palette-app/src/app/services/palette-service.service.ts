import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore, Timestamp, collection, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaletteServiceService {
  firestore: Firestore = inject (Firestore);
  artworks$: Observable<Artwork[]>;
  artists$: Observable<Artist[]>;
  
  
  constructor() {
    console.log('Firestore initialized:', !!this.firestore);

    const artistCollection = collection(this.firestore,'artists');
    const q1 = query(artistCollection);
    this.artists$ = collectionData<Artist[]>(q1);
    const artworkCollection = collection(this.firestore, 'artworks');
    const q2 = query(artworkCollection);
    this.artworks$ =  collectionData(q2, { idField: 'id' }) as Observable<Artwork[]>;
    console.log("helo", this.artists$)
  }
  }

export interface Artwork{
  image: string;
  title: string;
  year: Timestamp;
  artist: string;
  medium: string;
  dimensions: string;
  price?: number;
  description?: string;
}

export interface Artist{
  name: string;
  class: string;
  major: string;
  interests: string;
  contactDetails: string;
}



