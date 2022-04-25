const inputButton = document.querySelector('[name="input"]')
const inputButtonIcon = inputButton.querySelector('i.fas')



if (navigator.mediaDevices) {
    console.log('getUserMedia supported.');
    navigator.mediaDevices.getUserMedia ({audio: true, video: false})
    .then(function(stream) {

        const audioCtx = new AudioContext();
        const source = audioCtx.createMediaStreamSource(stream);
        source.connect(audioCtx.destination);


        inputButton.addEventListener('click', () => {
          if (isPlaying) {
            source.disconnect(audioCtx.destination)

            inputButtonIcon.classList.remove('fa-microphone')
            inputButtonIcon.classList.add('fa-microphone-slash')

          } else {
            source.connect(audioCtx.destination)

            inputButtonIcon.classList.remove('fa-microphone-slash')
            inputButtonIcon.classList.add('fa-microphone')

          }

          isPlaying = !isPlaying
        })

      })
      .catch(function(err) {
          console.log('The following gUM error occured: ' + err);

});
        } else {
            console.log('getUserMedia not supported on your browser!');
        }











/*

document.querySelector("audio").addEventListener('click', function() {
  if (navigator.mediaDevices) {
    console.log('getUserMedia supported.');
    navigator.mediaDevices.getUserMedia({"audio": true}).then((stream) => {
      const audioCtx = new AudioContext();
      const microphone = audioCtx.createMediaStreamSource(stream);
      microphone.resume(context.destination)

    })
    .catch(function(err) {
        console.log('The following gUM error occured: ' + err);
    });
} else {
    console.log('getUserMedia not supported on your browser!');

};
*/
