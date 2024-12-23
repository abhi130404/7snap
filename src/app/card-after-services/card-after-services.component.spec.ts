import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAfterServicesComponent } from './card-after-services.component';

describe('CardAfterServicesComponent', () => {
  let component: CardAfterServicesComponent;
  let fixture: ComponentFixture<CardAfterServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAfterServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAfterServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
