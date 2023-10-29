import { Component, OnInit } from '@angular/core';
import { PexelsService } from '../services/pexels.services';

interface Pexels {
  next_page: string;
  page: number;
  per_page: number;
  photos: Array<PexelsPhotos>;
}

interface PexelsPhotos {
  alt: string;
  photographer: string;
  photographer_url: string;
  src: PexelsSrc;
}

interface PexelsSrc {
  medium: string;
}

@Component({
  selector: 'app-pexels',
  templateUrl: './pexels.component.html',
  styleUrls: ['./pexels.component.less']
})
export class PexelsComponent implements OnInit{
  pexelPhotos: any;
  pexelData: any;

  constructor(private pexelsService: PexelsService){

  }

  ngOnInit() {
    this.getPexels();
  }

  getPexels(query:any = {}){
    // getCurrentTime
    this.pexelsService.getPexels(query).subscribe((response: any) => {
      this.pexelData = response;
      this.pexelPhotos = response.photos;
    });
  }
}
