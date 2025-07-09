# Anvaya CRM App

The Anvaya CRM app will focus on lead management with defined steps for each lead's lifecycle. We will assign sales agents to leads and allow users to add comments or updates to each lead.
---

## Demo Link

[Live Demo](https://anvayafrontend.vercel.app)

---

## Quick Start
```
git clone https://github.com/mohdrafi854/Ecommerce-Frontend.git
cd <your-repo>
npm install
npm run dev  # or `npm run start` / `yarn dev`
```

## Technologies
- React JS
- React Router
- Redux
- Node JS
- Express JS
- MongoDB
---

## Demo Video
Watch a walkthrough (5–7 minutes) of all major features of this app: [Loom Video Link]()

## Features
**Home**
- Display product categories

**Lisitng Page**
- Display all the Products
- Product search by name
- Filter by categories
- Filter product by rating
- Sort product by price 
- Click wishlist icon and add item
- Click on Add to cart cart to add item

**Detail Page**
- View full information

**Wishlist Page**
- Show all wishlist items

**AddToCart Page**
- Show all add to cart items

## API Refrence

### **GET /leads**<br>
Display all leads<br>
Sample Response:<br>
```
[{_id, name, source, salesAgent, status, tags, timeToClose, priority}, ....]
```

### **GET /agents**<br>
Display all agentst<br>
Sample Response:<br>
```
[{_id, name, email}, ....]
```

### **GET /leads/:id/comments**<br>
View comment<br>
Sample Response:<br>
```
[{_id, lead, author, commentText}, ....]
```

### **GET /report/last-week**<br>
Display report last week<br>
Sample Response:<br>
```
[{_id, status}, ....]
```

### **GET /report/pipeline**<br>
Display all leads which has status closed<br>
Sample Response:<br>
```
[{_id, status}, ....]
```

### **POST /leads**<br>
Create new lead<br>
Sample Response:<br>
```
[{_id, name, source, status, tags, timeToClose, priority}, ....]
```

### **PATCH /leads/:id**<br>
Update leads by lead id<br>
Sample Response:<br>
```
[{_id, name, source, status, tags, timeToClose, priority}, ....]
```

### **DELETE /leads/:id**<br>
Delete leads by lead id<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **POST /agents**<br>
Create new agent<br>
Sample Response:<br>
```
[{_id, name, email}, ....]
```
---

## Contact
For bug or feature requests, please reach out to mohd.rafi854@gmail.com
