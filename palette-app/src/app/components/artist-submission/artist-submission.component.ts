import { Component, inject } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { PaletteServiceService } from '../../services/palette-service.service';
import { getDownloadURL, getStorage, ref, Storage, uploadBytes } from '@angular/fire/storage';


@Component({
  selector: 'app-artist-submission',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ToolBarComponent],
  templateUrl: './artist-submission.component.html',
  styleUrl: './artist-submission.component.css'
})

export class ArtistSubmissionComponent {
  fb = inject(FormBuilder);
  fireStorage: Storage = inject(Storage);
  paletteService: PaletteServiceService = inject(PaletteServiceService);
  imageURL: string = '';

  submitArtistForm = this.fb.group({
    name: ['', Validators.required],
    class: ['', Validators.required],
    major: ['', Validators.required], 
    interests: [''],
    email: ['',Validators.required],
    image: [null, Validators.required],
  });

  formData: ArtistForm | null = null;

  onSubmit(): void {
    console.log('hello world');
    this.formData = {
      name: this.submitArtistForm.get('name')!.value,
      email: this.submitArtistForm.get('email')!.value,
      class: this.submitArtistForm.get('class')!.value,
      major: this.submitArtistForm.get('major')!.value,
      interests: this.submitArtistForm.get('interests')!.value,
      image: this.imageURL,
    };
    this.submitArtistForm.reset();
    this.paletteService.submitArtist(this.formData);
  }

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

export interface ArtistForm{
  name: string | null;
  class: string | null;
  major: string | null;
  interests?: string | null;
  email: string | null;
  image: string | null;
}