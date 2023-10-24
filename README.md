# Pluto's Pizza
This is the frontend website for a pizza ordering app.

[Backend Repo](https://github.com/lanxeyu/plutos-pizza-server)

## How to Run:
1. Clone this repo: `git clone git@github.com:lanxeyu/plutos-pizza-client.git`
2. Install dependencies: `npm install`
3. Start the website: `npm run dev`
4. Navigate to [localhost:5173](http://localhost:5173/)

## Future improvements:
1. Dynamically generate size buttons so that modifying the Pizza class according to changes in the business's size offerings will work seamlessly with the existing code.
2. Modifying a pizza's size is handled by the Pizza class method, but modifying its toppings is handled by the React component. One or the other should be changed to increase readability and conformity.
3. Add confirmation dialog box after clicking the 'Place Order' button.
4. Add confirmation dialog box after clicking the pizza delete button.