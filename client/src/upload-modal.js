const uploadModalOpenElement = document.querySelector('#upload-file');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadModalCloseElement = document.querySelector('#upload-cancel');
const uploadModalPreviewElement = document.querySelector('.img-upload__preview img');

const onModalEscKeydown = (evt) => {
    if (evt.code === 'Escape') {
        closeUploadModal();
    };
}

const renderUploadPreview = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
        uploadModalPreviewElement.setAttribute('src', reader.result);
    });
    reader.readAsDataURL(file);
};

const openUploadModal = () => {
    const file = uploadModalOpenElement.files[0];
    renderUploadPreview(file);
    uploadModalElement.classList.remove('hidden');
    uploadModalCloseElement.addEventListener('click', closeUploadModal);
    document.addEventListener('keydown', closeUploadModal);
};

const closeUploadModal = () => {
    uploadModalElement.classList.add('hidden');
    uploadModalCloseElement.removeEventListener('click', closeUploadModal);
    document.removeEventListener('keydown', closeUploadModal);
};

if (uploadModalOpenElement) {
    uploadModalOpenElement.addEventListener('change', function () {
        openUploadModal();
    });
}
