import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceAfterNavarComponent } from './home-service-after-navar.component';

describe('HomeServiceAfterNavarComponent', () => {
  let component: HomeServiceAfterNavarComponent;
  let fixture: ComponentFixture<HomeServiceAfterNavarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeServiceAfterNavarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeServiceAfterNavarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
