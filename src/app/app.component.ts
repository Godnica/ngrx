import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from './store/meta-reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx_app';

  constructor(private store: Store){}

  reset(): void {
    this.store.dispatch(reset());
  }

}
