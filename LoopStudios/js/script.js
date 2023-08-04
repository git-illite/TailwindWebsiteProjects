const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

// Function to check the screen size and add/remove class accordingly
function checkScreenSize() {
    // Replace '768' with the desired screen width where you want the class to be toggled
    const screenSizeThreshold = 768;

    if (window.innerWidth > screenSizeThreshold) {
        btn.classList.remove('open')
        menu.classList.add('flex')
        menu.classList.add('hidden')
    }
}

  // Call the function initially to set the class based on the screen size
  checkScreenSize();

  // Add a resize event listener to update the class when the screen size changes
  window.addEventListener('resize', checkScreenSize);

  const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];