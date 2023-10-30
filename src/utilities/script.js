function generateRandom8DigitNumber() {
    const min = 10000000; 
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCurrentDateTime() {
    const currentDate = new Date();
    const isoFormattedDateTime = currentDate.toISOString();
    return isoFormattedDateTime
}

const publicVapidKey = 'BH9_qhRn_59xQ44j_7sFcM9MZfE-k-_Lk2SzUvs2_XoNdotQB4thDAm543PSmBADMHNSC9MNVIrDG0YGAZVj62Q';

function runSendOrderDataToApi(orderData) {
  // Check for service worker
  if ("serviceWorker" in navigator) {
      sendOrderDataToApi().catch(err => console.error(err));
    }
    
    // Register SW, Register Push, Send Push
    async function sendOrderDataToApi() {
      // Register Service Worker
      const register = await navigator.serviceWorker.register("/src/utilities/worker.js", {
        scope: "/src/utilities/"
      });
    
      // Register Push
      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
      });
      
      orderData.subscription = subscription
      // Send Push Notification
      await fetch('https://pizzashop-server.onrender.com/orders', {
          method: "POST",
          body: JSON.stringify(orderData),
          headers: {
            "content-type": "application/json"
          }
      })
        .then((response) => response.json());
  }
}

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function calculatePizzaPrice(pizza) {
  const basePrice = {
      Small: 6.99,
      Medium: 8.99,
      Large: 11.99
  }[pizza.size] || 0

  const includedToppings = {
      Small: 2,
      Medium: 3,
      Large: 5
  }[pizza.size] || 0

  const selectedToppingsCount = Object.values(pizza.toppings).filter(topping => topping).length
  const extraToppingCount = Math.max(selectedToppingsCount - includedToppings, 0)

  const extraToppingPrice = 1.49 * extraToppingCount

  const totalPrice = (basePrice + extraToppingPrice).toFixed(2)

  return totalPrice
}

export { generateRandom8DigitNumber, getCurrentDateTime, runSendOrderDataToApi, calculatePizzaPrice }