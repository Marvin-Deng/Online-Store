document.addEventListener('DOMContentLoaded', () => {
  const dataContainer = document.getElementById('card-container');

  fetch('/items')
    .then(response => response.json())
    .then((data) => {

      data.forEach(item => {
        const card = document.createElement('a');
        card.classList.add('card')
        card.href = `../details.html?id=${item.id}`;

        card.innerHTML = `
          <div class="top-container">
            <img src="${item.image}" alt="${item.name}" />
          </div>

          <div class="bottom-container">
            <h2>${item.name}</h2>
            <p>Price: ${item.pricepoint}</p> 
            <p>Ratings: ${item.ratings}</p>   
          </div>
          `;

        dataContainer.appendChild(card);
      });
    })

    .catch((error) => {
      console.error('Error fetching data:', error);
      message.textContent = 'No Products Available 😞'
      dataContainer.appendChild(message)
    });
});
