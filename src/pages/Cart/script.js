import { updateLogo } from "../../components/Header/script";

function updateAddPizzaButtonText() {
    const addPizzaBtn = document.querySelector('.add-pizza-btn');

    if (addPizzaBtn) {
        addPizzaBtn.addEventListener('click', updatePizzaListBottomMargin)

        if (window.innerWidth <= 768) {
            addPizzaBtn.textContent = '+';
            addPizzaBtn.style.fontSize = '40px';
            addPizzaBtn.style.right = '2vw';
            
        } else {
            addPizzaBtn.textContent = 'Add Pizza';
            addPizzaBtn.style.fontSize = '30px';
            addPizzaBtn.style.right = '4vw';
        }
    }
}

function updatePizzaListBottomMargin() {
    const pizzaList = document.querySelector('.pizza-list');
    const checkoutFooter = document.querySelector('.checkoutFooter');

    if (checkoutFooter && pizzaList) {
        const footerHeight = checkoutFooter.height;
        pizzaList.style.marginBottom = '0px';
        pizzaList.style.marginBottom = footerHeight + 'px';
    }
}

function updateElements() {
    updateAddPizzaButtonText();
    updatePizzaListBottomMargin();
    updateLogo();
}
  
window.addEventListener('load', updateElements);
window.addEventListener('resize', updateElements);

export { updateElements }