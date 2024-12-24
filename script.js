const twitchButton = document.getElementById('button-twitch')
const portfolioButton = document.getElementById('button-portfolio')

twitchButton.addEventListener('click', _goChatTwitch)
portfolioButton.addEventListener('click', _goPortfolio)

function _goChatTwitch () {
  window.location.href = 'TwitchChatTesting/index.html'
}

function _goPortfolio () {
  window.location.href = 'https://sanja3dart.notion.site/Portfolio-Sanja-3DArt-0e8af653b37d486c9a12d128a760e166'
}
