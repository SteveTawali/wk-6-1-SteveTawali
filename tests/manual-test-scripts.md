# Phase 1: Early Manual Test Scripts (Priority 1)

## 1. Core Book Catalog & Cart

### ID: TC-CAT-000
**Title:** Search Books by Title
**Pre-conditions:** User is on catalog page, Books data is loaded
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click on search input field | Search input field is focused | | |Pass |
| 2 | Type a known book title/description/author | Matching books are displayed 
| 3 | Wait for results to load | Search is case-insensitive, results update in real-time 
| 1 | Click on search input field | Search input field is focused | | | |
| 2 | Type a known book title/description/author | Matching books are displayed | | | |
| 3 | Wait for results to load | Search is case-insensitive, results update in real-time | | | |


### ID: TC-CART-001
**Title:** Add Book to Cart
**Pre-conditions:** User is viewing a book, Cart is empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Buy Now" button on BookCard | Book added to cart | | | |
| 2 | Observe cart counter update | Cart counter increments | | | |
| 3 | Navigate to cart page | Book visible in cart with correct price | | | |


### ID: TC-CART-002
**Title:** Update Cart Quantity
**Pre-conditions:** User has items in cart, user is on /cart page
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate quantity input field for a cart item | Quantity input field is visible | | | |
| 2 | Change quantity value (e.g., to 2 or 3) | Quantity input shows updated value | | | |
| 3 | Observe the subtotal calculation | Line item price = book.price × quantity, subtotal recalculates correctly | | | |


### ID: TC-CART-003
**Title:** Remove Book from Cart
**Pre-conditions:** Book exists in cart
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to cart page | Cart page loads with items | | | |
| 2 | Click "Remove" button | Book removed from cart | | | |
| 3 | Observe cart update | Subtotal updates, empty cart message if last item | | | |


### ID: TC-CART-006
**Title:** Empty Cart State
**Pre-conditions:** Cart is empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Ensure cart empty | Cart shows 0 items | | | |
| 2 | Navigate to cart page | "Your cart is empty" message shown | | | |
| 3 | Verify continue link | "Continue shopping" link present, link navigates to /catalog | | | |


## 2. Essential Checkout Flow

### ID: TC-CHK-001
**Title:** Checkout Wizard Has 4 Steps
**Pre-conditions:** User navigates to /checkout route, cart has items
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to /checkout route | Checkout page loads | | | |
| 2 | Observe step indicators in the page | Step indicators show: "Shipping", "Review", "Payment", "Confirmation" | | | |
| 3 | Verify step labels and active step highlighting | First step "Shipping" is highlighted/bold | | | |


### ID: TC-CHK-002
**Title:** Shipping Form - All Fields Required
**Pre-conditions:** User is on checkout step 1 (Shipping), form is empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Try to click "Next" button without filling any fields | Error message displayed: "Please fill out all required fields" | | | |
| 2 | Observe error message | Form does not proceed to next step | | | |

### ID: TC-CHK-004
**Title:** Shipping Form - Valid Submission
**Pre-conditions:** User is on checkout step 1 (Shipping), form fields are empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Fill all required fields: fullName, email, address, city, country, postalCode | All fields populated correctly | | | |
| 2 | Click "Next" button | Form submits successfully | | | |
| 3 | Observe step change | Step indicator shows "Review" as active, form data is preserved | | | |

### ID: TC-CHK-008
**Title:** Review Step - Display Cart Items
**Pre-conditions:** User completed shipping step, user is on Review step (step 2)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Verify all cart items are listed | All cart items are displayed with book title | | | |
| 2 | Verify quantities are displayed correctly | Quantities shown (e.g., "Qty 2") | | | |
| 3 | Verify prices are displayed correctly | Line item price (book.price × quantity), formatted currency | | | |


## 3. Basic Payment Integration

### ID: TC-PAY-001
**Title:** Paystack Initialization
**Pre-conditions:** User clicks "Pay Now" on checkout step 3, cart has items, shipping info is complete
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Pay Now" button on checkout step 3 | Paystack payment interface opens (popup or iframe) | | | |
| 2 | Observe Paystack popup/modal | Payment form is visible | | | |
| 3 | Verify payment form is displayed | Order is created with status "Pending" | | | |


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

## 4. Core Order Management

