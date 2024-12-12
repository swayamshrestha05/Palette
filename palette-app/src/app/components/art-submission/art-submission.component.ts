import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';

@Component({
  selector: 'app-art-submission',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule, ToolBarComponent],
  templateUrl: './art-submission.component.html',
  styleUrl: './art-submission.component.css'
})

export class ArtSubmissionComponent {
  fb = inject(FormBuilder);
  contactForm = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    textBox: [false],
    emailBox:[false],
    phoneNumber:['', Validators.pattern("[0-9]{10}")],
    email:['', Validators.email],
});

  title: string = 'Enter your artwork information, please';
  formData: Form | null = null;

  areFieldsInvalid(): boolean{
    if (!this.contactForm.get('textBox')!.value && !this.contactForm.get('emailBox')!.value){
      return true;
    } else {
      if(this.contactForm.get('textBox')!.value && !this.contactForm.get('phoneNumber')!.value){
        return true;
      } else{
        if (this.contactForm.get('emailBox')!.value && !this.contactForm.get('email')!.value){
          return true;
        }
      }
    }
    return false;
  }

  onSubmit(): void{
    this.formData ={
      first_name : this.contactForm.get('fname')!.value,
      last_name : this.contactForm.get('lname')!.value,
      email : this.contactForm.get('emailBox')!.value,
      email_address : this.contactForm.get('email')!.value,
      phone : this.contactForm.get('textBox')!.value,
      phone_number : this.contactForm.get('phoneNumber')!.value,
    }
    this.contactForm.reset();
  }

  checkBoxChange(value:string): void{
    if (value === 'textBox' && !this.contactForm.get('textBox')!.value){
      this.contactForm.get('phoneNumber')!.reset();
    }

    if (value === 'emailBox' && !this.contactForm.get('emailBox')!.value){
      this.contactForm.get('email')!.reset();
    }
  }
}

export interface Form{
  first_name: string | null,
  last_name: string | null,
  email : boolean | null,
  email_address: string | null,
  phone: boolean | null,
  phone_number: string | null,
}