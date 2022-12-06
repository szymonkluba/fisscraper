import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSpinnerComponent } from './file-spinner.component';

describe('FileSpinnerComponent', () => {
  let component: FileSpinnerComponent;
  let fixture: ComponentFixture<FileSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
