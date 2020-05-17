import { Component, OnInit } from '@angular/core';
import { PhotoFetcherService } from '../photo-fetcher.service';
@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.css']
})
export class ImageGeneratorComponent implements OnInit {

  isRandomImageAvailable = false;
  randomImagePath: string;

  constructor(private fetchPhoto: PhotoFetcherService) {
    this.goFetch();
  }

  ngOnInit(): void {
  }

  onPhotoFetch() {
    this.goFetch();
  }

  goFetch() {
    this.fetchPhoto.fetchRandomImage().subscribe(resp => {
      this.randomImagePath = resp.urls.regular;
      this.isRandomImageAvailable = true;
    });
  }

}
