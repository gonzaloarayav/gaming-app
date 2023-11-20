import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Games } from '../interfaces/games.interfaces';
import { Categories } from '../interfaces/categories.interface';
import { environment } from '../../../enviroments/enviroment';
import { Game } from '../interfaces/game.interface';
// import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameList: Games[] = [];
  public genresList: Categories[] = [];
  public gameDetails!: Game;
  public genre: number = 0;
  public paginator: number = 1;
  public idGame: number = 0;


  private apiKey:     string = environment.apiKey;
  private serviceUrlGames: string = 'https://api.rawg.io/api/games';
  private serviceUrlGenres: string = 'https://api.rawg.io/api/genres';
  private serviceUrlDetailsGame: string = 'https://api.rawg.io/api/games/';

  constructor( private http:HttpClient ){
    this.searchGames();
    this.searchGenres();
  }

  searchGames():void {
    let params = new HttpParams()
    .set('key', this.apiKey)
    .set('page', this.paginator)
    .set('year', '2023')
    .set('page_size', '20');

    if (this.genre !== 0) params = params.set('genres', this.genre);

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

  searchDetailsGame():void {
    const params = new HttpParams()
    .set('key', this.apiKey)
    // .set('id', id)

    let url = '';
    url = this.serviceUrlDetailsGame + `${this.idGame}`;

    this.http.get<any>(`${url}`, {params})
      .subscribe( resp => {

        this.gameDetails = resp
        // this.gameDetails = resp.results;
      })
  }
}