### ID: TC-ORD-001
**Title:** Order Detail Page Access
**Pre-conditions:** User has completed an order, order exists in localStorage app.orders
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to /orders/{orderId} route | URL is /orders/{orderId} | | | |
| 2 | Verify order details are displayed | Order information is displayed: order ID, status, items, totals, shipping info | | | |


### ID: TC-ORD-002
**Title:** Order Status Display
**Pre-conditions:** User is on order detail page, order has status "Paid"
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate status timeline section | Status timeline shows: "Pending", "Paid", "Fulfilled", "Delivered" | | | |
| 2 | Verify status steps are displayed | Current status "Paid" is highlighted (green/bold) | | | |

## 5. Basic Navigation

### ID: TC-NAV-001
**Title:** Navbar Search Input
**Pre-conditions:** User is on any page, navbar is visible
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate search input in navbar | Search input is visible | | | |
| 2 | Verify input is present | Placeholder text "Search books…" is displayed | | | |
| 3 | Verify placeholder text | Input is accessible | | | |


### ID: TC-NAV-002
**Title:** Navbar Search
**Pre-conditions:** User has entered search text in navbar search field
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter text in search field | Text entered successfully | | | |
| 2 | Press Enter key | User navigated to catalog page with search results | | | |
| 3 | Verify search functionality | Search results match the entered text | | | |

# Phase 2: Advanced Functional Test Scripts

## 1. Advanced Cart Features

### ID: TC-CART-004
**Title:** Quantity Cannot Be Less Than 1
**Pre-conditions:** User has items in cart, user is on /cart page
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Locate quantity input field | Quantity input field visible and editable | | | |
| 2 | Try to set quantity to 0 | Quantity reverts to 1 or shows validation error | | | |
| 3 | Try to set quantity to -1 | Quantity reverts to 1 or shows validation error | | | |
| 4 | Verify minimum enforcement | Cannot set quantity below 1 | | | |

### ID: TC-CART-005
**Title:** Calculate Subtotal Correctly
**Pre-conditions:** User has multiple items in cart with different quantities, user is on /cart page
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Add 2 different books to cart | Both books added successfully | | | |
| 2 | Set quantity to 2 for first book | First book quantity updated to 2 | | | |
| 3 | Set quantity to 3 for second book | Second book quantity updated to 3 | | | |
| 4 | Navigate to cart page | Cart displays both items with quantities | | | |
| 5 | Verify subtotal calculation | Subtotal = (book1.price × 2) + (book2.price × 3) | | | |
| 6 | Check currency formatting | Amount formatted with correct currency symbol | | | |

### ID: TC-CART-007
**Title:** Cart Persistence Across Refresh
**Pre-conditions:** User has items in cart, user is on any page
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Add multiple items to cart | Cart populated with items | | | |
| 2 | Note cart contents and quantities | Current cart state recorded | | | |
| 3 | Refresh the browser page | Page reloads completely | | | |
| 4 | Navigate to cart page | Cart page loads with previous items | | | |
| 5 | Verify items are still present | All items and quantities preserved | | | |
| 6 | Check localStorage | app.cart data persists after refresh | | | |

### ID: TC-CART-008
**Title:** Cart Count Badge Updates
**Pre-conditions:** User is on any page, cart may have items
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Observe initial cart badge | Badge shows current item count | | | |
| 2 | Add item to cart from catalog | Cart badge updates immediately | | | |
| 3 | Verify badge shows total count | Count = sum of all item quantities | | | |
| 4 | Add another item | Badge increments correctly | | | |
| 5 | Remove an item | Badge decrements correctly | | | |
| 6 | Check screen reader | Updates announced accessibly | | | |

### ID: TC-CART-009
**Title:** Proceed to Checkout Button
**Pre-conditions:** User has items in cart, user is on /cart page
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to cart with items | Cart page loads with items | | | |
| 2 | Locate "Proceed to Checkout" button | Button visible and enabled | | | |
| 3 | Click the button | User redirected to checkout page | | | |
| 4 | Verify URL | URL changes to /checkout | | | |
| 5 | Confirm checkout step | Shipping step active | | | |

## 2. Enhanced Checkout Validation

