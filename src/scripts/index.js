import '/src/pages/index.css'; // добавьте импорт главного файла стилей  
import {initialCards} from './card.js'; 
import {createCard} from './cards.js'; 
import {openModal, overlay, closeModalCrossButton} from './modal.js'; 

export const list = document.querySelector(".places__list"); 
export const cardTemplate = document.querySelector("#card-template").content; 

export const popupTypeImage = document.querySelector('.popup_type_image'); //поп-ап изображения 
export const photoPopupTypeImage = document.querySelector('.popup__image'); //класс поп-апа изображения для постановки значений 
export const popupCaptionImage = document.querySelector('.popup__caption');//класс поп-апа изображения для постановки значений 

 


// @todo: Вывести карточки на страницу + открытие изображения по клику 

initialCards.forEach(function (item){ 
  list.append(createCard(item.name, item.link, openImage)); 
}); 
 
//Функция открытия поп-апа для изображения с подстановкой link и name 

export function openImage(name, link){ 
  popupCaptionImage.textContent = name; 
  photoPopupTypeImage.src=link; 
  photoPopupTypeImage.alt=name; 
  openModal(popupTypeImage); 
} 

//Обработчки Крестика и Оверлея для поп-апа изображения 

popupTypeImage.addEventListener("click", overlay); 
popupTypeImage.addEventListener("click", closeModalCrossButton); 

