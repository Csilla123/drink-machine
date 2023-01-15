import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogModule} from '@angular/material/dialog';
import { InputAmountsComponent } from './input-amounts.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

describe('InputAmountsComponent', () => {
  let component: InputAmountsComponent;
  let fixture: ComponentFixture<InputAmountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatProgressBarModule,
        MatDialogModule
      ],
      declarations: [ InputAmountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAmountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
