import { Component, inject } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { PaletteServiceService } from '../../services/palette-service.service';

@Component({
  selector: 'app-artist-submission',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ToolBarComponent],
  templateUrl: './artist-submission.component.html',
  styleUrl: './artist-submission.component.css'
})

export class ArtistSubmissionComponent {
  fb = inject(FormBuilder);
  paletteService: PaletteServiceService = inject(PaletteServiceService);

  submitArtistForm = this.fb.group({
    name: ['', Validators.required],
    class: ['', Validators.required],
    major: ['', Validators.required], 
    interests: [''],
    email: ['',Validators.required],
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
    };
    this.submitArtistForm.reset();
    this.paletteService.submitArtist(this.formData);
  }
}

export interface ArtistForm{

  name: string | null;
  class: string | null;
  major: string | null;
  interests?: string | null;
  email: string | null;
}