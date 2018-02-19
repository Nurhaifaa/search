import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController } from 'ionic-angular';
import { NextPage } from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('mySlider') slider : Slides;

  slides: any;
  selectedSegment: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.setupSlider();
  }

  // closeForm(){}

  setupSlider(){
    this.selectedSegment = 'First';
    this.slides = [
      {
        id: "First",
        title: "First Slide"
      },
      {
        id: "Second",
        title: "Second Slide"
      },
      {
        id: "Third",
        title: "Third Slide"
      },
      {
        id: "Fourth",
        title: "Fourth Slide"
      }
    ];
  }

  onSegmentChanged(segmentButton){
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
      return slide.id == segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider){
    console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  }

  nextDetail(){
    let detailModal = this.modalCtrl.create(NextPage);
    detailModal.present();
  }

  saveFeedback(){}

  saveLabour(){}

  saveSparePart(){}

}
