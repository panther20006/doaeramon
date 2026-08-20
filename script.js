const menuButton = document.getElementById("menu");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

    });

}