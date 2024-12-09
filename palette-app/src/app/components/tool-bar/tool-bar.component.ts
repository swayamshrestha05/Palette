import { Component, computed, inject, Signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool-bar',
  imports: [MatToolbarModule, RouterLink, CommonModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})

export class ToolBarComponent {
  isHome: boolean = false;
  router: Router = inject(Router);

  constructor(){
    this.router.events.subscribe(()=>{
      this.isHome = this.router.url ==='/';
    })
  }

}
