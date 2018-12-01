import { QuotesService } from './../../service/quotes';
import { Component, OnInit } from '@angular/core';

import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
quoteGroup : { category: string, quotes: Quote[],icon: string };
constructor(
  private navParams:NavParams,
  private alertCtrl:AlertController,
  private quotesService:QuotesService ){
  this.quoteGroup = this.navParams.data;
  console.log(this.quoteGroup);
}
ngOnInit()
{
  
}
//ionViewDidLoad(){
//this.quoteGroup = this.navParams.data;
onAddToFavorite(selectedQuote: Quote){
  const alert = this.alertCtrl.create({
    title: 'Add Quote',
    subTitle: 'Are you sure?',
    message: 'Are you sure you want to add the quote?',
    buttons:[
      {
        text: 'Yes,go ahead',
        handler:()=>{
          this.quotesService.addQuoteToFavorite(selectedQuote);
        }},
        {
          text: 'No,I changed my mind',
        handler:()=>{
          console.log('Cancelled!');
                    }

        }
    ]
  });
  alert.present();
}
onRemoveFavorite(quote: Quote){
 this.quotesService.removeQuoteFromFavorite(quote);
}
isFavorite(quote: Quote){
return this.quotesService.isQuoteFavorite(quote);
}
//}
//Add elvis(?) operator in the template to use this approach
}
