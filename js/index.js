window.addEventListener("click", () => {
  if (event.target.id != "dropdownButtonImage")
    document.getElementById("dropdownList").style.display = "none";
});

function buttonHover(wrapperId, imageId) {
  document.getElementById(wrapperId).style.background = "rgba(0, 0, 0, 0.3)";
  let image = document.getElementById(imageId);
  if (imageId == "homeButtonImage") image.src = "./img/HomeHover.png";
  else                              image.src = "./img/DropdownHover.png";
}

function buttonUnhover(wrapperId, imageId) {
  document.getElementById(wrapperId).style.background = "none";
  let image = document.getElementById(imageId);
  if (imageId == "homeButtonImage") image.src = "./img/Home.png";
  else                              image.src = "./img/Dropdown.png";
}

function toggleDropdown () {
  const dropdownList = document.getElementById("dropdownList");
  const dropdownListDisplay = window.getComputedStyle(dropdownList).display;
  if (dropdownListDisplay == "none")
    dropdownList.style.display = "block";
  else
    dropdownList.style.display = "none";
}
