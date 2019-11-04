import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fecha-actual',
  templateUrl: './fecha-actual.component.html',
  styleUrls: ['./fecha-actual.component.css']
})
export class FechaActualComponent implements OnInit {
  public hoy: Date = new Date()

  constructor() { }

  ngOnInit() {
  }

}
