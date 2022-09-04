import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChromecastService {
  constructor() {}

  initCastApi(): void {
    window.addEventListener('load', () => {
      try {
        cast.framework.CastContext.getInstance().setOptions({
          receiverApplicationId:
            chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
          autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
        });

        document.querySelector(
          '#cast-button-container'
        )!.innerHTML = `<button is="google-cast-button" id="cast-button"></button>`;
      } catch (error) {
        console.error(error);
      }
    });
  }

  castFile(fileUrl: string, fileType: string): Observable<unknown> | undefined {
    const castSession =
      cast.framework.CastContext.getInstance().getCurrentSession();

    if (castSession === null) {
      throw new Error('Verify your chromecast status');
    }

    const mediaInfo = new chrome.cast.media.MediaInfo(fileUrl, fileType);
    const request = new chrome.cast.media.LoadRequest(mediaInfo);

    return new Observable((subscriber) => {
      castSession
        .loadMedia(request)
        .then(() => {
          subscriber.next();
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
        });
    });
  }
}
