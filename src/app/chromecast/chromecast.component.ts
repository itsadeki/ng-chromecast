import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ChromecastService } from './chromecast.service';

@Component({
  selector: 'app-chromecast',
  templateUrl: './chromecast.component.html',
  styleUrls: ['./chromecast.component.css'],
})
export class ChromecastComponent implements OnInit, OnDestroy {
  private readonly isDestroyed$ = new Subject<boolean>();
  constructor(private readonly chromecastService: ChromecastService) {}

  ngOnInit(): void {
    this.chromecastService.initCastApi();
  }

  onPush() {
    this.chromecastService
      .castFile(
        'https://www.orqual-app.com:11405/content/@Test%20%20@test%2024072022%201661331477374/9226999f-068b-4e50-a2ec-8cf8dde4f723.jpg',
        'image/jpg'
      )
      ?.pipe(takeUntil(this.isDestroyed$))
      .subscribe(() => {
        console.log('file sent');
      });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }
}
