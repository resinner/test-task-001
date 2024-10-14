/*!
* Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//завдання 1-1.а===============================================================================================
 const randomColors = [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "indigo",
            "violet"  
 ];
        
        function getRandomColor() {
          const randomIndex = Math.floor(Math.random() * randomColors.length);
          return randomColors[randomIndex];
        }

//завдання 1.b=================================================================================================
         async function fetchCatFact() {
                 const randomText = document.getElementById("random-text");
               try {
                
                 const response = await fetch("https://catfact.ninja/fact");
                 const data = await response.json();
                
                 randomText.textContent = data.fact;
               } catch (error) {
                 randomText.textContent = "Ошибка при получении факта";
                 console.error("Ошибка:", error);
               }
             }
//==============================================================================================================




const button = document.getElementById("color-btn");
const paragraph = document.getElementById("missingParagraph");
        
        button.addEventListener("click", () => {
          const randomColor = getRandomColor();
          button.style.backgroundColor = randomColor;

          fetchCatFact();

          //завдання 1.c=========================================================================================
          paragraph.classList.add("fs-4-missing");

          setTimeout(() => {
            paragraph.style.display = "none";
          }, 1500);
         //=====================================================================================================
        });

//==============================================================================================================