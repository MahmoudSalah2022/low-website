const videoStoryContainer = document.querySelector('.videoStoryContainer')

closeBtn.forEach(close => {

    close.addEventListener('click', () => {
        if(videoStoryContainer.classList.contains('display')){
            videoStoryContainer.classList.remove('display')
            videoStoryContainer.classList.add('hidden')
        }
    });
    
});


const storyAccount = document.querySelectorAll('.storyAccount')

storyAccount.forEach(story => {

    story.addEventListener('click', () => {
        if(videoStoryContainer.classList.contains('display')){
            videoStoryContainer.classList.remove('display')
            videoStoryContainer.classList.add('hidden')
        }else{
            videoStoryContainer.classList.add('display')
            videoStoryContainer.classList.remove('hidden')
        }
    });
});