import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TournamentState, TournamentType } from './models/Tournament.model';
import { DexieService } from './services/dexie.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {
  title = 'tournament';

  constructor(private dexieService: DexieService) {}

  async createUser() {
    const id = await this.dexieService.player.add({
      name: 'Chris',
    });

    console.log(id);
  }

  async createTeam() {
    const test = await this.dexieService.player.get(1);

    console.log(test);

    const id = await this.dexieService.teams.add({
      name: 'Ballstopper',
      member: [test!.id!],
    });

    console.log(id);
  }

  async createTournament() {
    const id = await this.dexieService.tournaments.add({
      title: 'Bierpong 2025',
      date: new Date().toISOString(),
      type: TournamentType.SingleElimination,
      state: TournamentState.Planned,
      participants: [1],
    });

    console.log(id);
  }
}
