import { TestBed } from '@angular/core/testing';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { ImageService } from './updata.service';


describe('ImageService', () => {
  let service: ImageService;
  let imageDetailList: AngularFireList<any> | undefined;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireDatabase }

      ]
    });
    service = TestBed.inject(ImageService);

  });


});
