import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  describe('calculate', () => {
    it('SUM should be return 10', () => {
      const EXPECTED_VALUE = 10;
      const INPUT_VALUE = 5;

      expect(service.calculate(INPUT_VALUE, INPUT_VALUE, service.SUM)).toBe(EXPECTED_VALUE);
    });

    it('SUBTRACTION should be return 48', () => {
      const EXPECTED_VALUE = 48;

      expect(service.calculate(50, 2, service.SUBTRACTION)).toBe(EXPECTED_VALUE);
    });

    it('DIVISION should be return 25', () => {
      const EXPECTED_VALUE = 25;

      expect(service.calculate(50, 2, service.DIVISION)).toBe(EXPECTED_VALUE);
    });

    it('MULTIPLICATION should be return 100', () => {
      const EXPECTED_VALUE = 100;

      expect(service.calculate(50, 2, service.MULTIPLICATION)).toBe(EXPECTED_VALUE);
    });

    it('should be return 0', () => {
      const EXPECTED_VALUE = 0;

      expect(service.calculate(100, 1000, service.CLEAN_UP)).toBe(EXPECTED_VALUE);
    });
  });

});
