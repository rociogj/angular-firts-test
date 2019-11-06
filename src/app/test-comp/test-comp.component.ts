import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test-comp',
  templateUrl: './test-comp.component.html',
  styles: ['p {color: red; font-weight: bold; font-size: 16px}']
  // styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  public propTest: boolean
  @Input() propNum: number = 123
  public introText: string = 'test-comp works!'
  constructor () {}

  ngOnInit () {}

  @Output() functionTest () {
    return this.propNum
  }
  
  @Output() alertClicked : EventEmitter<String> = new EventEmitter<String>()

}
