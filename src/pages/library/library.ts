import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../node_modules/@angular/compiler';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';
//import { NavController } from '../../../node_modules/ionic-angular';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  //constructor(private navCtrl:NavController) {}

  quoteCollection:{category: string, quotes:Quote[],icon:string }[];
  quotesPage = QuotesPage;
  ngOnInit(){
    this.quoteCollection = quotes;
  }

  //goto(item) {
    //this.navCtrl.push(QuotesPage,{data:item});
  //}

}
