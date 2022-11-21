import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapTableComponent } from './scrap-table.component';

describe('ScrapTableComponent', () => {
  let component: ScrapTableComponent;
  let fixture: ComponentFixture<ScrapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrapTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
