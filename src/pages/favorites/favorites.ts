import { SettingService } from './../../service/setting';
import { QuotesService } from './../../service/quotes';
import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { ModalController} from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
   quotes: Quote[];
   constructor (private quotesService:QuotesService,
                private modalCtrl:ModalController,
                private settingServices:SettingService){}

   ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
                     }                  

   onViewQuote(quote: Quote){
    const modal =this.modalCtrl.create(QuotePage, {quote:quote.text,person:quote.person});
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
         if(remove){
           this.onRemoveFromFavorites(quote);
          /* this.quotesService.removeQuoteFromFavorite(quote);
           //this.quotes =this.quotesService.getFavoriteQuotes();
         const position = this.quotes.findIndex((quoteEl:Quote) =>{
           return quoteEl.id == quote.id;
         });
         this.quotes.splice(position, 1);*/
          }
    });
    
}
onRemoveFromFavorites(quote: Quote){
  this.quotesService.removeQuoteFromFavorite(quote);
  //this.quotes =this.quotesService.getFavoriteQuotes();
const position = this.quotes.findIndex((quoteEl:Quote) =>{
  return quoteEl.id == quote.id;
});
this.quotes.splice(position, 1);

}
getBackground()
{
  return this.settingServices.isAltBackground() ? 'altBackground':'quoteBackground';
}
isAltBackground()
{
  this.settingServices.isAltBackground();
}

}
