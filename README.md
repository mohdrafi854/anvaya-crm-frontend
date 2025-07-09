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

### **GET /api/categories**<br>
Display all categories<br>
Sample Response:<br>
```
[{_id, name, imageUrl}, ....]
```

### **GET /api/products**<br>
Display all List<br>
Sample Response:<br>
```
[{_id, name, price, rating, size, imageUrl}, ....]
```

### **GET /api/products**<br>
View full details<br>
Sample Response:<br>
```
[{_id, name, price, rating, size, imageUrl}, ....]
```

### **GET /api/wishlist**<br>
Display all wishlist items<br>
Sample Response:<br>
```
[{_id, Category, imageUrl, name, price, rating, size}, ....]
```

### **GET /api/cart**<br>
Display all cart items<br>
Sample Response:<br>
```
[{_id, items, totalPrice}, ....]
```

### **POST /api/products**<br>
Create new item<br>
Sample Response:<br>
```
[{_id, name, price, imageUrl, Category}, ....]
```

### **PATCH /api/products/:id**<br>
Create new item<br>
Sample Response:<br>
```
[{_id, name, price, imageUrl, Category}, ....]
```

### **POST /api/categories**<br>
Create new category<br>
Sample Response:<br>
```
[{_id, name, imageUrl}, ....]
```

### **DELETE /api/categories/:id**<br>
Delete item by id<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **POST /api/cart**<br>
Add to cart item<br>
Sample Response:<br>
```
[{_id, quantity}, ....]
```

### **DELETE /api/cart/item/:id**<br>
Delete cart item<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **POST /api/wishlist**<br>
Add to wishlist item<br>
Sample Response:<br>
```
[{_id}, ....]
```

### **DELETE /api/wishlist/:id**<br>
Delete wishlist item<br>
Sample Response:<br>
```
[{_id}, ....]
```
---

## Contact
For bug or feature requests, please reach out to mohd.rafi854@gmail.com
