const availableToppings = [
    'Anchovies',
    'Bacon',
    'Ham',
    'Mushrooms',
    'Olives',
    'Onions',
    'Pepperoni',
    'Peppers',
    'Pineapple',
    'Sausage',
];

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

const publicVapidKey = 'BIgp7JGC-EZKn2Fcvt7iBFQLlDj-iVzWU3I8ZlzrwhSuzXRHa23KsVmyk_cWKLGY9yBBx0esawbCzKkRrSer7cU';

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
      await fetch('http://localhost:3000/orders', {
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

export { availableToppings, generateRandom8DigitNumber, getCurrentDateTime, runSendOrderDataToApi }