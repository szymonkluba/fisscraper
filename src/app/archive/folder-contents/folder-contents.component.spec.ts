import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderContentsComponent } from './folder-contents.component';

describe('FolderContentsComponent', () => {
  let component: FolderContentsComponent;
  let fixture: ComponentFixture<FolderContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
