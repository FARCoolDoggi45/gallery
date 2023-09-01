const previewAvatarElement = document.querySelector('.big-picture__social img');
const previewImgElement= document.querySelector('.big-picture__img img');
const likeCountElement = document.querySelector('.likes-count');
const renderedCommentCoutElement = document.querySelector('.comments-count--rendered');
const commentAvatarElement = document.querySelector('#comment-form img');
const commentListElement = document.querySelector('.social__comments');
const commentCountElement = document.querySelector('.comments-count');
const commentTemplate = document.querySelector('#comment')
    .content
    .querySelector('.social__comment');

const renderCommentList = (comments) => {
    commentListElement.innerHTML = '';
    for (const comment of comments) {
        const commentElement = commentTemplate.cloneNode(true);
        commentElement.querySelector('.social__text').textContent = comment.message;
        commentElement.querySelector('.social__picture').setAttribute('src', './avatars/1.jpeg');
        commentListElement.append(commentElement);
    }
};

const renderPicturePreview = (picture) => {
    previewImgElement.setAttribute('src', picture.url);
    likeCountElement.textContent = picture.likes;
    commentCountElement.textContent = picture.comments.length;
    renderedCommentCoutElement.textContent = picture.comments.length;
    previewAvatarElement.setAttribute('src', './avatars/1.jpeg');
    commentAvatarElement.setAttribute('src', './avatars/1.jpeg');
    renderCommentList(picture.comments);
};

export {renderPicturePreview};
