import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceComponent } from './balance/balance.component';

import { MachineContentComponent } from './machine-content.component';
import { SlotsComponent } from './slots/slots.component';
import { StuffComponent } from './stuff/stuff.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';


describe('MachineContentComponent', () => {
  let component: MachineContentComponent;
  let fixture: ComponentFixture<MachineContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressBarModule
      ],
      declarations: [ MachineContentComponent,
        SlotsComponent,
        StuffComponent,
        BalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
