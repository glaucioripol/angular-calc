import { Component, OnInit } from '@angular/core';

import { CalcService } from '../../services';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  private firstNumber: string;
  private secondNumber: string;
  private result: number;
  private operation: string;

  constructor(private readonly calcService: CalcService) { }

  ngOnInit(): void {
    this.clearState();
  }

  clearState(): void {
    this.firstNumber = '0';
    this.secondNumber = null;
    this.result = null;
    this.operation = null;
  }

  addNumber(paramNumber: string): void {
    if (this.operation === null) {
      this.firstNumber = this.concatNumber(this.firstNumber, paramNumber);
    } else {
      this.secondNumber = this.concatNumber(this.secondNumber, paramNumber);
    }
  }

  concatNumber(currentNumber: string, concatNumber: string): string {
    if (currentNumber === '0' || currentNumber === null) {
      currentNumber = '';
    }

    if (concatNumber === '.' && currentNumber === '') {
      return '0.';
    }

    if (concatNumber === '.' && currentNumber.indexOf('.') > -1) {
      return currentNumber;
    }

    return currentNumber + concatNumber;
  }

  // todo: extrair bloco de calcular com service se repete aqui
  defineOperation(operation: string): void {
    if (this.operation === null) {
      this.operation = operation;
      return;
    }

    if (this.secondNumber !== null) {
      const firstNumberParsed = parseFloat(this.firstNumber);
      const secondNumberParsed = parseFloat(this.secondNumber);

      this.result = this.calcService.calculate(
        firstNumberParsed,
        secondNumberParsed,
        this.operation
      );

      this.operation = operation;
      this.firstNumber = this.result.toString();
      this.secondNumber = null;
      this.result = null;
    }

  }

  // todo: extrair bloco de calcular com service se repete aqui
  calculate(): void {
    if (this.secondNumber === null) {
      return;
    }

    // todo: refactor
    const firstNumberParsed = parseFloat(this.firstNumber);
    const secondNumberParsed = parseFloat(this.secondNumber);
    this.result = this.calcService.calculate(
      firstNumberParsed,
      secondNumberParsed,
      this.operation
    );

  }

  get display(): string {
    if (this.result !== null) {
      return this.result.toString();
    } else if (this.secondNumber !== null) {
      return this.secondNumber;
    }

    return this.firstNumber;
  }

}
