import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { object } from 'rxfire/database';
import { GameInstance, Question } from '../models/game-instance.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @Input() gameInstance: GameInstance;
  currentQuestionNumber: number = 0;
  constructor(private _firebaseService: FirebaseService) {
    this.gameInstance = {
      Name: '',
      GameMaster: '',
      Questions: [],
      CurrentQuestion: 0,
      Users: [],
    };
  }

  ngOnInit(): void {}

  test(): void {
    console.log('game instance - game component', this.gameInstance);
  }
}
