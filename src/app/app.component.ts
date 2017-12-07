import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  buildings = [{name:'Farm',min: 2,max:5},{name:'Cave',min:5,max:10},{name:'Casino',min:1,max:100},{name:'home',min:7,max:15}];
  constructor(private _serviceService: ServiceService) { }
    
    ngOnInit() {
    }
    gold = this._serviceService.gold;
    
}
