import { Component, OnInit, Input } from '@angular/core';
import { XkdcComic } from './models/xkdc-comic';
import { XkdcRetrieverService } from './services/xkdc-retriever.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Input() comicNumber: string | undefined = '';
  comic: XkdcComic;

  constructor(
    private xkdcComicRetriever: XkdcRetrieverService
  ) { }

  ngOnInit(): void {
    this.retrieveComic(this.comicNumber);
  }

  retrieveComic(comicNumber: string | undefined): void {
    console.log(comicNumber);
    this.xkdcComicRetriever.get(comicNumber).subscribe(comic => {
      this.comic = comic;
    }, error => {
      console.error(error);
    });
  }

  formattedDate(): string {
    return `${this.comic.day}/${this.comic.month}/${this.comic.year}`;
  }

  linkUrl(): string {
    return `https://xkcd.com/${this.comic.num}`;
  }
}
