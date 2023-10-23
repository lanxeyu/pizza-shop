const publicVapidKey = 'BIgp7JGC-EZKn2Fcvt7iBFQLlDj-iVzWU3I8ZlzrwhSuzXRHa23KsVmyk_cWKLGY9yBBx0esawbCzKkRrSer7cU';

// Check for service worker
if ("serviceWorker" in navigator) {
    send().catch(err => console.error(err));
  }
  
  // Register SW, Register Push, Send Push
  async function send() {
    // Register Service Worker
    const register = await navigator.serviceWorker.register("/src/utilities/worker.js", {
      scope: "/src/utilities/"
    });
  
    // Register Push
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
  
    // Send Push Notification
    await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "content-type": "application/json"
        }
    });
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