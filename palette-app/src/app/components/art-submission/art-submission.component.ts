import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import {Angular}

@Component({
  selector: 'app-art-submission',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule, ToolBarComponent],
  templateUrl: './art-submission.component.html',
  styleUrls: ['./art-submission.component.css']
})

export class ArtSubmissionComponent {
  fb = inject(FormBuilder);
  
  contactForm = this.fb.group({
    id: ['', Validators.required],
    image: [null, Validators.required],
    title: ['', Validators.required],
    year: ['', [Validators.required, Validators.pattern("^(19|20)\\d{2}$")]], // Matches years like 1900-2099
    artist: ['', Validators.required],
    medium: [''],
    dimensions: [''],
    price: ['', Validators.pattern("^\\d+(\\.\\d{1,2})?$")], // Optional, but if provided, must be a valid decimal number
    description: [''],
    category: ['', Validators.required],
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    textBox: [false],
    emailBox: [false],
    phoneNumber: ['', Validators.pattern("[0-9]{10}")],
    email: ['', Validators.email],
  });

  title: string = 'Enter your artwork information, please';
  formData: Form | null = null;


  onSubmit(): void {
    this.formData = {
      image: this.contactForm.get('image')!.value,
      title: this.contactForm.get('title')!.value,
      year: this.contactForm.get('year')!.value,
      artist: this.contactForm.get('artist')!.value,
      medium: this.contactForm.get('medium')!.value,
      dimensions: this.contactForm.get('dimensions')!.value,
      price: Number(this.contactForm.get('price')!.value),
      description: this.contactForm.get('description')!.value,
      category: this.contactForm.get('category')!.value,
    };
    this.contactForm.reset();
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      console.log(file);
    }
  }
  
}

export interface Form {
  image: File | null;
  title: string | null;
  year: string | null;
  artist: string | null;
  medium?: string | null;
  dimensions?: string | null;
  price?: number | null;
  description?: string | null;
  category: string | null;
}
