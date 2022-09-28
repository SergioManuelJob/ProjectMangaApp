package com.Sergio.manga.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sergio.manga.entity.dao.IMangaDao;
import com.Sergio.manga.entity.model.Manga;

@Service
public class MangaService implements IMangaService {
	
	@Autowired
	IMangaDao mangaDao;
	
	@Override
	public List<Manga> getAll() {
		return (List<Manga>)mangaDao.findAll();
	}

	@Override
	public Manga getOne(long id) {
		return mangaDao.findById(id).get();
	}

	@Override
	public void post(Manga manga) {
		mangaDao.save(manga);
		
	}

	@Override
	public void put(Manga manga, long id) {
		mangaDao.findById(id).ifPresent((x)->{
			manga.setId(id);
			mangaDao.save(manga);
		});
		
	}

	@Override
	public void delete(long id) {
		mangaDao.deleteById(id);	
	}

}
