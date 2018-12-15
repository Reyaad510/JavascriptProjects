
// Listen for keydown event and when it happens then run function of event below. If you do console.log(e.Keycode) will give keycode number

// window.addEventListener('keydown', function(e) {
//     this.console.log(e);
// });


    window.addEventListener('keydown', function(e) {
        // use querySelectorAll if looking for many
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(!audio) return; // stop the function from running all together

        audio.play();
    });
