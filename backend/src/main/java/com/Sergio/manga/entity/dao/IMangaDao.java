package com.Sergio.manga.entity.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


import com.Sergio.manga.entity.model.Manga;

public interface IMangaDao extends CrudRepository<Manga, Long> {
	
	public List<Manga>findByGenre(String genre);
}
