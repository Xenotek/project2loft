'use strict';
// Стандартный файл с описанием маршрута.
// В данном файле описано обращение к корню сайта

let route = require('express').Router();


// Главная страница пользователя
// Обращаемся к корню сайта , и рендерим шаблон из ./views/pages/main-page.pug



route.get('/', (req,res,next) =>{
	require('../modules/main-page_render.js')(req,res,next);
});


// Редактируем данные пользователя
route.post('/editUserData/', (req, res) => {
	require('../modules/edit_user_data.js')(req,res);
});

// Реакция на изменение обложки альбома
route.post('/addAlbumCover/', (req,res) =>{
	//console.log(req.session);
	require('../modules/add_new-album_cover.js')(req,res);
});

//Добавляем новый альбом
route.post('/addAlbum/', (req,res) =>{
	//console.log(req.session);
	require('../modules/create_album.js')(req,res);
});

// Выход с сайта 
route.post('/logout/', (req, res) => {
  require('../modules/logout.js')(req,res);
});

module.exports = route;