### ID: TC-CHK-003
**Title:** Shipping Form - Email Validation
**Pre-conditions:** User is on checkout step 1 (Shipping)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Fill all shipping fields except email | All fields populated except email | | | |
| 2 | Enter invalid email: "invalid-email" | Email field shows validation error | | | |
| 3 | Click "Next" button | Form does not proceed to next step | | | |
| 4 | Verify error message | Specific email validation error displayed | | | |
| 5 | Test other invalid formats | Various invalid emails rejected | | | |

### ID: TC-CHK-005
**Title:** Shipping Form - Postal Code Format Validation
**Pre-conditions:** User is on checkout step 1 (Shipping)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Fill all required fields | All fields populated correctly | | | |
| 2 | Enter invalid postal code: "ABC123" | Postal code field accepts input | | | |
| 3 | Click "Next" button | Form validation prevents submission | | | |
| 4 | Observe validation behavior | Specific postal code format error displayed | | | |
| 5 | Test other invalid formats | "1234", "123456789" also rejected | | | |

### ID: TC-CHK-006
**Title:** City Field Should Reject Numeric Values
**Pre-conditions:** User is on checkout step 1 (Shipping)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Fill all required fields | All fields populated | | | |
| 2 | Enter numeric value: "12345" in City field | City field accepts input | | | |
| 3 | Click "Next" button | Form validation prevents submission | | | |
| 4 | Observe validation error | "City should contain only letters" error shown | | | |
| 5 | Test mixed value: "City123" | Also rejected with validation error | | | |

### ID: TC-CHK-007
**Title:** Country Field Should Reject Numeric Values
**Pre-conditions:** User is on checkout step 1 (Shipping)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Fill all required fields | All fields populated | | | |
| 2 | Enter numeric value: "123" in Country field | Country field accepts input | | | |
| 3 | Click "Next" button | Form validation prevents submission | | | |
| 4 | Observe validation error | "Country should contain only letters" error shown | | | |
| 5 | Test mixed value: "Country456" | Also rejected with validation error | | | |

### ID: TC-CHK-009
**Title:** Review Step - Back Button
**Pre-conditions:** User is on Review step (step 2), shipping form was filled
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Complete shipping step successfully | User reaches Review step | | | |
| 2 | Verify on Review step | Step indicator shows "Review" as active | | | |
| 3 | Click "Back" button | User returns to Shipping step | | | |
| 4 | Verify form data preserved | All previously entered fields retain values | | | |
| 5 | Check step indicator | "Shipping" step active again | | | |

### ID: TC-CHK-010
**Title:** Payment Step - Display Payment Info
**Pre-conditions:** User is on Payment step (step 3)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to Payment step (step 3) | Payment step loads | | | |
| 2 | Verify payment instructions | "You will be redirected to complete your payment securely" displayed | | | |
| 3 | Locate "Pay Now" button | Button visible and enabled | | | |
| 4 | Verify order summary | Cart items and totals displayed | | | |

### ID: TC-CHK-011
**Title:** Payment Step - Back Button
**Pre-conditions:** User is on Payment step (step 3)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to Payment step (step 3) | Payment step active | | | |
| 2 | Click "Back" button | User returns to Review step | | | |
| 3 | Verify step change | Step indicator shows "Review" as active | | | |
| 4 | Confirm URL | Remains on /checkout route | | | |
| 5 | Verify data intact | All previous data preserved | | | |

### ID: TC-CHK-012
**Title:** Payment Step - Disabled When Cart Empty
**Pre-conditions:** Cart is empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Ensure cart is empty | Cart shows 0 items | | | |
| 2 | Navigate to /checkout route | Checkout page loads | | | |
| 3 | Attempt to proceed through steps | "Next" button disabled on Shipping step | | | |
| 4 | Verify checkout prevention | Cannot progress through checkout with empty cart | | | |

### ID: TC-CHK-013
**Title:** Confirmation Step - Success Message
**Pre-conditions:** Payment completed successfully, order was created
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Complete payment flow successfully | Payment processed | | | |
| 2 | Observe confirmation step | Confirmation step loads | | | |
| 3 | Verify success message | "Payment successful" displayed | | | |
| 4 | Check redirect message | "Preparing your confirmation… Redirecting to order details" shown | | | |
| 5 | Wait for redirect | Automatically redirected to order details page | | | |

## 3. Payment Edge Cases

