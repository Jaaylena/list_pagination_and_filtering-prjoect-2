/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
//
document.addEventListener('DOMContentLoaded', () => {
const studentList = document.querySelectorAll('.student-list');
const pgItems = 10;
//attempt at exceeding expectations 
//const studentSearch = document.querySelector('.student-search');
//const input = studentSearch.querySelector('input');




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
   //a function showPage that pulls the list of 54 students 

***/
//function to display 10 students to a page at a time. list holds the student 
   //information and page 
const showPage = (list, page) => {
   const pgList = (page - 1) * 10;
   const firstPgIndex = 0 + pgList;
   const lastPgIndex = 9 + pgList;
   for(let i = 0; i < pgItems.length; i++){
      if(i <= firstIndex || i >= lastIndex) {
         pgList[i].style.display = '';
         console.log(showPage(list, page));
      }

   }
  

   

};


/***
 //a button that generates the  
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
});
