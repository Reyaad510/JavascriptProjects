
// Listen for keydown event and when it happens then run function of event below. If you do console.log(e.Keycode) will give keycode number

// window.addEventListener('keydown', function(e) {
//     this.console.log(e);
// });


    window.addEventListener('keydown', function(e) {
        // use querySelectorAll if looking for many
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // stop the function from running all together
        audio.currentTime = 0; // rewind to start
        audio.play();
        // key.classList.remove('playing');
        // key.classList.toggle('playing');
        // Below adds the 'playing' class that is located in our css
        key.classList.add('playing');
        
    });

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; // skip if it's not a transform
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