### ID: TC-PAY-003
**Title:** Order Creation Before Payment
**Pre-conditions:** User initiates payment, cart has items
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Pay Now" button | Payment process initiates | | | |
| 2 | Open browser DevTools | Developer tools open | | | |
| 3 | Check localStorage for app.orders | Order object created in localStorage | | | |
| 4 | Verify order details | Order contains: id, status="Pending", items, shipping, totals, createdAt | | | |
| 5 | Confirm before payment | Order exists before payment completion | | | |

### ID: TC-PAY-004
**Title:** Order Status Update on Success
**Pre-conditions:** Payment is successful, order exists with status "Pending"
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Complete successful payment | Payment processed successfully | | | |
| 2 | Check localStorage app.orders | Order status updated to "Paid" | | | |
| 3 | Verify gateway reference | gatewayRef field added to order object | | | |
| 4 | Confirm order update | Order object updated in app.orders | | | |
| 5 | Check all order fields | All order data preserved and updated | | | |

### ID: TC-PAY-005
**Title:** Payment Cancellation
**Pre-conditions:** Paystack modal is open, user can cancel
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Open Paystack payment modal | Payment interface displayed | | | |
| 2 | Close modal without completing payment | Modal closes without payment | | | |
| 3 | Observe error message | "Payment was cancelled. You can retry." displayed | | | |
| 4 | Check order status | Order status remains "Pending" | | | |
| 5 | Verify retry capability | User can attempt payment again | | | |

### ID: TC-PAY-006
**Title:** Payment Error Handling
**Pre-conditions:** Payment fails (simulated or actual failure)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Simulate payment failure | Payment process fails | | | |
| 2 | Observe error message | "Payment failed to start. Please try again." displayed | | | |
| 3 | Check order status | Order status remains "Pending" | | | |
| 4 | Verify error display | Error message clearly visible to user | | | |
| 5 | Confirm retry option | User can attempt payment again | | | |

### ID: TC-PAY-007
**Title:** Cart Cleared After Successful Payment
**Pre-conditions:** Payment is successful, cart has items
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Complete successful payment | Payment processed successfully | | | |
| 2 | Check cart contents | Cart is empty | | | |
| 3 | Verify navbar cart badge | Badge shows count "0" | | | |
| 4 | Navigate to cart page | Empty cart state displayed | | | |
| 5 | Confirm localStorage | app.cart is empty | | | |

### ID: TC-PAY-008
**Title:** Loading State During Payment
**Pre-conditions:** User clicks "Pay Now" button
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Pay Now" button | Payment process initiates | | | |
| 2 | Observe button state | Button text changes to "Processing…" | | | |
| 3 | Verify button disabled | Button not clickable during processing | | | |
| 4 | Check loading indicator | Loading state clearly visible | | | |
| 5 | Confirm after completion | Button returns to normal state after process | | | |

## 4. Comprehensive Order Management

### ID: TC-ORD-003
**Title:** Order Items Display
**Pre-conditions:** User is on order detail page, order has multiple items
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to order detail page | Order page loads | | | |
| 2 | Verify all order items listed | All purchased items displayed | | | |
| 3 | Check quantities | Quantities shown correctly (e.g., "Qty 2") | | | |
| 4 | Verify prices | Line item prices correct (book.price × quantity) | | | |
| 5 | Check images | Book images displayed with alt text | | | |
| 6 | Verify alt text | Alt text includes title and author | | | |

### ID: TC-ORD-004
**Title:** Order Totals Display
**Pre-conditions:** User is on order detail page, order has totals
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to order detail page | Order page loads | | | |
| 2 | Locate subtotal | Subtotal amount displayed | | | |
| 3 | Locate shipping fee | Shipping fee amount displayed | | | |
| 4 | Locate tax | Tax amount displayed | | | |
| 5 | Locate total | Total amount displayed | | | |
| 6 | Verify calculations | Totals match checkout calculations | | | |
| 7 | Check currency format | All amounts formatted with currency symbol | | | |

### ID: TC-ORD-005
**Title:** Order Not Found Handling
**Pre-conditions:** User navigates to non-existent order ID
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to /orders/invalid-id | Error page loads | | | |
| 2 | Observe error message | "We couldn't find this order" displayed | | | |
| 3 | Verify link to catalog | "Go back to catalog" link present | | | |
| 4 | Click catalog link | Redirected to /catalog page | | | |
| 5 | Check navigation | Smooth transition to catalog | | | |

