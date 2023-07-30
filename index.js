
// for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
//               document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//                             alert("Got Clicked!");
//               });
// }

// detecting button press 
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
              document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                            // var audio = new Audio('sounds/tom-1.mp3');
                            // audio.play();
                            var buttonPress = this.innerHTML;
                            makeSound(buttonPress);
                            
                            
              });
}

// detecting keyboard press 
document.addEventListener("keypress",function(event){
              makeSound(event.key);
});


function makeSound(key){
              switch (key) {
                            case "w":
                                          var crash = new Audio("sounds/crash.mp3");
                                          crash.play();
                                          break;
                            case "a":
                                          var tom2 = new Audio("sounds/tom-2.mp3");
                                          tom2.play();
                                          break;
                            case "s":
                                          var tom4 = new Audio("sounds/tom-4.mp3");
                                          tom4.play();
                                          break;
                            case "d":
                                          var snare = new Audio("sounds/snare.mp3");
                                          snare.play();
                                          break;
                            case "j":
                                          var tom3 = new Audio("sounds/tom-3.mp3");
                                          tom3.play();
                                          break;
                            case "k":
                                          var tom1 = new Audio("sounds/tom-1.mp3");
                                          tom1.play();
                                          break;
                            case "l":
                                          var kick = new Audio("sounds/kick-bass.mp3");
                                          kick.play();
                                          break;
              
                            default:
                                          break;
              }
}
