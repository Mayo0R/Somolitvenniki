import {cardTemplate} from './index.js'; 

 // @todo: Функция создания карточки 

export function createCard(name, link, about_main, about_middle, about_end, photolink, openImage) { 
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true); 
  cardElement.querySelector(".card__title").textContent = name; 
  cardElement.querySelector(".card__image").src = link; 
  cardElement.querySelector(".card__image").alt = name; 

  cardElement.querySelector(".card__about-main").textContent = about_main; 
  cardElement.querySelector(".card__about-middle").textContent = about_middle; 
  cardElement.querySelector(".card__about-end").textContent = about_end; 

  cardElement.querySelector(".card__photolink").textContent = photolink; 

 
// Блок с открытием изображения по клику + закрытие 
  const cardImage = cardElement.querySelector('.card__image'); 
  cardImage.addEventListener('click', function(){ 
    openImage(name, link, about_main, about_middle, about_end, photolink); 
  }); 

  return cardElement; 
} 

 