### ID: TC-ORD-006
**Title:** Order Persistence
**Pre-conditions:** Order is created, order exists in localStorage
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Create an order (complete checkout) | Order successfully created | | | |
| 2 | Note order ID | Order ID recorded for reference | | | |
| 3 | Refresh browser page | Page completely reloads | | | |
| 4 | Navigate to order detail page using order ID | Order detail page displays correctly | | | |
| 5 | Verify order data | All order information preserved | | | |
| 6 | Check localStorage | app.orders contains order data after refresh | | | |

# Phase 3: Non-Functional Test Scripts

## 1. Performance Testing

### ID: TC-PERF-001
**Title:** Image Loading Performance
**Pre-conditions:** User is on /catalog page
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Open Network tab in DevTools | Network monitoring active | | | |
| 2 | Scroll through catalog | Images load lazily (loading="lazy" attribute) | | | |
| 3 | Observe image loading behavior | Images load as user scrolls | | | |
| 4 | Verify lazy loading works | No layout shift (CLS) | | | |
| 5 | Measure image load times | Images have explicit dimensions | | | |

### ID: TC-PERF-002
**Title:** Network Throttling - Slow 3G
**Pre-conditions:** Network throttled to Slow 3G in DevTools
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to /catalog | Page loads with loading states shown | | | |
| 2 | Measure page load time | App remains functional on slow network | | | |
| 3 | Add item to cart | User can complete actions | | | |
| 4 | Navigate to checkout | Acceptable performance degradation | | | |
| 5 | Observe user experience | Loading states visible during interactions | | | |

### ID: TC-PERF-003
**Title:** Network Throttling - Fast 3G
**Pre-conditions:** Network throttled to Fast 3G in DevTools
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate through all pages | All pages load quickly | | | |
| 2 | Complete checkout flow | Checkout flow smooth | | | |
| 3 | Measure performance metrics | Performance acceptable on Fast 3G | | | |
| 4 | Verify user interactions | Buttons and forms respond promptly | | | |

## 2. Accessibility Testing

### ID: TC-A11Y-001
**Title:** Keyboard Navigation
**Pre-conditions:** User navigates with keyboard only (no mouse)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Press Tab key to navigate through interactive elements | Focus moves to first element | | | |
| 2 | Verify focus is visible on each element | Focus ring visible on each element | | | |
| 3 | Verify all elements are reachable | All interactive elements are reachable via Tab key | | | |
| 4 | Verify focus order is logical | Focus order is logical, Enter/Space activate elements | | | |

### ID: TC-A11Y-002
**Title:** Screen Reader Compatibility
**Pre-conditions:** Screen reader enabled, Book catalog loaded
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate through page | All content readable | | | |
| 2 | Read book information | Book details announced correctly | | | |
| 3 | Use cart functions | Cart actions announced to screen reader | | | |
| 4 | Test checkout flow | All checkout steps accessible via screen reader | | | |

### ID: TC-A11Y-003
**Title:** Image Alt Text
**Pre-conditions:** User is on catalog page, book images are displayed
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Inspect book image elements | All images have alt text attribute | | | |
| 2 | Verify alt text is present | Alt text includes book title and author | | | |
| 3 | Verify alt text includes title and author | Format: "{title} by {author}" | | | |
| 4 | Test with screen reader | Alt text read correctly by screen reader | | | |

## 3. Cross-Browser Compatibility

### ID: TC-BROWSER-001
**Title:** Chrome Compatibility
**Pre-conditions:** Chrome browser (latest 2 versions), app deployed
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Open app in Chrome | App loads successfully | | | |
| 2 | Test all major features: catalog, cart, checkout, payment | All features work correctly in Chrome | | | |
| 3 | Verify layout and functionality | Layout correct, functionality intact | | | |
| 4 | Check console for errors | No console errors | | | |

### ID: TC-BROWSER-002
**Title:** Firefox Compatibility
**Pre-conditions:** Firefox browser (latest 2 versions)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Open app in Firefox | App loads successfully | | | |
| 2 | Test all major features | All features work correctly in Firefox | | | |
| 3 | Verify layout and functionality | No compatibility issues, layout correct | | | |
| 4 | Check console for errors | No console errors | | | |

