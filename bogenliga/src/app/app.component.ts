import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {AppState, SidebarState} from './modules/shared/redux-store';

@Component({
  selector:    'bla-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isActive: boolean;

  constructor(private translate: TranslateService, private store: Store<AppState>, private router: Router) {
    translate.setDefaultLang('de');
    translate.use('de');
    store.pipe(select((state) => state.sidebarState))
         .subscribe((state: SidebarState) => this.isActive = state.toggleSidebar);
  }

  public isProduction(): boolean {
    return environment.production;
  }
  public getEnvironment(): string {
    return environment.label;
  }

  ngOnInit() {
    // scrolls up to top after page change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}


