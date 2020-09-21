/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

document.addEventListener('DOMContentLoaded', () => {
   const studentList = document.querySelectorAll('.student-item');
   const perPage = 10;
   const divClassPage = document.querySelector('.page');

   /***function to display 10 students to a page at a time. ***/
       function showPage(studentList, page) { 
         const firstIndex = page * 10 - 10;
         const lastIndex = page * 10 - 1;
         
         // Loop over items in the list parameter creating the list of ten students to a page
         for(let i = 0; i < studentList.length; i++) {
            if ( i >= firstIndex && i <= lastIndex) {
               //to show items if true
               studentList[i].style.display = 'block';
            } else {
               //to hide items if false
               studentList[i].style.display = 'none';
            }
          
         }
      }
   
     /**a funtion that appends the list of 10 students to each page when
      * the page number is  */ 
      function appendPageLinks(list) {
         //calculating the number of pages needed to display the student list
         const numberOfPgs = Math.ceil(list.length / 10);
         /* creating a div with pagination class with a ul that stores the pg links
          and appending it to the div.page**/
         const divPagination = document.createElement('div');
         const ulPagination = document.createElement('ul');
            divPagination.className = 'pagination';
            divClassPage.appendChild(divPagination);
            divPagination.appendChild(ulPagination);
         
//creating page numbers with links       
         for(let i = 0; i < numberOfPgs; i++) {
            const pgLink = document.createElement('a');
            const paginationLi = document.createElement('li');
            pgLink.href = '#';
            pgLink.textContent = `${i+1}`;
            paginationLi.appendChild(pgLink);
            ulPagination.appendChild(paginationLi);
            if(i === 0) {
               pgLink.classList.add('active');
            }else{
               pgLink.classList.remove('active');
            }
//when page number links are clicked the appropriate list is displayed
            pgLink.addEventListener('click', (e) => {
               const pageNumbers = document.querySelectorAll('.pagination a');
                  showPage(studentList, i + 1);
                  for(let p = 0; p < pageNumbers.length; p++) {
                     pageNumbers[p].classList.remove('active');
                     e.target.classList.add('active');
                  }  
                  
               });
         }
   //changes the list of 10 student that appear according to the page selected
        
       
      }
      showPage(studentList, 1);
      appendPageLinks(studentList);
   });
