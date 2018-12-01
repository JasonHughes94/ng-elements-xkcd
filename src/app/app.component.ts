import { Component, OnInit, Input } from '@angular/core';
import { xkcdComic } from './models/xkcd-comic';
import { xkcdRetrieverService } from './services/xkcd-retriever.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Input() comicNumber: string | undefined = '';
  comic: xkcdComic;

  constructor(
    private xkcdComicRetriever: xkcdRetrieverService
  ) { }

  ngOnInit(): void {
    this.retrieveComic(this.comicNumber);
  }

  retrieveComic(comicNumber: string | undefined): void {
    console.log(comicNumber);
    this.xkcdComicRetriever.get(comicNumber).subscribe(comic => {
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
