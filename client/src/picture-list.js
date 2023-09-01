import {renderPicturePreview} from './preview-modal.js';

const previewModalElement = document.querySelector('.big-picture'); 
const previeModalCloseElement = document.querySelector('.big-picture__cancel')
const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

function renderPictureList(pictures) {
    for (const picture of pictures) {
        const pictureElement = pictureTemplate.cloneNode(true);
        pictureElement.dataset.id = picture.id;
        pictureElement.querySelector('.picture__img').setAttribute('src', picture.url);
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
        pictureListElement.append(pictureElement);
        
        pictureElement.addEventListener(`click`, function () {
            const pictureId = Number(pictureElement.dataset.id);
            const picture = pictures.find(function (picture) {
                return picture.id === pictureId;
            });
            renderPicturePreview(picture);
            previewModalElement.classList.remove('hidden');
        });
    }
}

previeModalCloseElement.addEventListener(`click`, function () {
    previewModalElement.classList.add('hidden');
});

export {renderPictureList};


