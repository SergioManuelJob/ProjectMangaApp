import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Manga } from '../interfaces/manga';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.page.html',
  styleUrls: ['./add-manga.page.scss'],
})
export class AddMangaPage implements OnInit {

  updateMangaFg: FormGroup;
  id: any;

  constructor(private mangaService: MangaService, 
    private activatedRoute: ActivatedRoute,
     private router: Router,
     public formBuilder: FormBuilder) 
     {
      this.id = this.activatedRoute.snapshot.paramMap.get("id"); 
  }

  ngOnInit() {
    this.updateMangaFg = this.formBuilder.group({
      title: [''],
      pages: [''],
      volume: [''],
      genre: [''],
      imagen: ['']
    })
  }
  

  onSubmit() {
    if (!this.updateMangaFg.valid){
      return false;
    } else {
      this.mangaService.createManga(this.updateMangaFg.value).subscribe(() => {
        this.updateMangaFg.reset();
        this.router.navigate(["/home"]);
      })
    }  

    
  }

  goBackHome(){
    this.router.navigate(["/home"]);
  }


  // title: string;
  // pages: number;
  // volume: number;
  // genre: string;
  // imagen: string;

  // constructor(public mangaService : MangaService, private router: Router) { }

  // ngOnInit() {
  // }

  // createManga(manga: Manga) {
  //   this.mangaService.createManga(manga);
  // }

  // onSubmit(){
  //   let manga: Manga = {
  //     title: this.title,
  //     pages: this.pages,
  //     volume: this.volume,
  //     genre: this.genre,
  //     imagen: this.imagen
  //   };
  //   this.createManga(manga);
  //   this.router.navigate(["/home"]);
  // }

  // goBackHome(){
  //   this.router.navigate(["/home"]);
  // }

  

}
