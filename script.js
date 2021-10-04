"use strict";

// const elements = document.querySelectorAll('.Accordian');

// elements.forEach(element =>{
//     let btn = element.querySelector('.question button');
//     let icon = element.querySelector('.question button i');
//     var answer = element.lastElementChild;
//     var answers = document.querySelectorAll('.element .answer');
    
//     btn.addEventListener('click', ()=>{
//         answers.forEach(ans =>{
//             let ansIcon = ans.parentElement.querySelector('button i');
//             if(answer !== ans){
//                 ans.classList.add('hideText');
//                 ansIcon.className = 'fas fa-plus-circle';
//             }
//         });
        
//         answer.classList.toggle('hideText');
//         icon.className === 'fas fa-plus-circle' ? icon.className = 'fas fa-minus-circle' 
//         : icon.className ='fas fa-plus-circle';
//     });
// });

// Get the container element
// var btnContainer = document.getElementById("table-wrapper");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.document.querySelectorAll("Accordion");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// }


//////////////////////////////////////

// const panel = document.querySelector('panel');
// const user = document.getElementById("acc");

// user.addEventListener("click", function() {
//   if (this.classList.contains("Active")) {
//     this.classList.remove("Active");
//     document.getElementById("pl").removeAttribute("style");
//   } else {
//  this.classList.add("Active");
//  document.getElementById("pl").classList.add("user");
//   }      
// });

///////////////////////////////////////

// var accItem = document.getElementsByClassName('Accordion');
//     var accHD = document.getElementsByClassName('panel');
//     for (i = 0; i < accHD.length; i++) {
//         accHD[i].addEventListener('click', toggleItem, false);
//     }
//     function toggleItem() {
//         var itemClass = this.parentNode.className;
//         for (i = 0; i < accItem.length; i++) {
//             accItem[i].className = 'accordionItem close';
//         }
//         if (itemClass == 'accordionItem close') {
//             this.parentNode.className = 'accordionItem open';
//         }
//     }

///////////////

// function initAcc(elem, option){
//     document.addEventListener('click', function (e) {
//         if (!e.target.matches(elem+' .Accordion')) return;
//         else{
//             if(!e.target.parentElement.classList.contains('active')){
//                 if(option==true){
//                     var elementList = document.querySelectorAll(elem+' .a-container');
//                     Array.prototype.forEach.call(elementList, function (e) {
//                         e.classList.remove('active');
//                     });
//                 }            
//                 e.target.parentElement.classList.add('active');
//             }else{
//                 e.target.parentElement.classList.remove('active');
//             }
//         }
//     });
// }

// initAcc('.table-wrapper', true);
// initAcc('.accordion.v2', false);
// window.$ = document.querySelectorAll.bind(document);

$(document).ready(function () {
    var acc = document.getElementsByClassName("Accordion");
      var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("Active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }
    });