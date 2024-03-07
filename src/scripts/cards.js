import {cardTemplate} from './index.js'; 

 // @todo: Функция создания карточки 

export function createCard(name, link, openImage) { 
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true); 
  cardElement.querySelector(".card__title").textContent = name; 
  cardElement.querySelector(".card__image").src = link; 
  cardElement.querySelector(".card__image").alt = name; 
 
// Блок с открытием изображения по клику + закрытие 
  const cardImage = cardElement.querySelector('.card__image'); 
  cardImage.addEventListener('click', function(){ 
    openImage(name,link); 
  }); 

  return cardElement; 
} 

 

