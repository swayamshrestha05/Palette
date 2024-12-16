import { Component, inject } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { getDownloadURL, getStorage, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { PaletteServiceService } from '../../services/palette-service.service';

@Component({
  selector: 'app-art-submission',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ToolBarComponent],
  templateUrl: './art-submission.component.html',
  styleUrls: ['./art-submission.component.css']
})

export class ArtSubmissionComponent {
  fb = inject(FormBuilder);
  fireStorage: Storage = inject(Storage);
  paletteService: PaletteServiceService = inject(PaletteServiceService);

  title: string = 'Enter your artwork information, please';
  formData: ArtForm | null = null;
  imageURL: string = '';

  submitArtForm = this.fb.group({
    image: [null, Validators.required], // an image file
    title: ['', Validators.required],
    year: ['', [Validators.required, Validators.pattern("^(19|20)\\d{2}$")]], // Matches years like 1900-2099
    artist: ['', Validators.required],
    medium: [''],
    dimensions: [''],
    price: ['', Validators.pattern("^\\d+(\\.\\d{1,2})?$")], // Optional, but if provided, must be a valid decimal number
    description: [''],
    category: ['', Validators.required],
  });

  // this function stores the submitted form details to the Firestore Database
  // and resets the form
  onSubmit(): void {
    this.formData = {
      image: this.imageURL,
      title: this.submitArtForm.get('title')!.value,
      year: this.submitArtForm.get('year')!.value,
      artist: this.submitArtForm.get('artist')!.value,
      medium: this.submitArtForm.get('medium')!.value,
      dimensions: this.submitArtForm.get('dimensions')!.value,
      price: Number(this.submitArtForm.get('price')!.value),
      description: this.submitArtForm.get('description')!.value,
      category: this.submitArtForm.get('category')!.value,
    };
    this.submitArtForm.reset();
    this.paletteService.submitArt(this.formData);
  }

  // this function stores the image uploaded by the user into Firebase Storage,
  // gets the downloadURL of the image and returns this URL
  // Note: Uploading images and retrieving URLs were implemented by referring to these pages:
  // https://stackoverflow.com/questions/45714007/firebase-get-download-url-after-successful-image-upload-to-firebase-storage
  // https://firebase.google.com/docs/storage/web/upload-files
  // https://stackoverflow.com/questions/70051736/firebase-storage-typescript-error-property-on-does-not-exist-on-type-promise
  uploadImage = (event: Event) => {
    const storage = getStorage()
    const fileInput = event.target as HTMLInputElement;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0]
      const reference = ref(storage, file.name)

      uploadBytes(reference, file)
        .then(snapshot => {
          return getDownloadURL(snapshot.ref)
        })
        .then(downloadURL =>
          {(this.imageURL = downloadURL)
        })
    }
  }
  
}

// an interface to store all the details from the submitArtForm
export interface ArtForm {
  image: string | null;
  title: string | null;
  year: string | null;
  artist: string | null;
  medium?: string | null;
  dimensions?: string | null;
  price?: number | null;
  description?: string | null;
  category: string | null;
}
