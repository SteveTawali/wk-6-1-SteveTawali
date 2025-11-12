# Phase 1: Early Manual Test Scripts (Priority 1)

## 1. Core Book Catalog & Cart

### ID: TC-CAT-000
**Title:** Search Books by Title
**Pre-conditions:** User is on catalog page, Books data is loaded
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click on search input field | Search input field is focused | | | |
| 2 | Type a known book title/description/author | Matching books are displayed | | | |
| 3 | Wait for results to load | Search is case-insensitive, results update in real-time | | | |
**Post-conditions:** Search results displayed correctly

### ID: TC-CART-001
**Title:** Add Book to Cart
**Pre-conditions:** User is viewing a book, Cart is empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Buy Now" button on BookCard | Book added to cart | | | |
| 2 | Observe cart counter update | Cart counter increments | | | |
| 3 | Navigate to cart page | Book visible in cart with correct price | | | |
**Post-conditions:** Book present in cart

### ID: TC-CART-002
**Title:** Update Cart Quantity
**Pre-conditions:** User has items in cart, user is on /cart page
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate quantity input field for a cart item | Quantity input field is visible | | | |
| 2 | Change quantity value (e.g., to 2 or 3) | Quantity input shows updated value | | | |
| 3 | Observe the subtotal calculation | Line item price = book.price × quantity, subtotal recalculates correctly | | | |
**Post-conditions:** Cart item quantity is updated, subtotal updated, localStorage app.cart updated

### ID: TC-CART-003
**Title:** Remove Book from Cart
**Pre-conditions:** Book exists in cart
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to cart page | Cart page loads with items | | | |
| 2 | Click "Remove" button | Book removed from cart | | | |
| 3 | Observe cart update | Subtotal updates, empty cart message if last item | | | |
**Post-conditions:** Book removed from cart

### ID: TC-CART-006
**Title:** Empty Cart State
**Pre-conditions:** Cart is empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Ensure cart empty | Cart shows 0 items | | | |
| 2 | Navigate to cart page | "Your cart is empty" message shown | | | |
| 3 | Verify continue link | "Continue shopping" link present, link navigates to /catalog | | | |
**Post-conditions:** Empty cart state is displayed

## 2. Essential Checkout Flow

### ID: TC-CHK-001
**Title:** Checkout Wizard Has 4 Steps
**Pre-conditions:** User navigates to /checkout route, cart has items
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to /checkout route | Checkout page loads | | | |
| 2 | Observe step indicators in the page | Step indicators show: "Shipping", "Review", "Payment", "Confirmation" | | | |
| 3 | Verify step labels and active step highlighting | First step "Shipping" is highlighted/bold | | | |
**Post-conditions:** Checkout wizard displays with 4 steps, first step is active

### ID: TC-CHK-002
**Title:** Shipping Form - All Fields Required
**Pre-conditions:** User is on checkout step 1 (Shipping), form is empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Try to click "Next" button without filling any fields | Error message displayed: "Please fill out all required fields" | | | |
| 2 | Observe error message | Form does not proceed to next step | | | |
**Post-conditions:** Form validation prevents progression, error message is visible

### ID: TC-CHK-004
**Title:** Shipping Form - Valid Submission
**Pre-conditions:** User is on checkout step 1 (Shipping), form fields are empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Fill all required fields: fullName, email, address, city, country, postalCode | All fields populated correctly | | | |
| 2 | Click "Next" button | Form submits successfully | | | |
| 3 | Observe step change | Step indicator shows "Review" as active, form data is preserved | | | |
**Post-conditions:** User is on Review step (step 2), shipping data is stored in component state

### ID: TC-CHK-008
**Title:** Review Step - Display Cart Items
**Pre-conditions:** User completed shipping step, user is on Review step (step 2)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Verify all cart items are listed | All cart items are displayed with book title | | | |
| 2 | Verify quantities are displayed correctly | Quantities shown (e.g., "Qty 2") | | | |
| 3 | Verify prices are displayed correctly | Line item price (book.price × quantity), formatted currency | | | |
**Post-conditions:** Review step shows all cart items with correct details

## 3. Basic Payment Integration

### ID: TC-PAY-001
**Title:** Paystack Initialization
**Pre-conditions:** User clicks "Pay Now" on checkout step 3, cart has items, shipping info is complete
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Pay Now" button on checkout step 3 | Paystack payment interface opens (popup or iframe) | | | |
| 2 | Observe Paystack popup/modal | Payment form is visible | | | |
| 3 | Verify payment form is displayed | Order is created with status "Pending" | | | |
**Post-conditions:** Paystack payment modal is open, order is created with status "Pending"

### ID: TC-PAY-002
**Title:** Payment with Valid Test Card
**Pre-conditions:** Paystack modal is open, payment form is displayed
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter test card number: 4084084084084081 | Card number accepted | | | |
| 2 | Enter CVV: 123 | CVV accepted | | | |
| 3 | Enter future expiry date (e.g., 12/30) | Expiry date accepted | | | |
| 4 | Complete payment | Payment succeeds | | | |
| 5 | Verify order status update | Order status changes to "Paid", user is redirected to confirmation step | | | |
**Post-conditions:** Order status is "Paid", gatewayRef is stored, cart is cleared

## 4. Core Order Management

### ID: TC-ORD-001
**Title:** Order Detail Page Access
**Pre-conditions:** User has completed an order, order exists in localStorage app.orders
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to /orders/{orderId} route | URL is /orders/{orderId} | | | |
| 2 | Verify order details are displayed | Order information is displayed: order ID, status, items, totals, shipping info | | | |
**Post-conditions:** Order detail page is displayed

### ID: TC-ORD-002
**Title:** Order Status Display
**Pre-conditions:** User is on order detail page, order has status "Paid"
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate status timeline section | Status timeline shows: "Pending", "Paid", "Fulfilled", "Delivered" | | | |
| 2 | Verify status steps are displayed | Current status "Paid" is highlighted (green/bold) | | | |
**Post-conditions:** Status timeline displays correctly with active status highlighted

## 5. Basic Navigation

### ID: TC-NAV-001
**Title:** Navbar Search Input
**Pre-conditions:** User is on any page, navbar is visible
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate search input in navbar | Search input is visible | | | |
| 2 | Verify input is present | Placeholder text "Search books…" is displayed | | | |
| 3 | Verify placeholder text | Input is accessible | | | |
**Post-conditions:** Search input is available in navbar

### ID: TC-NAV-002
**Title:** Navbar Search
**Pre-conditions:** User has entered search text in navbar search field
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter text in search field | Text entered successfully | | | |
| 2 | Press Enter key | User navigated to catalog page with search results | | | |
| 3 | Verify search functionality | Search results match the entered text | | | |
**Post-conditions:** Search functionality works on catalog page

