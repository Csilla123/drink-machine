import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MachineContentComponent } from './machine-content/machine-content.component';
import { InputAmountsComponent } from './input-amounts/input-amounts.component';
import { SlotsComponent } from './machine-content/slots/slots.component';
import { StuffComponent } from './machine-content/stuff/stuff.component';
import { BalanceComponent } from './machine-content/balance/balance.component';

describe('AppComponent', () => {
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
      declarations: [
        AppComponent,
        InputAmountsComponent,
        MachineContentComponent,
        SlotsComponent,
        StuffComponent,
        BalanceComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Drink Machine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Drink Machine');
  });

});

