const MAX_COMMENTS = 10

function generateUser() {
    return {
        avatar: `./img/avatars/${getRandomInt(1, 10)}.jpg`,
        name: getRandomArrayElement(USER_NAMES)
    };
}

const usedPictureIds = [];
const usedCommentIds = [];

function generateComment(maxId) {
    let commentId = getRandomInt(1, maxId);
    while (usedCommentIds.includes(commentId)) {
        commentId = getRandomInt(1, maxId);
    }
    usedCommentIds.push(commentId);

    return {
        id: commentId,
        message: getRandomArrayElement(COMMENT_MESSAGES),
        user: generateUser()
    };
}

function generatePicture(maxId) {
    let pictureId = getRandomInt(1, maxId);
    while (usedPictureIds.includes(pictureId)) {
        pictureId = getRandomInt(1, maxId);
    }
    usedPictureIds.push(pictureId);

    const comments = [];
    for (let i = 0; i < getRandomInt(MAX_COMMENTS); i++) {
        comments.push(generateComment(maxId * MAX_COMMENTS));
    }

    return {
        id: pictureId,
        url: `./img/pictures/${getRandomInt(1, 10)}.jpg`,
        description: getRandomArrayElement(PICTURE_DESCRIPTIONS),
        likes: getRandomInt(1, 200000),
        comments: comments 
    };
}

function generatePictures(count) {
    const pictures = [];

    for (let i = 0; i < count; i++) {
        pictures.push(generatePicture(count));
    }

    return pictures;
}

console.log(generatePictures(10));
