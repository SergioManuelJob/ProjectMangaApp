import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../interfaces/manga';
 
@Injectable({
  providedIn: 'root'
})
export class MangaService {
 
  endpoint: string = "http://localhost:8080/manga"
 
  constructor(private httpClient: HttpClient) { }
 
  getAllMangas(){
    return this.httpClient.get<Array<Manga>>(this.endpoint);
  }

  getOneManga(id: number){
    return this.httpClient.get<Manga>(this.endpoint + "/" + id);  
  }

  deleteManga(id: number){
    return this.httpClient.delete<Manga>(this.endpoint + "/" + id);
  }

  updateManga(id: number, data){
    return this.httpClient.put(this.endpoint + "/" + id, data);
  }

  createManga(id: number, title: string, pages: number, volume: number, genre: string, imagen: string){
    let obj = { id, title, pages, volume, genre, imagen }
    return this.httpClient.post(this.endpoint, obj);
  }
  
}
