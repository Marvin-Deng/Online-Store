document.addEventListener('DOMContentLoaded', () => {
  const dataContainer = document.getElementById('card-container');

  fetch('/items')
    .then(response => response.json())
    .then((data) => {
      console.log(data)

      data.forEach(item => {
        const card = document.createElement('a');
        card.classList.add('card')
        card.href = `/items?id=${item.id}`
        console.log(item.id)
        card.innerHTML = `
          <div class="top-container">
            <img src="${item.image}" alt="${item.name}" />
          </div>

          <div class="bottom-container">
            <h2>${item.name}</h2>
            <p>Price: ${item.pricePoint}</p>  
          </div>
          `;

        dataContainer.appendChild(card);
      });
    })

    .catch((error) => {
      console.log("Error")
      console.error('Error fetching data:', error);
      message.textContent = 'No Products Available 😞'
      dataContainer.appendChild(message)
    });
});
