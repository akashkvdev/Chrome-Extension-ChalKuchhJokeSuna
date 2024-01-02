

    fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=a221ce83e28aca4b1c9ff97afbf5')
    .then(response => response.json())
    .then(jokesData => {
        const jokeText = jokesData.jokeContent;
        console.log(jokeText);
        const jokeElement = document.getElementById('jokeElement');
         // Corrected typo here
        jokeElement.innerHTML = jokeText;

        const moodRefreshParagraph = document.getElementById('Loading');
        moodRefreshParagraph.style.display = 'none';
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
