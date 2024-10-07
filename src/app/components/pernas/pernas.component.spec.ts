import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PernasComponent } from './pernas.component';

describe('PernasComponent', () => {
  let component: PernasComponent;
  let fixture: ComponentFixture<PernasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PernasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PernasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
