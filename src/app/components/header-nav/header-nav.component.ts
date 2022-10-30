import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
