import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingProjectComponent } from './room-booking-project.component';

describe('RoomBookingProjectComponent', () => {
  let component: RoomBookingProjectComponent;
  let fixture: ComponentFixture<RoomBookingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBookingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
