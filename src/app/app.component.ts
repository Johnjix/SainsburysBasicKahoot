import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameInstance } from './models/game-instance.model';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SainsburysBasicKahoot';
  gameInstance: GameInstance;
  constructor(private _firebaseService: FirebaseService) {
    this.gameInstance = {} as GameInstance;
  }
  ngOnInit(): void {
    this._firebaseService.getGameInstance().subscribe((data) => {
      this.gameInstance = data;

      console.log('game instance', this.gameInstance);
    });
  }
}
