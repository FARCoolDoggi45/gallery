const uploadModalOpenElement = document.querySelector('#upload-file');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadModalCloseElement = document.querySelector('#upload-cancel');
const uploadModalPreviewElement = document.querySelector('.img-upload__preview img');



uploadModalCloseElement.addEventListener('click', function () {
    uploadModalElement.classList.add('hidden');
});

if (uploadModalOpenElement) {
    uploadModalOpenElement.addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            uploadModalPreviewElement.setAttribute('src', reader.result);
        });
        const file = uploadModalOpenElement.files[0];
        console.log(file);
        reader.readAsDataURL(file);

        uploadModalElement.classList.remove('hidden');
    });
}