### ID: TC-BROWSER-003
**Title:** Safari Compatibility
**Pre-conditions:** Safari browser (latest 2 versions)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Open app in Safari | App loads successfully | | | |
| 2 | Test all major features | All features work correctly in Safari | | | |
| 3 | Verify layout and functionality | No Safari-specific bugs, layout correct | | | |
| 4 | Check for Safari-specific issues | No unique compatibility problems | | | |

### ID: TC-BROWSER-004
**Title:** Edge Compatibility
**Pre-conditions:** Edge browser (latest 2 versions)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Open app in Edge | App loads successfully | | | |
| 2 | Test all major features | All features work correctly in Edge | | | |
| 3 | Verify layout and functionality | No compatibility issues | | | |
| 4 | Check performance | Performance comparable to Chrome | | | |

## 4. Device & Responsive Testing

### ID: TC-DEVICE-001
**Title:** Mobile Responsiveness - iPhone (375×667)
**Pre-conditions:** Browser viewport set to 375×667 (iPhone)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Resize browser to 375×667 | Viewport resized correctly | | | |
| 2 | Navigate through all pages | Layout adapts to mobile | | | |
| 3 | Test all interactions (tap, scroll) | All features accessible | | | |
| 4 | Verify layout is responsive | Text readable, touch targets adequate size | | | |
| 5 | Verify text is readable | Responsive design works | | | |

### ID: TC-DEVICE-002
**Title:** Tablet Responsiveness - iPad (768×1024)
**Pre-conditions:** Browser viewport set to 768×1024 (iPad)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Resize browser to 768×1024 | Viewport resized correctly | | | |
| 2 | Navigate through all pages | Layout optimized for tablet | | | |
| 3 | Test all interactions | All features work | | | |
| 4 | Verify layout is appropriate for tablet | Appropriate spacing and sizing | | | |
| 5 | Test orientation changes | Layout works in both portrait and landscape | | | |

# Phase 4: Integration & E2E Test Scripts

## 1. End-to-End Scenarios

### ID: TC-E2E-001
**Title:** Complete User Journey - Purchase Flow
**Pre-conditions:** User starts on catalog page, cart is empty
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Browse catalog at /catalog | Books displayed | | | |
| 2 | Search for a book | Search results shown | | | |
| 3 | Add book to cart (click "Buy Now") | Cart counter updates | | | |
| 4 | Navigate to /cart | Cart page loads | | | |
| 5 | Update quantity | Quantity changes | | | |
| 6 | Click "Proceed to Checkout" | Checkout starts | | | |
| 7 | Fill shipping form at /checkout | Form submitted | | | |
| 8 | Review order | Order details shown | | | |
| 9 | Complete payment | Payment successful | | | |
| 10 | Verify redirect to order details | Order created with status "Paid" | | | |
| 11 | Verify order status is "Paid" | Cart cleared, navigation smooth | | | |

### ID: TC-E2E-002
**Title:** Multiple Simultaneous Operations
**Pre-conditions:** User has items in cart
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Open app in two browser tabs | Both tabs load successfully | | | |
| 2 | In tab 1: Add item to cart | Cart updates in tab 1 | | | |
| 3 | In tab 2: Remove item from cart | Cart updates in tab 2 | | | |
| 4 | Refresh both tabs | Both tabs show same cart state after refresh | | | |
| 5 | Verify cart state is consistent | Cart state synchronized via localStorage | | | |
| 6 | Check localStorage | app.cart synchronized correctly | | | |

### ID: TC-E2E-003
**Title:** State Persistence Across Browser Sessions
**Pre-conditions:** User has items in cart and completed orders
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Add items to cart | Cart populated with items | | | |
| 2 | Complete an order | Order successfully created | | | |
| 3 | Close browser completely | Browser session ended | | | |
| 4 | Reopen browser and navigate to app | App loads fresh session | | | |
| 5 | Verify cart items persist | Cart still contains previous items | | | |
| 6 | Navigate to order history | Previous orders accessible | | | |
| 7 | Confirm localStorage data | app.cart and app.orders persisted | | | |

## 2. Edge Cases & Error Handling

