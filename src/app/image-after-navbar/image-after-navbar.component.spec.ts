import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAfterNavbarComponent } from './image-after-navbar.component';

describe('ImageAfterNavbarComponent', () => {
  let component: ImageAfterNavbarComponent;
  let fixture: ComponentFixture<ImageAfterNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAfterNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageAfterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
