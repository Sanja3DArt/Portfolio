const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar () {
  closeAllSubMenus()
  sidebar.classList.toggle('close')
  sidebar.classList.toggle('rotate')
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

  toggleActive(button)
}

function closeAllSubMenus () {
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

function toggleActive (button) {
  Array.from(sidebar.getElementsByClassName('active')).forEach(ul => {
    ul.classList.remove('active')
  })

  button.classList.add('active')
}
