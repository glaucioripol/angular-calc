import { Component, OnInit } from '@angular/core';

import { CalcService } from '../../services';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  constructor(private readonly calcService: CalcService) { }

  ngOnInit(): void {
  }

}
