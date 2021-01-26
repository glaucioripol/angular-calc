import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalcService {

  readonly SUM = '+';
  readonly SUBTRACTION = '-';
  readonly DIVISION = '/';
  readonly MULTIPLICATION = '*';
  readonly CLEAN_UP = 'C';

  calculate(firstNumber: number, secondNumber: number, operation?: string): number {
    const calcSolvers = {
      [this.SUM]: () => firstNumber + secondNumber,
      [this.SUBTRACTION]: () => firstNumber - secondNumber,
      [this.DIVISION]: () => firstNumber / secondNumber,
      [this.MULTIPLICATION]: () => firstNumber * secondNumber,
      [this.CLEAN_UP]: () => 0,
    };

    const applyOperation = calcSolvers[operation]();

    return applyOperation;
  }

}
