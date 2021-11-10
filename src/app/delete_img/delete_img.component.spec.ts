/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Delete_imgComponent } from './delete_img.component';

describe('Delete_imgComponent', () => {
  let component: Delete_imgComponent;
  let fixture: ComponentFixture<Delete_imgComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [Delete_imgComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Delete_imgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
