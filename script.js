function playVideo(videoSrc) {
    const videoModal = document.getElementById('video-modal');
    const familyVideo = document.getElementById('family-video');

    familyVideo.src = videoSrc;
    videoModal.classList.remove('hidden');
}

function closeModal() {
    const videoModal = document.getElementById('video-modal');
    const familyVideo = document.getElementById('family-video');

    familyVideo.pause();
    videoModal.classList.add('hidden');
}
