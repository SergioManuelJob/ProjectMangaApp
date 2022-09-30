import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../interfaces/manga';
 
const httpOptiosUsingUrlEncoded = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
}

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

  updateManga(id: number, manga: Manga){
    let data = new URLSearchParams();
    data.append("title", manga.title)
    data.append("pages", manga.pages.toString())
    data.append("volume",manga.volume.toString())
    data.append("genre",manga.genre)
    data.append("imagen",manga.imagen)
    return this.httpClient.put(this.endpoint + "/" + id, data, httpOptiosUsingUrlEncoded);
  }

  createManga(manga: Manga){
    let data = new URLSearchParams();
    data.append("title", manga.title)
    data.append("pages", manga.pages.toString())
    data.append("volume",manga.volume.toString())
    data.append("genre",manga.genre)
    data.append("imagen",manga.imagen)
    return this.httpClient.post(this.endpoint, data, httpOptiosUsingUrlEncoded);
  }
  
}
