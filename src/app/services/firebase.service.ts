import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { GameInstance } from '../models/game-instance.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private dbPath: string = '/GameInstance';
  gameInstanceRef: AngularFireObject<GameInstance>;
  gameInstance: Observable<any>;
  constructor(private _db: AngularFireDatabase) {
    this.gameInstanceRef = _db.object(this.dbPath);
    this.gameInstance = _db.object('/').valueChanges();
  }

  getGameInstance(): Observable<any> {
    return this.gameInstance;
  }
  addGameInstance(GameInstance: GameInstance): void {
    this._db.database.ref().set(GameInstance);
  }
}
