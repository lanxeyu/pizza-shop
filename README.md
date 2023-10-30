# Pizza Shop

👉 https://pizza-shop-lanxeyu.netlify.app/

This is the frontend website for a pizza ordering app with responsive elements, customizable pizzas, data handling across components, push notifications, order tracking, & sales recording in a database. React, Node.js, Express, PostgreSQL, Web-Push, Service Worker

[Backend Repo](https://github.com/lanxeyu/plutos-pizza-server)

## How to Run Locally:
1. Clone this repo: `git clone git@github.com:lanxeyu/pizza-shop.git`
2. Install dependencies: `npm install`
3. Start the website: `npm run dev`
4. Navigate to [localhost:5173](http://localhost:5173/)

## Future improvements:
1. Dynamically generate size buttons so that modifying the Pizza class according to changes in the business's size offerings will work seamlessly with the existing code.
2. Add confirmation dialog box after clicking the 'Place Order' button.
3. Add confirmation dialog box after clicking the pizza delete button.
4. Rendering the order confirmation message should be conditional based on the success of sending the order data to the API.