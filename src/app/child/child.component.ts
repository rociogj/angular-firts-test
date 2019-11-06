import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childEntry: String = 'Child message'

  object = { name: 'R', date: new Date }

  @Output() childEntryClicked: EventEmitter<object> = new EventEmitter<object>()

  constructor() { }

  ngOnInit() {
  }

  onClick () {
    this.childEntryClicked.emit(this.object)
  }

}
