const shareButton = document.querySelector('.share-button');


shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'XtremeVibes',
      text: 'Xtremevibes la Radio de otras Vibras',
      url: 'https://play.google.com/store/apps/details?id=app.xtremevibes.radio'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        ;
    }
});



// closeButton.addEventListener('click', event => {
//   shareDialog.classList.remove('is-open');
// });