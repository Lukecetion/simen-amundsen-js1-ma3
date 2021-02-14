/* Question: Make a call to the following API endpoint: https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating 

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples. */

const baseUrl = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

async function getBaseUrl(url) {
    const response = await fetch(url);
    const jsonServer = await response.json();
    console.log(jsonServer);
    const result = jsonServer.results;

    for (let i = 0; i < result.length; i++) {
        document.querySelector('main').innerHTML += `
        <div class="card">
            <h1><em>Name: </em> ${result[i].name}</h1>
            <h2><em>Rating: </em>${result[i].rating}</h2>
            <p><em>Total tags: </em>${result[i].tags.length}</p>
        </div>`;

        if (i === 7) {
            break;
        }
    }
};

getBaseUrl(baseUrl);
