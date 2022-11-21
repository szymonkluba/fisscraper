import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFilesComponent } from './current-files.component';
import { DropboxService } from '../../shared/services/dropbox.service';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IFile } from '../../shared/models/file.model';

class DropboxServiceMock {}

class StoreMock {
  select(): Observable<ReadonlyArray<IFile>> {
    return of([
      {
        name: 'test',
        id: 'test',
        path_display: 'test',
        path_lower: 'test',
      },
    ]);
  }
}

describe('CurrentFilesComponent', () => {
  let component: CurrentFilesComponent;
  let fixture: ComponentFixture<CurrentFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentFilesComponent],
      providers: [
        { provide: DropboxService, useClass: DropboxServiceMock },
        { provide: Store, useClass: StoreMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
