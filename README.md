# Vegetable-Shop-App

We have a fun practice assignment for you. 


The aim is for you to become aware of some of the technologies that the team is using and things you would need to learn once you join in. This assignment is just for you to practice and get a general idea of the technologies we use. You will be learning these technologies in detail through our in-house training once you join. 


This will only be a front-end application and no need to create back-end i.e., server-side code. 


The assignments have some nice to have features that would be additional points for you to practice and are not mandatory. We value your time and we understand that you would be occupied with your college assignments and exams. 


Note: - You are not going to be assessed in any way based on this assignment. It is just to get you curious about the exciting work that we are doing and lots of opportunities for you to learn. 


The technologies that are to be/can be used for this assignment are: 

1. HTML 

2. CSS3 

3. Typescript 

4. Angular 15 

5. Angular Material /Prime Ng   

The tutorials you can use for these technologies are: 

https://angular.io/tutorial 

https://codecraft.tv/courses/angular/quickstart/overview/ 


Of course, you can refer other documents as well but we use these documentations to learn Angular. 

Note: - It would be great if you created an activity/flow diagram of the application before starting with the implementation. 


In case of any questions or queries, please feel free to contact us. 


## Assignment: 

### Objective: 

Create an application which will be used to store/sell vegetables and fruits based on the supply and demand. 

### Requirements: 

Users: Create two static users with the following roles: 

Vegetable Seller: An admin who manages the application, available vegetables, etc. 

Customer: A user who will be visiting the application to buy vegetables and fruits. 

Create a sign-in page which will be the very first page of the application. The sign-in form will have: 

- Username 

- Password 

- Role (should be a dropdown with options as ‘Vegetable Seller’ and ‘Customer’) 

On clicking the ‘Sign In’ button, redirect the user to the further pages according to his role. 

We can also have a ‘Sign Out’ button in our application. On clicking this button, redirect the user to the sign-in page. 

#### For Vegetable Seller: 

(1) After clicking the ‘Sign In’ button, display a form which will have the following fields: 

- Group (can be a dropdown with options as ‘Vegetable’ and ‘Fruit’) 

- Name 

- Type (Daily Need, Exotic (e.g., broccoli), Seasonal (e.g., mango), etc.) 

- Available Quantity 

- Price 

(2) There should be an ‘Insert’ button below the form. On clicking this button, the vegetable/fruit should get added to a list of products on a different ‘Vegetable List’ page. We can display this list as a table with 5 columns: 

- Group 

- Name 

- Type 

- Available Quantity 

- Price 

(3) Beside each row of the table, there should be an ‘Edit’ button. On clicking this button, redirect the vegetable seller to a form where he can edit the price and available quantity of that product. The other three fields: group, name and type should be disabled for editing. After clicking on the ‘Save’ button the product’s price/quantity should get updated in the table. 

(4) Beside the ‘Edit’ button in each row, there should be a ‘Delete’ button. On clicking this button, the product (that row) should get removed from the vegetable list. 

(5) There should also be an ‘Add new product’ button at the bottom of the ‘Vegetable List’ page. On clicking this button, the vegetable seller should be redirected to the initial form page. 

#### For Customer: 

(1) After clicking the ‘Sign In’ button, redirect the customer to the ‘Vegetable List’ page. The vegetable list (table) should not have the ‘Edit’ and ‘Delete’ buttons this time. 

(2) Instead show a ‘Buy’ button beside each row of the table. On clicking this button, a popup should open in which the customer can see the name of the product, the available quantity and the price. 

(3) There should also be a field in the popup where the customer can insert the quantity that he wants to buy. If the customer enters the quantity which is greater than the available quantity then he should get an error. 

(4) The total price should be calculated based on this quantity. Once the purchase is successful (only a static way of clicking ‘OK’ on the popup), the available quantity in the vegetable list should get updated. 

(5) We can also have a ‘Search Bar’ where the customer can search the products by Product Type. For example: If he types ‘Seasonal’ in the search bar then he should see only those vegetables/fruits whose type is ‘Seasonal.’ 

### Note: 

- You can create some mock data and insert it in the table by default. 

- So, whenever you run the application, the table will always have some data and will not be empty. 

### Hint: 

- You can create an array of objects for storing this data. 

### Some nice to have features are: 

1. Sorting the columns of the table in ascending and descending order by using mat-table. 

2. Generate a final bill after all purchase 

3. ER Diagram 

4. Use Angular Material for various elements like input tags, forms, buttons etc. as it is used in the projects. 

5. Use AUTH Guard, to prevent unauthenticated users from accessing sensitive information. 
