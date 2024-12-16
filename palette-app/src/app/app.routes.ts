import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArtDetailComponent } from './components/art-detail/art-detail.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { PaintingsComponent } from './components/paintings/paintings.component';
import { DrawingsComponent } from './components/drawings/drawings.component';
import { CeramicsComponent } from './components/ceramics/ceramics.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ArtSubmissionComponent } from './components/art-submission/art-submission.component';
import { SubmitComponent } from './components/submit/submit.component';
import { ArtistSubmissionComponent } from './components/artist-submission/artist-submission.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path:'art/:id', component: ArtDetailComponent},
    { path: 'artist/:id', component: ArtistDetailComponent},
    { path: 'artists', component: ArtistsComponent},
    { path: 'submit', component: SubmitComponent},
    { path: 'paintings', component: PaintingsComponent},
    { path: 'drawings', component: DrawingsComponent},
    { path: 'ceramics', component: CeramicsComponent},
    { path: 'photography', component: PhotographyComponent},
    { path: 'submit-artwork', component: ArtSubmissionComponent},
    { path: 'submit-artist', component: ArtistSubmissionComponent},
    { path: '**', redirectTo:''},
];