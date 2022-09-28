package com.Sergio.manga.entity.service;

import java.util.List;

import com.Sergio.manga.entity.model.Manga;

public interface IMangaService {
	public List< Manga > getAll();
	public Manga getOne(long id);
	public void post(Manga manga);
	public void put(Manga manga, long id);
	public void delete(long id);
	
}
