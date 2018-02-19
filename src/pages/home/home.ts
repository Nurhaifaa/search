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
    // this.setupSlider();
  }



}
