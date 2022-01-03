import { Component, OnInit } from '@angular/core';
import {DateService} from '../date.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  output = '';
  constructor(
    private dateService: DateService
  ) { }

  ngOnInit(): void {
  }
  onChange(value: any): void {
    this.output = this.dateService.getDiffToNow(value);
  }
}
