import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('5 + 5 should be 10', () => {
    const buttonSum = fixture.debugElement.query(By.css('#button-sum'));
    const buttonEqual = fixture.debugElement.query(By.css('#button-equal'));
    const button5 = fixture.debugElement.query(By.css('#button-5'));

    button5.triggerEventHandler('click', null);
    fixture.detectChanges();

    buttonSum.triggerEventHandler('click', null);
    fixture.detectChanges();

    button5.triggerEventHandler('click', null);
    fixture.detectChanges();

    buttonEqual.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.display).toBe('10');
  });

  it('6 - 5 should be 1', () => {
    const buttonSubtraction = fixture.debugElement.query(By.css('#button-subtraction'));
    const buttonEqual = fixture.debugElement.query(By.css('#button-equal'));
    const button6 = fixture.debugElement.query(By.css('#button-6'));
    const button5 = fixture.debugElement.query(By.css('#button-5'));

    button6.triggerEventHandler('click', null);
    fixture.detectChanges();

    buttonSubtraction.triggerEventHandler('click', null);
    fixture.detectChanges();

    button5.triggerEventHandler('click', null);
    fixture.detectChanges();

    buttonEqual.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.display).toBe('1');
  });

  it('5 * 5 should be 25', () => {
    const buttonMultiplication = fixture.debugElement.query(By.css('#button-multiplication'));
    const buttonEqual = fixture.debugElement.query(By.css('#button-equal'));
    const button5 = fixture.debugElement.query(By.css('#button-5'));

    button5.triggerEventHandler('click', null);
    fixture.detectChanges();

    buttonMultiplication.triggerEventHandler('click', null);
    fixture.detectChanges();

    button5.triggerEventHandler('click', null);
    fixture.detectChanges();

    buttonEqual.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.display).toBe('25');
  });

  it('25 / 5 should be 5', () => {
    const buttonDivision = fixture.debugElement.query(By.css('#button-division'));
    const buttonEqual = fixture.debugElement.query(By.css('#button-equal'));
    const button2 = fixture.debugElement.query(By.css('#button-2'));
    const button5 = fixture.debugElement.query(By.css('#button-5'));

    button2.triggerEventHandler('click', null);
    fixture.detectChanges();

    button5.triggerEventHandler('click', null);
    fixture.detectChanges();

    buttonDivision.triggerEventHandler('click', null);
    fixture.detectChanges();

    button5.triggerEventHandler('click', null);
    fixture.detectChanges();

    buttonEqual.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.display).toBe('5');
  });

});
