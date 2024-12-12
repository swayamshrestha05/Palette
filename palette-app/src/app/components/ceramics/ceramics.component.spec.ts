import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicsComponent } from './ceramics.component';

describe('CeramicsComponent', () => {
  let component: CeramicsComponent;
  let fixture: ComponentFixture<CeramicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeramicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeramicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
