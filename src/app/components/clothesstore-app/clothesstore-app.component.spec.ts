import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesstoreAppComponent } from './clothesstore-app.component';

describe('ClothesstoreAppComponent', () => {
  let component: ClothesstoreAppComponent;
  let fixture: ComponentFixture<ClothesstoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesstoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesstoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
