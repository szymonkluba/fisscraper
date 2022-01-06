import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderEntryComponent } from './folder-entry.component';

describe('FolderEntryComponent', () => {
  let component: FolderEntryComponent;
  let fixture: ComponentFixture<FolderEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
