import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAfterIncludeServicesComponent } from './image-after-include-services.component';

describe('ImageAfterIncludeServicesComponent', () => {
  let component: ImageAfterIncludeServicesComponent;
  let fixture: ComponentFixture<ImageAfterIncludeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAfterIncludeServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageAfterIncludeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
