import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class CardsGameService {
    constructor(private http: HttpClient){

    }

    getSortedCards(inputCardList: any){
        let result: any;
        return this.http.get<any>(`https://localhost:5001/api/CardSort/SortCards/${inputCardList}`)
        .pipe(
            map(res => {

                result = res;    
                return result;
            })
        );

        // result = await this.http.get<any>(`https://localhost:5001/api/CardSort/SortCards/${inputCardList}`)
        // .subscribe(res => {
        //     result = res
        // });

         return result;
    }
}