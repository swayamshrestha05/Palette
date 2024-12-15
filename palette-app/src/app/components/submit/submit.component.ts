import { Component, computed, inject, Signal } from '@angular/core';
import { PaletteServiceService, Authorization } from '../../services/palette-service.service';
import { FormsModule, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-submit',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ToolBarComponent, RouterLink],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})

export class SubmitComponent {
  paletteService: PaletteServiceService = inject(PaletteServiceService);
  fb = inject(FormBuilder);
  authFormData: AuthenticationForm | null = null; 
  authorized: boolean = false;
  adminAuth: Authorization | null = null;
  
  route: ActivatedRoute = inject(ActivatedRoute);
  id = 'CCOj6t9wl9qmh0K0kAQM';
  credentials: Signal<Authorization[]> = toSignal(this.paletteService.credentials$, { initialValue: [] });

  currCredential$: Signal<Authorization | undefined> = computed(()=>{
    return this.credentials().find((credentials) => credentials.id === this.id);
   })

  authForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onArtworkSubmit(): void{
    this.authFormData = {
      username: this.authForm.get('username')!.value,
      password: this.authForm.get('password')!.value,
    }

  }

  onArtistSubmit(): void{
    this.authFormData = {
      username: this.authForm.get('username')!.value,
      password: this.authForm.get('password')!.value,
    }

  }

  isAuthorized():boolean{
    if (this.authForm.get('username')!.value === this.currCredential$()!.username &&
    this.authForm.get('password')!.value === this.currCredential$()!.password){
        return true;
      }

      return false;
  }

}

export interface AuthenticationForm{
  username: string | null;
  password: string | null;
}