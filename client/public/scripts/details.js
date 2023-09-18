document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('card-details');

    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');
    console.log(itemId)
    fetch(`/items/${itemId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response error');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const card = document.createElement('div');
            card.innerHTML = `
                <img src="${data.image}" alt="${data.name}" />
                <h2>${data.name}</h2>
                <p>${data.description}</p>
                <p>Price: ${data.pricePoint}</p>
                <p>Submitted by: ${data.submittedBy}</p>
                <p>Submitted on: ${data.submittedOn}</p>
            `;
            dataContainer.appendChild(card);
        })
        .catch((error) => {
            console.error('Error fetching item details:', error);
        });
});
