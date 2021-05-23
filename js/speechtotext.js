var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
var textbox = $("txt");
var instructions = $("instructions");
var content = '';
recognition.continuous = true;
recognition.onstart = function() {
    instructions.text("Recognition has started");
}
recognition.onspeechend = function() {
    instructions.text("Activity ended!");
}
recognition.onerror = function() {
    instructions.text("Some error occured!");
}
recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content+=transcript;
    textbox.value=content;
}
document.getElementById("start").addEventListener("click", () =>  {
    if(content.length){
        content+='';
    }
    recognition.start();
})
//console.log(content.value);
//.addEventListener("click", () => 
textbox.on('input', function () {
    content = $(this).val();
})