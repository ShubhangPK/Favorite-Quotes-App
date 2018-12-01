import { Quote } from "../data/quote.interface";
import { Injectable } from "@angular/core";

@Injectable()
export class QuotesService {
    private FavoriteQuotes:Quote[] = [];

    addQuoteToFavorite(quote:Quote){
        this.FavoriteQuotes.push(quote);
        console.log(this.FavoriteQuotes);

    }
     removeQuoteFromFavorite(quote:Quote){
         const position = this.FavoriteQuotes.findIndex((quoteEl: Quote) =>{
             return quoteEl.id == quote.id;
         });
         this.FavoriteQuotes.splice(position, 1);
        }

        getFavoriteQuotes(){
            return this.FavoriteQuotes.slice();
        }

        isQuoteFavorite(quote: Quote){
            return this.FavoriteQuotes.find((quoteEl: Quote) =>{
                return quoteEl.id == quote.id;
            });
        }
}