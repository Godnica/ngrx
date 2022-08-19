import { Component, OnInit } from '@angular/core';
import { RootState } from 'src/app/store';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  constructor(
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {
  }

}
