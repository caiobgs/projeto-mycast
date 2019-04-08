import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowPlayerService {

  private fonteShowPlayer = new BehaviorSubject<boolean>(false);
  showPlayerCurrent = this.fonteShowPlayer.asObservable();

  constructor() { }

  changeShowPlayer(showPlayer: boolean) {
    this.fonteShowPlayer.next(showPlayer);
  }
}
