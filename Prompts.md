## Prompts Used

1. I was implementing cart functionality using React Context API, but when I added products multiple times, duplicate items were getting created instead of updating quantity properly. I wanted the cart to increase quantity for existing items instead of creating repeated entries. Can you help me fix the cart logic so quantity updates correctly?

2. While adding quantity controls (+ and - buttons) inside the product details page, the entire page suddenly went blank after I added the new JSX structure. I think I placed hooks or cart logic in the wrong position. Can you help me reorganize the ProductDetails component safely so the quantity controls work without crashing the app?

3. I implemented checkout functionality, but after placing an order, the cart items still remained inside the cart. This caused confusion because old items kept appearing during future checkouts. Can you help me properly clear the cart after successful order placement while still saving previous orders separately?

4. While creating authentication using Context API, I noticed the checkout page kept redirecting to login repeatedly even after logging in once. I wanted the app to behave more like a real ecommerce platform where users stay logged in across sessions. Can you help me improve the authentication flow using localStorage persistence?

5. I added login and signup functionality, but the navbar displayed the user’s email instead of their actual name after account creation. The signup page had name, email, and password fields, but the stored user object still used email as the display name. Can you help me fix the authentication logic so the correct username appears across the app?

6. While redesigning the homepage with hero sections, feature cards, banners, and modern UI styling, the layout suddenly looked broken even though the CSS existed. Later I realized the JSX structure had not been updated to match the new CSS classes. Can you help me properly synchronize the homepage JSX and CSS structure without causing layout issues?

7. I implemented responsive design using multiple media queries, but I was confused about how to support all devices properly without breaking the desktop layout. I wanted the ecommerce app to look professional across mobiles, tablets, laptops, and desktops. Can you help me create a scalable responsive CSS structure?

8. I added a footer (“Powered by ProDeskIT ⚡”), but on pages with less content the footer floated awkwardly in the middle instead of staying at the bottom of the screen. I wanted a clean sticky footer layout without restructuring the entire app. Can you help me fix the footer positioning using proper CSS layout techniques?

9. While improving the homepage and contact page UI, I wanted the cards to feel more interactive with hover animations and elevation effects. Some cards animated while others stayed static because the hover styles were inconsistent across components. Can you help me create reusable hover effects for all cards without conflicting with existing CSS?

10. I implemented product search and category filters in the shop page, but I wanted the filtering system to feel more dynamic and responsive like a real ecommerce website. Can you help me create a clean filtering structure using React state and array filtering methods?

11. While creating the customer support page, I wanted it to feel like a professional ecommerce support center instead of a simple contact form. I needed support categories, contact cards, hover effects, and a modern responsive layout. Can you help me structure the support page UI professionally?

12. I wanted the navbar to behave more dynamically like a real ecommerce application by showing logged-in user details, active navigation links, cart quantity count, and logout functionality. However, updating the navbar caused the app to crash due to context-related issues. Can you help me safely integrate authentication state into the navbar without breaking the app?

--- 

#  Project

ShopZone Ecommerce Web Application

Built using:
- React.js
- Vite
- React Router DOM
- Context API
- CSS3
- Local Storage 