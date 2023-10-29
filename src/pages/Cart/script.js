
function updateAddPizzaButtonText() {
    const addPizzaBtn = document.querySelector('.add-pizza-btn');

    if (addPizzaBtn) {
        addPizzaBtn.addEventListener('click', updatePizzaListBottomMargin)

        if (window.innerWidth <= 768) {
            addPizzaBtn.textContent = '+';
            addPizzaBtn.style.fontSize = '40px';
            addPizzaBtn.style.right = '5vw';
        } else {
            addPizzaBtn.textContent = 'Add Pizza';
            addPizzaBtn.style.fontSize = '25px';
            addPizzaBtn.style.right = '5vw';
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
}
  
window.addEventListener('load', updateElements);
window.addEventListener('resize', updateElements);

export { updateElements }