import '/src/pages/index.css'; // добавьте импорт главного файла стилей  
import {initialCards} from './card.js'; 
import {createCard} from './cards.js'; 
import {openModal, overlay, closeModalCrossButton} from './modal.js'; 

export const list = document.querySelector(".places__list"); 
export const cardTemplate = document.querySelector("#card-template").content; 

export const popupTypeImage = document.querySelector('.popup_type_image'); //поп-ап изображения 
export const photoPopupTypeImage = document.querySelector('.popup__image'); //класс поп-апа изображения для постановки значений 
export const popupCaptionImage = document.querySelector('.popup__caption');//класс поп-апа изображения для постановки значений 
export const popupAboutImageMain = document.querySelector('.popup__about-main');//класс поп-апа изображения для постановки описания
export const popupAboutImageMiddle = document.querySelector('.popup__about-middle');//класс поп-апа изображения для постановки описания
export const popupAboutImageEnd = document.querySelector('.popup__about-end');//класс поп-апа изображения для постановки описания

export const popupAboutImageLink = document.querySelector('.popup__photolink');//класс поп-апа изображения для постановки ссылки на фото

export const anotherPhotoPopupTypeImage = document.querySelector('.popup__image-2');
 


// @todo: Вывести карточки на страницу + открытие изображения по клику 

initialCards.forEach(function (item){ 
  list.append(createCard(item.name, item.link, item.about_main, item.about_middle, item.about_end, item.photolink, openImage)); 
}); 
 
//Функция открытия поп-апа для изображения с подстановкой link и name 

export function openImage(name, link, about_main, about_middle, about_end, photolink){ 
  popupCaptionImage.textContent = name; 
  photoPopupTypeImage.src=link; 
  photoPopupTypeImage.alt=name;
  popupAboutImageMain.textContent = about_main;
  popupAboutImageMiddle.textContent = about_middle;
  popupAboutImageEnd.textContent = about_end;
  popupAboutImageLink.href = photolink;
  openModal(popupTypeImage); 
} 
 
//Обработчки Крестика и Оверлея для поп-апа изображения 

popupTypeImage.addEventListener("click", overlay); 
popupTypeImage.addEventListener("click", closeModalCrossButton); 

