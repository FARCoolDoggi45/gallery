const commentListElement = document.querySelector('.social__comments');
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

export {renderCommentList};
