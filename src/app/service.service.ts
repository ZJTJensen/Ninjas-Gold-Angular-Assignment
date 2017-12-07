import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  gold: number= 0;
  logs: string[] = [];

  constructor() { }

  Gold(num: number){
    this.gold = this.gold + num;
  }
  loseGold(num: number){
    this.gold -= num;
  }
  addLog(str: string){
    this.logs.push(str);
  }

}
