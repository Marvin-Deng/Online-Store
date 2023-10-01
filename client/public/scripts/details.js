document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('card-details');

    const urlParams = new URLSearchParams(window.location.search);
    const requestedID = urlParams.get('id');
    console.log(requestedID)
    fetch(`/items/${requestedID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then((data) => {
            const card = document.createElement('div');
            card.classList.add('card')

            card.innerHTML = `
                <div class="card-image">
                    <img src="${data.image}" alt="${data.name}" />
                </div>
                <div class="card-text">
                    <h2>${data.name}</h2>
                    <p>Price: ${data.pricepoint}</p>
                    <p>Condition: ${data.condition}</p>
                    <p>Ratings: ${data.ratings}</p>
                    <button>
                        Checkout
                    </button>
                </div>
            `;
            dataContainer.appendChild(card);
        })
        .catch((error) => {
            console.error('Error fetching item details:', error);
            const errorPageUrl = '../error.html'; 
            window.location.href = errorPageUrl;
        });
});
