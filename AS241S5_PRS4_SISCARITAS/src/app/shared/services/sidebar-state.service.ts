import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {
  private panelOpenSubject = new BehaviorSubject<boolean>(false);
  public panelOpen$: Observable<boolean> = this.panelOpenSubject.asObservable();

  setPanelOpen(isOpen: boolean): void {
    this.panelOpenSubject.next(isOpen);
  }

  get isPanelOpen(): boolean {
    return this.panelOpenSubject.value;
  }
}
