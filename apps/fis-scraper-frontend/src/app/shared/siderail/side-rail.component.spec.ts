import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRailComponent } from './siderail.component';

describe('SiderailComponent', () => {
  let component: SideRailComponent;
  let fixture: ComponentFixture<SideRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideRailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
