import { Injectable, signal, WritableSignal } from '@angular/core';
import { MenuItemModel } from '@models/menu-item-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {

  private menuItemModel: WritableSignal<MenuItemModel[]>;
  private menuStateSubject = new BehaviorSubject<boolean>(false);
  private hasMenuStateSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    this.menuItemModel = signal([]);
  }

  public Items(){
    return this.menuItemModel;
  }

  menuState$ = this.menuStateSubject.asObservable();
  hasMenuState$ = this.hasMenuStateSubject.asObservable();

  init(menuItemModel: MenuItemModel[]){
    this.menuItemModel.set(menuItemModel);
    this.hasMenuStateSubject.next(true);
    this.toggleMenu();
  }

  toggleMenu() {
    if(this.hasMenuStateSubject.value) 
      this.menuStateSubject.next(!this.menuStateSubject.value);
  }

  close(){
      this.menuStateSubject.next(false);
      this.hasMenuStateSubject.next(false);
      this.menuItemModel.set([]);
  }
}
