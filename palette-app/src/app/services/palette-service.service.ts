import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore, Timestamp, collection, query, getDoc, doc } from '@angular/fire/firestore';
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
  }

  getArtwork(id: string): Observable<Artwork | null>{
    console.log(id);
    const docRef = doc(this.firestore, 'artworkCollection', id);
    return new Observable<Artwork | null>((observer) => {
        getDoc(docRef).then(docSnap => {
          if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
          } else {
            console.log('No such document!');
          }
        }).catch(error => {
          console.error('Error getting document:', error);
        });
      });
    }
  }
  

export interface Artwork{
  id: string;
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
  id: number;
  name: string;
  class: string;
  major: string;
  interests: string;
  contactDetails: string;
}



