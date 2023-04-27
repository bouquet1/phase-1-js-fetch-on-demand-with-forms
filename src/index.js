//Get the form working. When a user inputs a valid ID, the movie information should appear on the page. We need to 1.capture user input, 2.use it to customize a fetch request to our JSON server, and 3.display those retrieved data on the page.

// function init() {}

const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //access the input element directly instead of using event to get the value we need
        const input = document.querySelector("input#searchByID");
        console.log(input.value);
        //fetch data based on what the user types into that form
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(res => res.json())
            //.then(data => console.log(data))
            //display that data on the page
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');
                title.textContent = data.title;
                summary.textContent = data.summary;
            })
        // .then(console.log, console.error)
            .catch(error => console.log(error))
        /*.catch(err => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.textContent = "We don't have that specific movie in our database";
            summary.textContent = "Request a movie to be included to our database by eamiling us: request@kidsMDb.com "
        })*/
    });
};

document.addEventListener('DOMContentLoaded', init);

/* STEPS - Breaking down my code
1. Add event listeners to capture form data and override a form's default behavior
    By default, HTML form elements will refresh when a Submit input is clicked. We need to override this behavior. */

/*Note that js already contains one event listener and a callback function ready for me, init:

const init = () => {};

document.addEventListener("DOMContentLoaded", init);

I just  need to write my code inside init
*/

/*
const inputForm = document.querySelector("form");
inputForm.addEventListener('submit', myEventHandler = (event) => {
        event.preventDefault(); // We will always need to use event.preventDefault() to stop the page from refreshing.

        //using event to get the value we need (check web's console)
        console.log(event); // SubmitEvent {isTrusted: true, submitter: input, type: 'submit', target: form, currentTarget: form, …}

        // console.log(event.target); // => <form>..</form>
        console.log(event.target.children); // => HTMLCollection(3) [label, input#searchByID, input, searchByID: input#searchByID]

        console.log(event.target.children[1]); // => <input id="searchByID" type="text" placeholder="Enter ID here">

       console.log(event.target.children[1].value);  // => whatever you typed into the input inThisCase 3

        //access the input element directly instead of using event to get the value we need. I used this option in my code above
        const input = document.querySelector("input#searchByID");
        console.log(input.value);
});
*/


/*2. Fetch data based on what the user types into that form
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(data => {console.log(data);}); // LOG: (3) [{…}, {…}, {…}]
        //to get specific data we can pull specific id's url f.e http://localhost:3000/movies/1
        // using interpolation to modfiy the URL we pass to our fetch function based on the input typed into the HTML form. So, we need to update the fetch URL for that.
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => console.log(data))
*/

/*3. Display that data on the page
In the HTML, we have a section element with an id, "movieDetails", that contains some filler content. We'll replace Title and Summary with data we retrieved from our server. To do this, we'll work inside the second then of our fetch request. First, we'll access the DOM and store the two elements in JavaScript.
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.jspon())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
        (we could also add id attribute to the h4 and p tags directly and then call them with querySelector)
            title.textContent = data.title;
            summary.textContent = data.summary;
        })
*/

//this steps all together, our code looks like this:

/*
const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
*/

