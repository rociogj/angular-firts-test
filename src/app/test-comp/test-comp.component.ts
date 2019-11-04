import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-comp',
  templateUrl: './test-comp.component.html',
  styles: ['p {color: red; font-weight: bold; font-size: 16px}']
  // styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  public propTest: boolean = true
  public propNum: number = 123
  public introText: string = 'test-comp works!'
  constructor () {}

  ngOnInit () {}

  functionTest () {
    return this.propTest
  }

}
