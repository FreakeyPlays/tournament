import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Player, Team, Tournament } from '../models';

const DB_NAME: string = 'Tournament';
const DB_VERSION: number = 1;

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  tournaments!: Dexie.Table<Tournament, number>;
  teams!: Dexie.Table<Team, number>;
  player!: Dexie.Table<Player, number>;

  constructor() {
    super(DB_NAME);
    this.version(DB_VERSION).stores({
      tournaments: '++id',
      teams: '++id',
      player: '++id',
    });
  }
}
