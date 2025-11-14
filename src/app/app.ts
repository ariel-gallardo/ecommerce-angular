import { Component, OnInit, signal } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersFacade } from '@api/Impecable/redux/users/users.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('impecable');
  constructor(private usersFacade: UsersFacade) {
    
  }
  ngOnInit(): void {
    this.usersFacade.Init()
  }
}
