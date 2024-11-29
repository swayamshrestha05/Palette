import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArtDetailComponent } from './components/art-detail/art-detail.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path:'art/:id', component: ArtDetailComponent},
    { path: 'artist/:id', component: ArtistDetailComponent},
    { path: 'artists', component: ArtistsComponent},
    {path: 'contact', component: ContactComponent},
    { path: '**', redirectTo:''},
];