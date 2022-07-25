import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyClothesComponent } from './buy-clothes.component';

describe('BuyClothesComponent', () => {
  let component: BuyClothesComponent;
  let fixture: ComponentFixture<BuyClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyClothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
