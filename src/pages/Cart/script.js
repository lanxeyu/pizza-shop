const addPizzaBtn = document.querySelector('.add-pizza-btn');

function updateAddPizzaButtonText() {

    if (addPizzaBtn) {
        addPizzaBtn.addEventListener('click', updatePizzaListBottomMargin)

        if (window.innerWidth <= 768) {
            addPizzaBtn.textContent = '+';
        } else {
            addPizzaBtn.textContent = 'Add Pizza';
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
  
// Call the function on page load and when the window is resized
window.addEventListener('load', updateElements);
window.addEventListener('resize', updateElements);

// Immediately call the function on page load
document.addEventListener('DOMContentLoaded', updateElements);
  