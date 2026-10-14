import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { phoneValidator } from './validators/phone.validator';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

describe('phoneValidator', () => {
  const check = (v: string) => phoneValidator(new FormControl(v));

  it('accepts an empty value (optional field)', () => expect(check('')).toBeNull());
  it('accepts a valid 10-digit number', () => expect(check('6135551234')).toBeNull());
  it('rejects a number starting with 0', () => expect(check('0135551234')).toEqual({ invalidPhone: true }));
  it('rejects a number whose 4th digit is 0', () => expect(check('6130551234')).toEqual({ invalidPhone: true }));
  it('rejects a number that is too short', () => expect(check('613555123')).toEqual({ invalidPhone: true }));
  it('rejects non-digits', () => expect(check('613-555-1234')).toEqual({ invalidPhone: true }));
});
