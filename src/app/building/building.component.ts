import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  num = 0;
  @Input() myBuildings;
  constructor(private _serviceService: ServiceService) { }

  onClick(myBuildings){
    console.log(this.num)
    if(myBuildings.name != 'Casino'){
    this.num = Math.floor(Math.random()*(myBuildings.max-myBuildings.min+1)+myBuildings.min);
    this._serviceService.Gold(this.num);
    var str = "You've earned " + this.num + " gold from the " + myBuildings.name;
    this._serviceService.addLog(str);
    }
    if(myBuildings.name == 'Casino'){
      var chance = Math.floor(Math.random() * 2) + 2;
      if(chance != 2){
        this.num = Math.floor(Math.random()*(myBuildings.max-myBuildings.min+1)+myBuildings.min);
        this._serviceService.Gold(this.num);
        var str = "You've earned " + this.num + " gold from the " + myBuildings.name;
        this._serviceService.addLog(str);
      }
      else if(chance == 2){
        this.num = Math.floor(Math.random()*(myBuildings.max-myBuildings.min+1)+myBuildings.min);
        this._serviceService.loseGold(this.num);
        var str = "You've lost " + this.num + " gold from the " + myBuildings.name;
        this._serviceService.addLog(str);
      }
    }

  }
  ngOnInit() {
  }

}
