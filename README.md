# 🛒 Cartify - Modern E-commerce Storefront

A high-performance, responsive E-commerce web application built with **Next.js 14**, **Tailwind CSS**, and **Shadcn UI**. The design is inspired by the efficiency and clarity of Amazon's layout, providing a seamless shopping experience.

---

## ✨ Features

* **Modern UI/UX:** Clean, minimalist design using **Shadcn UI** components.
* **Dynamic Routing:** Optimized navigation using Next.js **App Router**.
* **Product Catalog:**
    * Browse by categories with a **Mega Menu** navigation.
    * Filter products by brands and categories.
    * Detailed product view with gallery and specifications.
* **Wishlist & Cart System:**
    * Persistent cart functionality with Order Summary.
    * Protected Wishlist (requires authentication logic).
* **Support & Contact:** Functional contact form with **Zod** schema validation.
* **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
* **Form Handling:** [React Hook Form](https://react-hook-form.com/)
* **Validation:** [Zod](https://zod.dev/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Structure

The project follows a modular and scalable directory structure:

```text
e-commerce/
├── app/
│   ├── layout.tsx                          # Root layout (navbar + footer)
│   ├── page.tsx                            
│   │
│   ├── products/
│   │   ├── page.tsx                        # /products
│   │   └── [slug]/
│   │       └── page.tsx                    
│   │
│   ├── categories/
│   │   ├── page.tsx                        # /categories
│   │   └── [slug]/
│   │       └── page.tsx                 
│   │
│   ├── brands/
│   │   ├── page.tsx                        # /brands
│   │   └── [slug]/
│   │       └── page.tsx                  
│   │
│   ├── support/
│   │   └── page.tsx                        # /support
│   │
│   ├── wishlist/
│   │   └── page.tsx                        # /wishlist (protected)
│   │
│   ├── cart/
│   │   └── page.tsx                        # /cart
│   │
│   └── (auth)/
│       ├── login/
│       │   └── page.tsx                    # /login
│       └── register/
│           └── page.tsx                    # /register
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                     
│   │   ├── Footer.tsx
│   │   ├── AnnouncementBar.tsx
│   │   └── CategoryDropdown.tsx           
│   │
│   ├── ProductCard.tsx                    
│   ├── ProductGrid.tsx                    
│   ├── Pagination.tsx                  
│   ├── FilterSidebar.tsx                
│   ├── WishlistButton.tsx                  
│   ├── CartItem.tsx                     
│   └── OrderSummary.tsx                
│
├── lib/
│   ├── api.ts
│   └── utils.ts
│
├── store/
│   ├── cartStore.ts
│   └── wishlistStore.ts
│
├── types/
│   └── index.ts
│
├── middleware.ts                        
└── next.config.ts            
