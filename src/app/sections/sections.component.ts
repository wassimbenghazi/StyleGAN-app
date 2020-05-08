import {Component, OnInit} from '@angular/core';
import {NgbSlideEvent, NgbSlideEventDirection} from '@ng-bootstrap/ng-bootstrap/carousel/carousel';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  focus;
  focus1;
  slide: NgbSlideEvent ;
 /* direction: NgbSlideEventDirection;*/
  constructor() { }
  ngOnInit() {
   /*this.slide.direction = NgbSlideEventDirection.RIGHT;*/
  }

}
