import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize, map, Observable, take, timer } from 'rxjs';
import { WinnerService as WinnerService } from 'src/app/services/winner.service';
import { slidesItens } from './landing.page.component.constants';

interface LandingPageComponentInterface {
  itemsPerSlide: number;
  slides: { id: number; image: string }[];
  activeSlideIndex: number;
  counter: Observable<number>;
}

const gifs = {
  success: './../../../assets/imgs/winner.gif',
  fail: './../../../assets/imgs/not-yet.gif',
};

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public pageData: LandingPageComponentInterface;
  public showButtonSorteio = false;
  public winner: string;
  public gif = './../../../assets/imgs/winner.gif';

  constructor(
    private modalService: NgbModal,
    private winnerService: WinnerService
  ) {}

  public ngOnInit() {
    this.createPageData();
  }

  public onActiveSlideChange($event: number) {
    this.pageData.activeSlideIndex = $event;
  }

  private createPageData() {
    this.pageData = {
      slides: slidesItens,
      itemsPerSlide: 3,
      activeSlideIndex: 0,
      counter: timer(0, 1000).pipe(
        map((i) => 10 - i),
        take(11),
        finalize(() => (this.showButtonSorteio = true))
      ),
    };
  }

  public open(content: any) {
    const result = this.winnerService.getWinner();
    console.log(result);
    this.winner = result.nome;
    this.gif = result.state == 'sorteado' ? gifs.success : gifs.fail;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
