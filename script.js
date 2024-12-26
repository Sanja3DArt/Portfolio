const twitchButton = document.getElementById('btn-twitch')
const portfolioButton = document.getElementById('btn-portfolio')

twitchButton.addEventListener('click', _goChatTwitch)
portfolioButton.addEventListener('click', _goPortfolio)

function _goChatTwitch () {
  window.location.href = 'TwitchChatTesting/chat.html'
}

function _goPortfolio () {
  window.open(
    'https://sanja3dart.notion.site/Portfolio-Sanja-3DArt-0e8af653b37d486c9a12d128a760e166'
  )
}

const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar () {
  closeAllSubMenus()
  sidebar.classList.toggle('close')
}

function toggleSubMenu (button) {
  if (!button.nextElementSibling.classList.contains('show')) {
    closeAllSubMenus()
  }
  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if (sidebar.classList.contains('close')) {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus () {
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}
