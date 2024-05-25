import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinComponent } from './appoin.component';

describe('AppoinComponent', () => {
  let component: AppoinComponent;
  let fixture: ComponentFixture<AppoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
