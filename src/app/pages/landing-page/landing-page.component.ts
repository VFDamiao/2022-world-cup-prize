import { Component, OnInit } from '@angular/core';
import { map, Observable, take, timer } from 'rxjs';
import { slidesItens } from './landing.page.component.constants';

interface LandingPageComponentInterface {
  itemsPerSlide: number;
  slides: { id: number; image: string }[];
  activeSlideIndex: number;
  counter: Observable<number>;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  pageData: LandingPageComponentInterface;

  constructor() {}

  ngOnInit() {
    this.createPageData();
  }

  onActiveSlideChange($event: number) {
    this.pageData.activeSlideIndex = $event;
  }

  private createPageData() {
    this.pageData = {
      slides: slidesItens,
      itemsPerSlide: 3,
      activeSlideIndex: 0,
      counter: timer(0, 1000).pipe(
        map((i) => 10 - i),
        take(11)
      ),
    };
  }
}
