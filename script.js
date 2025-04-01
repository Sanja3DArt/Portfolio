const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const gallery3D = document.getElementById("3DGallery");

function toggleSidebar() {
  closeAllSubMenus()
  sidebar.classList.toggle('close')
  sidebar.classList.toggle('rotate')
}

function toggleSubMenu(button) {
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

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

function toggleActive(button) {
  Array.from(sidebar.getElementsByClassName('active')).forEach(ul => {
    ul.classList.remove('active')
  })

  button.classList.add('active')
}

function toggle3DGallery(button) {
  button.classList.toggle('rotate')
  gallery3D.classList.toggle('expanded')
}

//#region LOAD IMAGES
async function fetchImageList() {
  const response = await fetch("/images/renders/imageList.json");
  const data = await response.json();
  return data.images;
}

async function loadImages() {
  const imageList = await fetchImageList();

  imageList.forEach(imageName => {
    const galleryElement = document.createElement("div");
    galleryElement.classList.add("galleryElement");

    const img = document.createElement("img");
    img.src = `/images/renders/${imageName}`;
    img.alt = "3D model render";

    const imageLink = document.createElement("a");
    imageLink.href = `/images/renders/${imageName}`;
    imageLink.target = "_blank"

    imageLink.appendChild(img);
    galleryElement.appendChild(imageLink);
    gallery3D.appendChild(galleryElement);
  });
}
loadImages();
//#endregion