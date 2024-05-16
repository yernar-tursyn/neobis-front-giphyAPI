const inputField = document.getElementById('myInput');
const searchBtn = document.querySelector('.search-icon');

function handleEnterKeyPress(event) {
    const giphyApiKey = "8yqdYvy2BErcvXg9dRiwcsbiInABTIq8";
    const query = inputField.value;
    const giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&rating=g&api_key=${giphyApiKey}`;

    fetch(giphyApiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const resultsContainer = document.getElementById('products-lists');
            resultsContainer.innerHTML = '';

            if (json.data && json.data.length > 0) {
                json.data.forEach(function(item) {
                    const imgPath = item.images.fixed_height.url;
                    const img = document.createElement("img");
                    img.setAttribute("src", imgPath);
                    img.setAttribute("class", "product-item");
                    resultsContainer.appendChild(img);
                });
            } else {
                console.error("No GIFs found");
            }
        })
        .catch(function(error) {
            console.error("Error fetching GIFs: ", error);
        });

    inputField.value = '';
}

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleEnterKeyPress(event);
    }
});

searchBtn.addEventListener('click', function(event) {
    handleEnterKeyPress(event);
});