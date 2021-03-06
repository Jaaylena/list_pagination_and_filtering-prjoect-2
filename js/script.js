const studentList = document.querySelectorAll('.student-item');
//search function creates a search box 
function nameSearch(input, names) {
	/*select the div with a class name page-header and assign it to a variable
	 */
	const pageHeaderDiv = document.querySelector('.page-header');
	//create a div with a class name student-search and append it to the pageHeaderDiv
	const headerDiv = document.createElement('div');
	headerDiv.className = 'student-search';
	pageHeaderDiv.appendChild(headerDiv);
	/*creating a search box with a class name student, assigning it a type text
	with a placeholder search for students */
	const searchInput = document.createElement('input');
	headerDiv.appendChild(searchInput);
	searchInput.className = 'student';
	searchInput.type = 'text';
	searchInput.placeholder = 'Search for Students...';
	/*creating a search button and appending it to the searchbar give it a submit type 
	with a text content search*/
	const searchButton = document.createElement('button');
	headerDiv.appendChild(searchButton);
	searchButton.type = 'submit';
	searchButton.textContent = 'Search';
	/* create an event listener that listens for a click 
	 */
	searchButton.addEventListener('click', (e) => {
		//creating a variable to store the input value into an array
		let matches = [];
		const filter = searchInput.value.toLowerCase();
		//looping through the student names to check for matches.
		for (let i = 0; i < studentList.length; i++) {
			//creating a filter that reviews the value of the search input
			const studentInfo = studentList[i];
			/*create a variable that selects the h3 element to compare */
			const studentNames = studentInfo.querySelector('h3').innerText.toLowerCase();
			//hiding list
			studentInfo.style.display = 'none';
			/*conditional statement to compare the search value with the student names variable 
			and pushing it to the matches array*/
			if (studentNames.includes(filter)) {
				//show only the students that match
				matches.push(studentInfo);
			}
			//shows the matches to the page
			showPage(matches, 1);
			//show the total of pages for the amount of matches 
			appendPageLinks(matches);
			// removes user input when search button is clicked
			searchInput.value = '';
		}
		// if no matches display 'no students found 
		if (matches.length === 0) {
			document.querySelector('h2').textContent = 'No Students Found';
			document.querySelector('h2').style.color = 'red';
			//else if matches.length is greater than 0 or searchInput is empty return list 
		} else if (matches.length > 0 || searchInput.value == '') {
			document.querySelector('h2').textContent = 'Students';
			document.querySelector('h2').style.color = 'gray';
		}
		//shows the matches to the page
		showPage(matches, 1);
		//show the total of pages for the amount of matches 
		appendPageLinks(matches);
	});
	//an eventlistener that listens to a key press to search students.
	searchInput.addEventListener('keyup', e => {
		//a variable to store the matching input
		let matches = [];
		//selects the ul element in the HTML 
		const ul = document.querySelector('.student-list');
		//looping through the student names to check for matches.
		for (let i = 0; i < studentList.length; i++) {
			//creating a filter that reviews the value of the search input
			const filter = searchInput.value.toLowerCase();
			const studentInfo = studentList[i];
			//create a variable that selects the h3 element to compare 
			const studentNames = studentInfo.querySelector('h3').innerText.toLowerCase();
			//hiding list
			studentInfo.style.display = 'none';
			//conditional statement to compare the search value with the student names variable 
			//and pushing it to the matches array
			if (studentNames.includes(filter)) {
				//show only the students that match
				matches.push(studentInfo);
			}
			//shows the matches to the page
			showPage(matches, 1);
			//show the total of pages for the amount of matches 
			appendPageLinks(matches);
			// removes user input when search button is clicked
		}
		// if no matches display 'no students found 
		if (matches.length === 0) {
			document.querySelector('h2').textContent = 'No Students Found';
			document.querySelector('h2').style.color = 'red';
			//else if matches.length is greater than 0 or searchInput is empty return list 
		} else if (matches.length > 0 || searchInput.value == '') {
			document.querySelector('h2').textContent = 'Students';
			document.querySelector('h2').style.color = 'gray';
		}
		//shows the matches to the page
		showPage(matches, 1);
		//show the total of pages for the amount of matches 
		appendPageLinks(matches);
	});
	//need to change page numbers to match the amount of pgs needed for 
}
/***function to display 10 students to a page at a time. ***/
function showPage(list, page) {
	let firstIndex, lastIndex;
	firstIndex = page * 10 - 10;
	lastIndex = page * 10 - 1;
	// Loop over items in the list parameter creating the list of ten students to a page
	for (let i = 0; i < list.length; i++) {
		if (i >= firstIndex && i <= lastIndex) {
			//to show items if true
			list[i].style.display = 'block';
		} else {
			//to hide items if false
			list[i].style.display = 'none';
		}
	}
}
/**a funtion that determines the number of pages needed to append 10 out of 54
 * students */
function appendPageLinks(list) {
	//calculating the number of pages needed to display the student list
	const numberOfPgs = Math.ceil(list.length / 10);
	//checking for the pagnation div
	const pagDiv = document.querySelector('.pagination');
	if (typeof(pagDiv) != 'undefined' && pagDiv != null) {
		//removing it if it
		pagDiv.remove();
	}
	/* creating a div with pagination class with a ul that stores the pg links
	and appending it to the div.page**/
	const divClassPage = document.querySelector('.page');
	const divPagination = document.createElement('div');
	const ulPagination = document.createElement('ul');
	divPagination.className = 'pagination';
	divClassPage.appendChild(divPagination);
	divPagination.appendChild(ulPagination);
	//creating page numbers with links       
	for (let i = 0; i < numberOfPgs; i++) {
		const pgLink = document.createElement('a');
		const paginationLi = document.createElement('li');
		pgLink.textContent = `${i+1}`;
		paginationLi.appendChild(pgLink);
		ulPagination.appendChild(paginationLi);
		//highlights the active page
		if (i === 0) {
			pgLink.classList.add('active');
		} else {
			pgLink.classList.remove('active');
		}
		//when a page number link is clicked the corresponding list is displayed
		pgLink.addEventListener('click', (event) => {
			const pageNumbers = document.querySelectorAll('.pagination a');
			showPage(list, i + 1);
			for (let p = 0; p < pageNumbers.length; p++) {
				pageNumbers[p].classList.remove('active');
				event.target.classList.add('active');
			}
		});
	}
}
showPage(studentList, 1);
appendPageLinks(studentList);
nameSearch();
