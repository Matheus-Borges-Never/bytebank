import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BytebankComponent } from './bytebank.component';

describe('BytebankComponent', () => {
  let component: BytebankComponent;
  let fixture: ComponentFixture<BytebankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BytebankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BytebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
