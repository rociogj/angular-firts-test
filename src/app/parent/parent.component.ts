import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentEntry: String = 'Parent message'

  constructor() { }

  ngOnInit() {
  }

  onFoo (ob: any) {
    console.log('FOO', ob)
  }

}
