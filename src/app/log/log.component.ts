import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private _serviceService: ServiceService) { }

  logs: string[] =[];
  ngOnInit() {
    this.logs= this._serviceService.logs;
  }

}
