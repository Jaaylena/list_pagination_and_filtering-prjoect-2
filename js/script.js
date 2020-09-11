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
   const studentList = document.querySelectorAll('.student-item');
   const perPage = 10;
   
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
   /***function to display 10 students to a page at a time. list holds the student 
      information and page ***/
       function showPage(list, page) { 
          
         const firstIndex = page * 10 - 10;
         const lastIndex = page * 10 - 1;
         
         // Loop over items in the list parameter 
         for(let i = 0; i < studentList.length; i++) {
            if ( page[i] >= firstIndex && page[i] <= lastIndex) {
               //to show items if true
               list[i].style.display = 'block';
            } else {
               //to hide items if false
               list[i].style.display = 'none';
            }
          
         }
         /* -- If the index of a list item is >= the index of the first item that should be shown on the page -- 
         && the list item index is <= the index of the last item 
         that should be shown on the page, show it */ 
         
      }; 
      console.log(showPage(list, 1));
   
      /** 
      function appendPageLinks(list) {
         const totalPages = Math.ceil(studentList.length / perPage);
         const ul = document.createElement('ul');
         const pageDiv = document.createElement('div')
            pageDiv.setAttribute(".pagination");
            pageDiv.appendChild('div', '.page');
        const li = document.createElement('li')
         for(let i = 1; totalPages.length; i++) {
            ul.appendChild('div.pagination');
         }
      } */
   
      /* 
      1. Determine how many pages are needed for the list by dividing the total number of list items by the max number of items per page 
      2. Create a div, give it the “pagination” class, and append it to the .page div 
      3. Add a ul to the “pagination” div to store the pagination links 
      4. for every page, add li and a tags with the page number text 
      5. Add an event listener to each a tag. When they are clicked 
      call the showPage function to display the appropriate page 
      6. Loop over pagination links to remove active class from all links 
      7. Add the active class to the link that was just clicked. You can identify that 
      clicked link using event.target */ 
      
   
   // Remember to delete the comments that came with this file, and replace them with your own code comments.
   });