### ID: TC-EDGE-001
**Title:** Checkout with Empty Cart
**Pre-conditions:** Cart is empty, user navigates to /checkout
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Ensure cart is empty (0 items) | Cart shows 0 items | | | |
| 2 | Navigate to /checkout route | Checkout page loads | | | |
| 3 | Attempt to proceed through checkout steps | All "Next" buttons are disabled | | | |
| 4 | Observe button states and error messages | User sees appropriate message or empty state | | | |

### ID: TC-EDGE-002
**Title:** Invalid Email Format - Missing @ Symbol
**Pre-conditions:** User is on checkout step 1 (Shipping form)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter invalid email: "userexample.com" (missing @) | Email field accepts input | | | |
| 2 | Attempt to submit form | Browser shows validation error | | | |
| 3 | Observe validation behavior | Form does not submit | | | |
| 4 | Verify error message | Specific email format error displayed | | | |

### ID: TC-EDGE-003
**Title:** Very Long Input Strings
**Pre-conditions:** User is on checkout step 1 (Shipping form)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter very long string (1000+ characters) in fullName field | Field accepts long input | | | |
| 2 | Enter very long string in address field | Field accepts long input | | | |
| 3 | Attempt to submit form | Form accepts long inputs, UI does not break | | | |
| 4 | Observe form behavior and UI layout | Text may wrap or truncate appropriately | | | |

### ID: TC-EDGE-004
**Title:** Special Characters in Search
**Pre-conditions:** User is on /catalog page, search input is visible
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter search query with special characters: "!@#$%^&*()" | Search executes | | | |
| 2 | Observe search behavior and results | May return no results or handle gracefully | | | |
| 3 | Test SQL injection patterns | No errors or security issues | | | |
| 4 | Verify search functionality | Search remains stable with special chars | | | |

### ID: TC-EDGE-005
**Title:** Whitespace-Only Inputs in Forms
**Pre-conditions:** User is on checkout step 1 (Shipping form)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter only spaces "   " in fullName field | Field accepts whitespace | | | |
| 2 | Enter only spaces in address field | Field accepts whitespace | | | |
| 3 | Attempt to submit form | Form validation may pass or fail appropriately | | | |
| 4 | Observe validation behavior | Consistent validation handling | | | |

### ID: TC-EDGE-006
**Title:** Network Failure During Payment
**Pre-conditions:** User is on checkout step 3 (Payment), internet connection available
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Click "Pay Now" button | Payment process initiates | | | |
| 2 | Simulate network failure (disable network in DevTools) | Network connection lost | | | |
| 3 | Observe error handling | "Payment failed to start. Please try again." displayed | | | |
| 4 | Re-enable network | Network connection restored | | | |
| 5 | Attempt payment again | Payment can be retried successfully | | | |

## 3. Boundary Value Testing

### ID: TC-BOUND-001
**Title:** Maximum Quantity Value
**Pre-conditions:** User has item in cart
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Navigate to cart page | Cart page loads | | | |
| 2 | Enter very large quantity: More than 10 characters | Quantity accepted by input field | | | |
| 3 | Observe calculation and UI behavior | Subtotal calculated correctly (price × 999999) | | | |
| 4 | Verify subtotal calculation | UI displays correctly, no overflow errors | | | |

### ID: TC-BOUND-002
**Title:** Very Large Cart Totals
**Pre-conditions:** User adds multiple high-priced books with large quantities
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Add expensive books with quantity 100 each | Multiple high-value items in cart | | | |
| 2 | Navigate to cart | Cart displays all items | | | |
| 3 | Verify subtotal calculation | All totals calculated correctly | | | |
| 4 | Proceed to checkout | No rounding errors, currency formatting correct | | | |
| 5 | Verify totals calculation | Totals display properly | | | |

### ID: TC-BOUND-003
**Title:** Very Long Text Inputs (Boundary)
**Pre-conditions:** User is on checkout step 1 (Shipping form)
| Step | Action | Expected Result | Actual Result | Screenshot | Status |
|------|--------|-----------------|----------------|------------|--------|
| 1 | Enter 5000 character string in fullName | Field accepts extremely long input | | | |
| 2 | Enter 5000 character string in address | Field accepts extremely long input | | | |
| 3 | Submit form | Long text accepted and stored | | | |
| 4 | Verify data is stored correctly | Order created successfully | | | |
