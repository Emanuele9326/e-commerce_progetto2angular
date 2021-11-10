import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageService } from '../updata.service';
import { UploadsComponent } from './uploads.component';



const imageServiceStub = {
  getImageDetailList: () => ({
    'imageDetails': {}
  })
}


describe('UploadsComponent', () => {
  let component: UploadsComponent;
  let fixture: ComponentFixture<UploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadsComponent],
      providers: [
        { provide: ImageService, useValue: imageServiceStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
