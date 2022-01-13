import { TestBed } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Overlay } from "@angular/cdk/overlay";
import { Store } from "@ngrx/store";

class StoreMock {
  dispatch(): void {

  }
}

describe('NotificationsService', () => {
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MatSnackBar,
        Overlay,
        { provide: Store, useClass: StoreMock }
      ]
    });
    service = TestBed.inject(NotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
