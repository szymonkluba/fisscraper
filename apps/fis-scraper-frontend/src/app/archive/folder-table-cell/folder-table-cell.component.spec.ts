import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTableCellComponent } from './folder-table-cell.component';

describe('FolderTableCellComponent', () => {
  let component: FolderTableCellComponent;
  let fixture: ComponentFixture<FolderTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolderTableCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FolderTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
