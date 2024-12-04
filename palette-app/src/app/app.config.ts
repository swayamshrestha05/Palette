import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()
    ,provideFirebaseApp(() => initializeApp(
      { projectId: "palette-e3d2a", 
        appId: "1:550839041311:web:317d2f7de8a4fc32ea842a",
        storageBucket: "palette-e3d2a.firebasestorage.app", 
        apiKey: "AIzaSyCohkYxhFZ_o6peAz-tI-UgPh7h_dxmckk", 
        authDomain: "palette-e3d2a.firebaseapp.com", 
        messagingSenderId: "550839041311", 
        measurementId: "G-P6TCNQK1FN" })), 
        provideFirestore(() => getFirestore())
  ]
};
