# Early Manual Test Scripts (Priority 1)

## 1. Core Book Catalog & Cart

### ID: TC-CAT-000
**Title:** Search Books by Title
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click on search input field | Search input field is focused | | | |
| 2 | Type a known book title/description/author | Matching books are displayed 
| 3 | Wait for results to load | Search is case-insensitive, results update in real-time 

### ID: TC-CART-001
**Title:** Add Book to Cart
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Buy Now" button on BookCard | Book added to cart | | | |
| 2 | Observe cart counter update | Cart counter increments | | | |
| 3 | Navigate to cart page | Book visible in cart with correct price | | | |

### ID: TC-CART-002
**Title:** Update Cart Quantity
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate quantity input field for a cart item | Quantity input field is visible | | | |
| 2 | Change quantity value (e.g., to 2 or 3) | Quantity input shows updated value | | | |
| 3 | Observe the subtotal calculation | Line item price = book.price × quantity, subtotal recalculates correctly | | | |

### ID: TC-CART-003
**Title:** Remove Book from Cart
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to cart page | Cart page loads with items | | | |
| 2 | Click "Remove" button | Book removed from cart | | | |
| 3 | Observe cart update | Subtotal updates, empty cart message if last item | | | |

### ID: TC-CART-006
**Title:** Empty Cart State
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Ensure cart empty | Cart shows 0 items | | | |
| 2 | Navigate to cart page | "Your cart is empty" message shown | | | |
| 3 | Verify continue link | "Continue shopping" link present | | | |

## 2. Essential Checkout Flow

### ID: TC-CHK-001
**Title:** Checkout Wizard Has 4 Steps
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to /checkout route | Checkout page loads | | | |
| 2 | Observe step indicators in the page | Step indicators show: "Shipping", "Review", "Payment", "Confirmation" | | | |
| 3 | Verify step labels and active step highlighting | First step "Shipping" is highlighted/bold | | | |

### ID: TC-CHK-002
**Title:** Shipping Form - All Fields Required
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Try to click "Next" button without filling any fields | Error message displayed: "Please fill out all required fields" | | | |
| 2 | Observe error message | Form does not proceed to next step | | | |

### ID: TC-CHK-004
**Title:** Shipping Form - Valid Submission
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Fill all required fields: fullName, email, address, city, country, postalCode | All fields populated correctly | | | |
| 2 | Click "Next" button | Form submits successfully | | | |
| 3 | Observe step change | Step indicator shows "Review" as active, form data is preserved | | | |

### ID: TC-CHK-008
**Title:** Review Step - Display Cart Items
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Verify all cart items are listed | All cart items are displayed | | | |
| 2 | Verify quantities are displayed correctly | Quantities shown (e.g., "Qty 2") | | | |
| 3 | Verify prices are displayed correctly | Line item price (formatted currency) displayed | | | |

## 3. Basic Payment Integration

### ID: TC-PAY-001
**Title:** Paystack Initialization
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Pay Now" button on checkout step 3 | Paystack payment interface opens (popup or iframe) | | | |
| 2 | Observe Paystack popup/modal | Payment form is visible | | | |
| 3 | Verify payment form is displayed | Order is created with status "Pending" | | | |

### ID: TC-PAY-002
**Title:** Payment with Valid Test Card
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter test card number: 4084084084084081 | Card number accepted | | | |
| 2 | Enter CVV: 123 | CVV accepted | | | |
| 3 | Enter future expiry date (e.g., 12/30) | Expiry date accepted | | | |
| 4 | Complete payment | Payment succeeds | | | |
| 5 | Verify order status update | Order status changes to "Paid", user is redirected to confirmation step | | | |

## 4. Core Order Management

### ID: TC-ORD-001
**Title:** Order Detail Page Access
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to /orders/{orderId} route | URL is /orders/{orderId} | | | |
| 2 | Verify order details are displayed | Order information is displayed: order ID, status, items, totals, shipping info | | | |

### ID: TC-ORD-002
**Title:** Order Status Display
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate status timeline section | Status timeline shows: "Pending", "Paid", "Fulfilled", "Delivered" | | | |
| 2 | Verify status steps are displayed | Current status "Paid" is highlighted (green/bold) | | | |

## 5. Basic Navigation

### ID: TC-NAV-001
**Title:** Navbar Search Input
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate search input in navbar | Search input is visible | | | |
| 2 | Verify input is present | Placeholder text "Search books…" is displayed | | | |
| 3 | Verify placeholder text | Input is accessible | | | |

### ID: TC-NAV-002
**Title:** Navbar Search
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter text in search field | Text entered successfully | | | |
| 2 | Press Enter key | User is navigated to catalog page with search results | | | |
| 3 | Verify search functionality | Search results match the entered text | | | |
| 4 | Check URL | URL includes search parameters | | | |

---

## 6. Critical Negatives (Early)

### ID: TC-CHK-003
**Title:** Shipping Form - Email Validation (Invalid Format)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | At /checkout, keep other fields valid | — | | | |
| 2 | Enter invalid email "invalid-email" | Email considered invalid | | | |
| 3 | Click "Next" | Form blocked; email error visible | | | |

### ID: TC-PAY-005
**Title:** Payment Cancellation Path
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | On Payment step, click "Pay Now" | Paystack opens | | | |
| 2 | Cancel/close payment | Cancellation message shown | | | |
| 3 | Check order | Status remains Pending or not created (per impl) | | | |

## 7. Accessibility Quick Smoke

### ID: TC-A11Y-001
**Title:** Keyboard Navigation (Header, Cards, Primary Buttons)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Tab/Shift+Tab across header/links | Focus ring visible; logical order | | | |
| 2 | Tab through catalog cards/actions | Focusable; Enter/Space activates | | | |
| 3 | Tab to primary buttons (Buy Now/Next) | Buttons operable via keyboard | | | |

## 8. Performance Spot Smoke

### ID: TC-PERF-002
**Title:** Slow 3G Sanity (Catalog)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Throttle to Slow 3G in DevTools | App usable; no crashes | | | |
| 2 | Load /catalog and scroll | Loading states; lazy images; no severe CLS | | | |

### ID: TC-PERF-003
**Title:** Fast 3G Sanity (Catalog→Cart→Checkout)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Throttle to Fast 3G | Pages load acceptably | | | |
| 2 | Navigate catalog→cart→checkout | Responsive interactions; buttons show loading | | | |


## 9. Cross-Browser Mini Smoke

### ID: TC-BROWSER-FF-SF
**Title:** Firefox & Safari Smoke
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Open app (Firefox, Safari) | Loads without console errors | | | |
| 2 | Add 1 item to cart | Badge increments; item visible in cart | | | |
| 3 | Navigate to checkout | Layout intact; controls usable | | | |
