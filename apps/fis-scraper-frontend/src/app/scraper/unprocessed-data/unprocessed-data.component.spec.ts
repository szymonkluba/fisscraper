import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessedDataComponent } from './unprocessed-data.component';

describe('UnprocessedDataComponent', () => {
  let component: UnprocessedDataComponent;
  let fixture: ComponentFixture<UnprocessedDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnprocessedDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnprocessedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
