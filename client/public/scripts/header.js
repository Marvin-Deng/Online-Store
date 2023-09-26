document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');

  const headerContainer = document.createElement('div');
  headerContainer.className = 'header-container';

  // Left side
  const headerLeft = document.createElement('div');
  headerLeft.className = 'header-left';

  const headerLogo = document.createElement('img');
  headerLogo.className = 'logo'
  headerLogo.src = '/assets/logo.png';

  headerLogo.addEventListener('click', function handleClick(event) {
    window.location = '/';
  });

  // Center
  const input = document.createElement('input');
  input.className = 'search-bar';
  input.placeholder = 'Search...';

  headerLeft.appendChild(headerLogo);

  // Right side
  const headerRight = document.createElement('div');
  headerRight.className = 'header-right';

  const themeButton = document.createElement('button');
  themeButton.className = 'theme-btn'
  themeButton.addEventListener('click', function handleClick(event) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  });

  headerRight.appendChild(themeButton);

  // Create header
  headerContainer.appendChild(headerLeft);
  headerContainer.appendChild(input)
  headerContainer.appendChild(headerRight);
  header.appendChild(headerContainer);
});
