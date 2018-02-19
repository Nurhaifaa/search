import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, Events, AlertController } from 'ionic-angular';
import { FormControl, FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  // filter: FormGroup;
  // search: Observable<any[]>;
  loading: Loading;
  // searchType: string;
  // searching: boolean = true;
  // form: {};
  // terms = new FormControl();
  // handleChecked: { value: string; checked: boolean; }[];
  // providers: Array<any> = []

  filterType: FormGroup;
  itemss: any;
  agentList: any;
  val: any;
  items: any;
  longitude: any;
  latitude: any;
  sortingId: any;
  keyword : any;
  // form: { searchValue: any; searchID: any; sortingID: any; lat: any; lng: any; };
  form : {};
  search : Observable < string[] >;
  searchId: any;
  filter: any;
  terms = new FormControl();
  seachInput: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public event: Events,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) 
  {
    // this.loading = this.loadingCtrl.create({ content: 'Please wait...' });
    // this.loading.present();
    this.filterType = fb.group({ searchBy: [''] }); 
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  // SetupSearchFormGroup() {
  //   this.filter = this.fb.group({ searchBy: [''] });
  //   this.searchType = "Rating"
  // }
  initializeItems() {
    this.items = [ // yg ni letak dummy data
      {
        workCode: '10110',
        status: 'Completed',
        asset: 'KLIA2',
        type: 'PCM'
      },
      {
        workCode: '10113',
        status: 'Follow Up',
        asset: 'KLIA',
        type: 'PCM'
      },
      {
        workCode: '10115',
        status: 'Follow Up',
        asset: 'MPO',
        type: 'POC'
      },
    ];
  }

  goFilter(filter) {
    this.filter = filter
    console.log("filter",this.filter)

    this.form = {
      search: this.keyword,
      filter: this.filter,
      lat: this.latitude,
      lng:this.longitude
    }
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    this.val = ev.target.value;
    console.log("val", this.val)

    // if the value is an empty string don't filter the items
    if (this.val && this.val.trim() != '') {
      this.items = this.items.map((data) => {
          console.log("data", data)
          if (this.filter == "workCode") { // this.filter == "action" amek kat value html tuu
            return (data.action.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
          }else if(this.filter == "status"){
            return data
          } else if (this.filter == "asset") {
            return (data.price.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
          } else if (this.filter == "type") {
            return (data.context.toLowerCase().indexOf(this.val.toLowerCase()) > -1);
          }
        })
    }
  }
}
