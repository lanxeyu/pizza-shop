self.addEventListener('push', e => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: "Notified by Lanxe Yu's Pizza Shop"
    });
});