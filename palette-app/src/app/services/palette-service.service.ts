import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore, Timestamp, collection, query, getDoc, doc, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaletteServiceService {
  firestore: Firestore = inject (Firestore);
  artworks$: Observable<Artwork[]>;
  artists$: Observable<Artist[]>;
  credentials$: Observable<Authorization[]>;
  
  
  constructor() {
    console.log('Firestore initialized:', !!this.firestore);

    const artistCollection = collection(this.firestore,'artists');
    const q1 = query(artistCollection);
    this.artists$ = collectionData(q1, { idField: 'id' }) as Observable<Artist[]>;
    
    const artworkCollection = collection(this.firestore, 'artworks');
    const q2 = query(artworkCollection);
    this.artworks$ =  collectionData(q2, { idField: 'id' }) as Observable<Artwork[]>;
    
    const authCollection = collection(this.firestore, 'admin_auth');
    const q3 = query(authCollection);
    this.credentials$ =  collectionData(q3, { idField: 'id' }) as Observable<Authorization[]>;
  }

    // add a new document to Firebase in the 'artworks' collection
    submitArt(formData: any){
      const artworkCollection = collection(this.firestore, 'artworks');
      addDoc(artworkCollection, formData); 
    }

    // add a new document to Firebase in the 'artists' collection
    submitArtist(formData: any){
      const artistCollection = collection(this.firestore, 'artists');
      addDoc(artistCollection, formData); 
    }
  }

  
export interface Authorization{
  id: string;
  username: string;
  password: string;
}  

export interface Artwork{
  id: string;
  image: string;
  title: string;
  year: string;
  artist: string;
  medium?: string;
  dimensions?: string;
  price?: number;
  description?: string;
  category: string;
}

export interface Artist{
  image: string;
  id: string;
  name: string;
  class: string;
  major: string;
  interests: string;
  email: string;
}

