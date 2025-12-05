import { Component, EventEmitter, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {

  private subs!: Subscription;
  private hasMenu: boolean = false; 

  constructor(private readonly menuService: MenuService) {
  }

  public get HasMenu(){
    return this.hasMenu;
  }

  ngOnInit(): void {
    this.subs = this.menuService.hasMenuState$.subscribe(hasMenu => {
      this.hasMenu = hasMenu;
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  

  public openMenu(){
    this.menuService.toggleMenu();

  }
}
