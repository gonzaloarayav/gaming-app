import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Games } from '../interfaces/games.interfaces';
import { Categories } from '../interfaces/categories.interface';
import { environment } from '../../../enviroments/enviroment';
// import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameList: Games[] = [];
  public genresList: Categories[] = [];

  private apiKey:     string = environment.apiKey;
  private serviceUrlGames: string = 'https://api.rawg.io/api/games';
  private serviceUrlGenres: string = 'https://api.rawg.io/api/genres';

  constructor( private http:HttpClient ){
    this.searchGames(0);
    this.searchGenres();
  }

  searchGames(genre: number):void {

    const params = new HttpParams()
    .set('key', this.apiKey)
    .set('page', '1')
    .set('year', '2023')
    .set('page_size', '8')
    .set('genres', genre)

    this.http.get<any>(`${this.serviceUrlGames}`, {params})
      .subscribe( resp => {
        this.gameList = resp.results;
      })
  }

  searchGenres():void{
    const params = new HttpParams()
    .set('key', this.apiKey)


    this.http.get<any>(`${this.serviceUrlGenres}`, {params})
      .subscribe( resp => {

        this.genresList = resp.results;
        console.log(this.genresList);
      })
  }
}
