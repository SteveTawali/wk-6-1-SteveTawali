# Phase 1: Early Manual Test Scripts (Priority 1)

## 1. Core Book Catalog & Cart

### ID: TC-CAT-000
**Title:** Search Books by Title
**Pre-conditions:** User is on catalog page, Books data is loaded

| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Click on search input field<br>2. Type a known book title/description/author<br>3. Wait for results to load | Search input field is focused<br>Matching books are displayed<br>Search is case-insensitive, results update in real-time | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |


### ID: TC-CART-001
**Title:** Add Book to Cart
**Pre-conditions:** User is viewing a book, Cart is empty

| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Click "Buy Now" button on BookCard<br>2. Observe cart counter update<br>3. Navigate to cart page | Book added to cart<br>Cart counter increments<br>Book visible in cart with correct price | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |


### ID: TC-CART-002
**Title:** Update Cart Quantity
**Pre-conditions:** User has items in cart, user is on /cart page
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Locate quantity input field for a cart item<br>2. Change quantity value (e.g., to 2 or 3)<br>3. Observe the subtotal calculation | Quantity input field is visible<br>Quantity input shows updated value<br>Line item price = book.price × quantity, subtotal recalculates correctly | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CART-003
**Title:** Remove Book from Cart
**Pre-conditions:** Book exists in cart
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to cart page<br>2. Click "Remove" button<br>3. Observe cart update | Cart page loads with items<br>Book removed from cart<br>Subtotal updates, empty cart message if last item | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CART-006
**Title:** Empty Cart State
**Pre-conditions:** Cart is empty
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Ensure cart empty<br>2. Navigate to cart page<br>3. Verify continue link | Cart shows 0 items<br>"Your cart is empty" message shown<br>"Continue shopping" link present, link navigates to /catalog | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 2. Essential Checkout Flow

### ID: TC-CHK-001
**Title:** Checkout Wizard Has 4 Steps
**Pre-conditions:** User navigates to /checkout route, cart has items
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to /checkout route<br>2. Observe step indicators in the page<br>3. Verify step labels and active step highlighting | Checkout page loads<br>Step indicators show: "Shipping", "Review", "Payment", "Confirmation"<br>First step "Shipping" is highlighted/bold | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-002
**Title:** Shipping Form - All Fields Required
**Pre-conditions:** User is on checkout step 1 (Shipping), form is empty
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Try to click "Next" button without filling any fields<br>2. Observe error message | Error message displayed: "Please fill out all required fields"<br>Form does not proceed to next step | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-004
**Title:** Shipping Form - Valid Submission
**Pre-conditions:** User is on checkout step 1 (Shipping), form fields are empty
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Fill all required fields: fullName, email, address, city, country, postalCode<br>2. Click "Next" button<br>3. Observe step change | All fields populated correctly<br>Form submits successfully<br>Step indicator shows "Review" as active, form data is preserved | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-008
**Title:** Review Step - Display Cart Items
**Pre-conditions:** User completed shipping step, user is on Review step (step 2)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Verify all cart items are listed<br>2. Verify quantities are displayed correctly<br>3. Verify prices are displayed correctly | All cart items are displayed with book title<br>Quantities shown (e.g., "Qty 2")<br>Line item price (book.price × quantity), formatted currency | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 3. Basic Payment Integration

### ID: TC-PAY-001
**Title:** Paystack Initialization
**Pre-conditions:** User clicks "Pay Now" on checkout step 3, cart has items, shipping info is complete
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Click "Pay Now" button on checkout step 3<br>2. Observe Paystack popup/modal<br>3. Verify payment form is displayed | Paystack payment interface opens (popup or iframe)<br>Payment form is visible<br>Order is created with status "Pending" | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-PAY-002
**Title:** Payment with Valid Test Card
**Pre-conditions:** Paystack modal is open, payment form is displayed
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Enter test card number: 4084084084084081<br>2. Enter CVV: 123<br>3. Enter future expiry date (e.g., 12/30)<br>4. Complete payment<br>5. Verify order status update | Card number accepted<br>CVV accepted<br>Expiry date accepted<br>Payment succeeds<br>Order status changes to "Paid", user is redirected to confirmation step | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 4. Core Order Management

### ID: TC-ORD-001
**Title:** Order Detail Page Access
**Pre-conditions:** User has completed an order, order exists in localStorage app.orders
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to /orders/{orderId} route<br>2. Verify order details are displayed | URL is /orders/{orderId}<br>Order information is displayed: order ID, status, items, totals, shipping info | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-ORD-002
**Title:** Order Status Display
**Pre-conditions:** User is on order detail page, order has status "Paid"
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Locate status timeline section<br>2. Verify status steps are displayed | Status timeline shows: "Pending", "Paid", "Fulfilled", "Delivered"<br>Current status "Paid" is highlighted (green/bold) | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 5. Basic Navigation

### ID: TC-NAV-001
**Title:** Navbar Search Input
**Pre-conditions:** User is on any page, navbar is visible
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Locate search input in navbar<br>2. Verify input is present<br>3. Verify placeholder text | Search input is visible<br>Placeholder text "Search books…" is displayed<br>Input is accessible | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-NAV-002
**Title:** Navbar Search
**Pre-conditions:** User has entered search text in navbar search field
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Enter text in search field<br>2. Press Enter key<br>3. Verify search functionality | Text entered successfully<br>User navigated to catalog page with search results<br>Search results match the entered text | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |# Phase 2: Advanced Functional Test Scripts

## 1. Advanced Cart Features

### ID: TC-CART-004
**Title:** Quantity Cannot Be Less Than 1
**Pre-conditions:** User has items in cart, user is on /cart page
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Locate quantity input field<br>2. Try to set quantity to 0<br>3. Try to set quantity to -1<br>4. Verify minimum enforcement | Quantity input field visible and editable<br>Quantity reverts to 1 or shows validation error<br>Quantity reverts to 1 or shows validation error<br>Cannot set quantity below 1 | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CART-005
**Title:** Calculate Subtotal Correctly
**Pre-conditions:** User has multiple items in cart with different quantities, user is on /cart page
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Add 2 different books to cart<br>2. Set quantity to 2 for first book<br>3. Set quantity to 3 for second book<br>4. Navigate to cart page<br>5. Verify subtotal calculation<br>6. Check currency formatting | Both books added successfully<br>First book quantity updated to 2<br>Second book quantity updated to 3<br>Cart displays both items with quantities<br>Subtotal = (book1.price × 2) + (book2.price × 3)<br>Amount formatted with correct currency symbol | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CART-007
**Title:** Cart Persistence Across Refresh
**Pre-conditions:** User has items in cart, user is on any page
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Add multiple items to cart<br>2. Note cart contents and quantities<br>3. Refresh the browser page<br>4. Navigate to cart page<br>5. Verify items are still present<br>6. Check localStorage | Cart populated with items<br>Current cart state recorded<br>Page reloads completely<br>Cart page loads with previous items<br>All items and quantities preserved<br>app.cart data persists after refresh | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CART-008
**Title:** Cart Count Badge Updates
**Pre-conditions:** User is on any page, cart may have items
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Observe initial cart badge<br>2. Add item to cart from catalog<br>3. Verify badge shows total count<br>4. Add another item<br>5. Remove an item<br>6. Check screen reader | Badge shows current item count<br>Cart badge updates immediately<br>Count = sum of all item quantities<br>Badge increments correctly<br>Badge decrements correctly<br>Updates announced accessibly | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CART-009
**Title:** Proceed to Checkout Button
**Pre-conditions:** User has items in cart, user is on /cart page
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to cart with items<br>2. Locate "Proceed to Checkout" button<br>3. Click the button<br>4. Verify URL<br>5. Confirm checkout step | Cart page loads with items<br>Button visible and enabled<br>User redirected to checkout page<br>URL changes to /checkout<br>Shipping step active | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 2. Enhanced Checkout Validation

### ID: TC-CHK-003
**Title:** Shipping Form - Email Validation
**Pre-conditions:** User is on checkout step 1 (Shipping)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Fill all shipping fields except email<br>2. Enter invalid email: "invalid-email"<br>3. Click "Next" button<br>4. Verify error message<br>5. Test other invalid formats | All fields populated except email<br>Email field shows validation error<br>Form does not proceed to next step<br>Specific email validation error displayed<br>Various invalid emails rejected | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-005
**Title:** Shipping Form - Postal Code Format Validation
**Pre-conditions:** User is on checkout step 1 (Shipping)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Fill all required fields<br>2. Enter invalid postal code: "ABC123"<br>3. Click "Next" button<br>4. Observe validation behavior<br>5. Test other invalid formats | All fields populated correctly<br>Postal code field accepts input<br>Form validation prevents submission<br>Specific postal code format error displayed<br>"1234", "123456789" also rejected | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-006
**Title:** City Field Should Reject Numeric Values
**Pre-conditions:** User is on checkout step 1 (Shipping)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Fill all required fields<br>2. Enter numeric value: "12345" in City field<br>3. Click "Next" button<br>4. Observe validation error<br>5. Test mixed value: "City123" | All fields populated<br>City field accepts input<br>Form validation prevents submission<br>"City should contain only letters" error shown<br>Also rejected with validation error | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-007
**Title:** Country Field Should Reject Numeric Values
**Pre-conditions:** User is on checkout step 1 (Shipping)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Fill all required fields<br>2. Enter numeric value: "123" in Country field<br>3. Click "Next" button<br>4. Observe validation error<br>5. Test mixed value: "Country456" | All fields populated<br>Country field accepts input<br>Form validation prevents submission<br>"Country should contain only letters" error shown<br>Also rejected with validation error | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-009
**Title:** Review Step - Back Button
**Pre-conditions:** User is on Review step (step 2), shipping form was filled
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Complete shipping step successfully<br>2. Verify on Review step<br>3. Click "Back" button<br>4. Verify form data preserved<br>5. Check step indicator | User reaches Review step<br>Step indicator shows "Review" as active<br>User returns to Shipping step<br>All previously entered fields retain values<br>"Shipping" step active again | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-010
**Title:** Payment Step - Display Payment Info
**Pre-conditions:** User is on Payment step (step 3)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to Payment step (step 3)<br>2. Verify payment instructions<br>3. Locate "Pay Now" button<br>4. Verify order summary | Payment step loads<br>"You will be redirected to complete your payment securely" displayed<br>Button visible and enabled<br>Cart items and totals displayed | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-011
**Title:** Payment Step - Back Button
**Pre-conditions:** User is on Payment step (step 3)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to Payment step (step 3)<br>2. Click "Back" button<br>3. Verify step change<br>4. Confirm URL<br>5. Verify data intact | Payment step active<br>User returns to Review step<br>Step indicator shows "Review" as active<br>Remains on /checkout route<br>All previous data preserved | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-012
**Title:** Payment Step - Disabled When Cart Empty
**Pre-conditions:** Cart is empty
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Ensure cart is empty<br>2. Navigate to /checkout route<br>3. Attempt to proceed through steps<br>4. Verify checkout prevention | Cart shows 0 items<br>Checkout page loads<br>"Next" button disabled on Shipping step<br>Cannot progress through checkout with empty cart | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-CHK-013
**Title:** Confirmation Step - Success Message
**Pre-conditions:** Payment completed successfully, order was created
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Complete payment flow successfully<br>2. Observe confirmation step<br>3. Verify success message<br>4. Check redirect message<br>5. Wait for redirect | Payment processed<br>Confirmation step loads<br>"Payment successful" displayed<br>"Preparing your confirmation… Redirecting to order details" shown<br>Automatically redirected to order details page | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 3. Payment Edge Cases

### ID: TC-PAY-003
**Title:** Order Creation Before Payment
**Pre-conditions:** User initiates payment, cart has items
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Click "Pay Now" button<br>2. Open browser DevTools<br>3. Check localStorage for app.orders<br>4. Verify order details<br>5. Confirm before payment | Payment process initiates<br>Developer tools open<br>Order object created in localStorage<br>Order contains: id, status="Pending", items, shipping, totals, createdAt<br>Order exists before payment completion | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-PAY-004
**Title:** Order Status Update on Success
**Pre-conditions:** Payment is successful, order exists with status "Pending"
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Complete successful payment<br>2. Check localStorage app.orders<br>3. Verify gateway reference<br>4. Confirm order update<br>5. Check all order fields | Payment processed successfully<br>Order status updated to "Paid"<br>gatewayRef field added to order object<br>Order object updated in app.orders<br>All order data preserved and updated | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-PAY-005
**Title:** Payment Cancellation
**Pre-conditions:** Paystack modal is open, user can cancel
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Open Paystack payment modal<br>2. Close modal without completing payment<br>3. Observe error message<br>4. Check order status<br>5. Verify retry capability | Payment interface displayed<br>Modal closes without payment<br>"Payment was cancelled. You can retry." displayed<br>Order status remains "Pending"<br>User can attempt payment again | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-PAY-006
**Title:** Payment Error Handling
**Pre-conditions:** Payment fails (simulated or actual failure)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Simulate payment failure<br>2. Observe error message<br>3. Check order status<br>4. Verify error display<br>5. Confirm retry option | Payment process fails<br>"Payment failed to start. Please try again." displayed<br>Order status remains "Pending"<br>Error message clearly visible to user<br>User can attempt payment again | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-PAY-007
**Title:** Cart Cleared After Successful Payment
**Pre-conditions:** Payment is successful, cart has items
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Complete successful payment<br>2. Check cart contents<br>3. Verify navbar cart badge<br>4. Navigate to cart page<br>5. Confirm localStorage | Payment processed successfully<br>Cart is empty<br>Badge shows count "0"<br>Empty cart state displayed<br>app.cart is empty | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-PAY-008
**Title:** Loading State During Payment
**Pre-conditions:** User clicks "Pay Now" button
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Click "Pay Now" button<br>2. Observe button state<br>3. Verify button disabled<br>4. Check loading indicator<br>5. Confirm after completion | Payment process initiates<br>Button text changes to "Processing…"<br>Button not clickable during processing<br>Loading state clearly visible<br>Button returns to normal state after process | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 4. Comprehensive Order Management

### ID: TC-ORD-003
**Title:** Order Items Display
**Pre-conditions:** User is on order detail page, order has multiple items
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to order detail page<br>2. Verify all order items listed<br>3. Check quantities<br>4. Verify prices<br>5. Check images<br>6. Verify alt text | Order page loads<br>All purchased items displayed<br>Quantities shown correctly (e.g., "Qty 2")<br>Line item prices correct (book.price × quantity)<br>Book images displayed with alt text<br>Alt text includes title and author | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-ORD-004
**Title:** Order Totals Display
**Pre-conditions:** User is on order detail page, order has totals
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to order detail page<br>2. Locate subtotal<br>3. Locate shipping fee<br>4. Locate tax<br>5. Locate total<br>6. Verify calculations<br>7. Check currency format | Order page loads<br>Subtotal amount displayed<br>Shipping fee amount displayed<br>Tax amount displayed<br>Total amount displayed<br>Totals match checkout calculations<br>All amounts formatted with currency symbol | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-ORD-005
**Title:** Order Not Found Handling
**Pre-conditions:** User navigates to non-existent order ID
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to /orders/invalid-id<br>2. Observe error message<br>3. Verify link to catalog<br>4. Click catalog link<br>5. Check navigation | Error page loads<br>"We couldn't find this order" displayed<br>"Go back to catalog" link present<br>Redirected to /catalog page<br>Smooth transition to catalog | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-ORD-006
**Title:** Order Persistence
**Pre-conditions:** Order is created, order exists in localStorage
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Create an order (complete checkout)<br>2. Note order ID<br>3. Refresh browser page<br>4. Navigate to order detail page using order ID<br>5. Verify order data<br>6. Check localStorage | Order successfully created<br>Order ID recorded for reference<br>Page completely reloads<br>Order detail page displays correctly<br>All order information preserved<br>app.orders contains order data after refresh | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |# Phase 3: Non-Functional Test Scripts

## 1. Performance Testing

### ID: TC-PERF-001
**Title:** Image Loading Performance
**Pre-conditions:** User is on /catalog page
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Open Network tab in DevTools<br>2. Scroll through catalog<br>3. Observe image loading behavior<br>4. Verify lazy loading works<br>5. Measure image load times | Network monitoring active<br>Images load lazily (loading="lazy" attribute)<br>Images load as user scrolls<br>No layout shift (CLS)<br>Images have explicit dimensions | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-PERF-002
**Title:** Network Throttling - Slow 3G
**Pre-conditions:** Network throttled to Slow 3G in DevTools
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to /catalog<br>2. Measure page load time<br>3. Add item to cart<br>4. Navigate to checkout<br>5. Observe user experience | Page loads with loading states shown<br>App remains functional on slow network<br>User can complete actions<br>Acceptable performance degradation<br>Loading states visible during interactions | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-PERF-003
**Title:** Network Throttling - Fast 3G
**Pre-conditions:** Network throttled to Fast 3G in DevTools
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate through all pages<br>2. Complete checkout flow<br>3. Measure performance metrics<br>4. Verify user interactions | All pages load quickly<br>Checkout flow smooth<br>Performance acceptable on Fast 3G<br>Buttons and forms respond promptly | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 2. Accessibility Testing

### ID: TC-A11Y-001
**Title:** Keyboard Navigation
**Pre-conditions:** User navigates with keyboard only (no mouse)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Press Tab key to navigate through interactive elements<br>2. Verify focus is visible on each element<br>3. Verify all elements are reachable<br>4. Verify focus order is logical | Focus moves to first element<br>Focus ring visible on each element<br>All interactive elements are reachable via Tab key<br>Focus order is logical, Enter/Space activate elements | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-A11Y-002
**Title:** Screen Reader Compatibility
**Pre-conditions:** Screen reader enabled, Book catalog loaded
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate through page<br>2. Read book information<br>3. Use cart functions<br>4. Test checkout flow | All content readable<br>Book details announced correctly<br>Cart actions announced to screen reader<br>All checkout steps accessible via screen reader | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-A11Y-003
**Title:** Image Alt Text
**Pre-conditions:** User is on catalog page, book images are displayed
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Inspect book image elements<br>2. Verify alt text is present<br>3. Verify alt text includes title and author<br>4. Test with screen reader | All images have alt text attribute<br>Alt text includes book title and author<br>Format: "{title} by {author}"<br>Alt text read correctly by screen reader | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 3. Cross-Browser Compatibility

### ID: TC-BROWSER-001
**Title:** Chrome Compatibility
**Pre-conditions:** Chrome browser (latest 2 versions), app deployed
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Open app in Chrome<br>2. Test all major features: catalog, cart, checkout, payment<br>3. Verify layout and functionality<br>4. Check console for errors | App loads successfully<br>All features work correctly in Chrome<br>Layout correct, functionality intact<br>No console errors | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-BROWSER-002
**Title:** Firefox Compatibility
**Pre-conditions:** Firefox browser (latest 2 versions)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Open app in Firefox<br>2. Test all major features<br>3. Verify layout and functionality<br>4. Check console for errors | App loads successfully<br>All features work correctly in Firefox<br>No compatibility issues, layout correct<br>No console errors | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-BROWSER-003
**Title:** Safari Compatibility
**Pre-conditions:** Safari browser (latest 2 versions)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Open app in Safari<br>2. Test all major features<br>3. Verify layout and functionality<br>4. Check for Safari-specific issues | App loads successfully<br>All features work correctly in Safari<br>No Safari-specific bugs, layout correct<br>No unique compatibility problems | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-BROWSER-004
**Title:** Edge Compatibility
**Pre-conditions:** Edge browser (latest 2 versions)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Open app in Edge<br>2. Test all major features<br>3. Verify layout and functionality<br>4. Check performance | App loads successfully<br>All features work correctly in Edge<br>No compatibility issues<br>Performance comparable to Chrome | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 4. Device & Responsive Testing

### ID: TC-DEVICE-001
**Title:** Mobile Responsiveness - iPhone (375×667)
**Pre-conditions:** Browser viewport set to 375×667 (iPhone)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Resize browser to 375×667<br>2. Navigate through all pages<br>3. Test all interactions (tap, scroll)<br>4. Verify layout is responsive<br>5. Verify text is readable | Viewport resized correctly<br>Layout adapts to mobile<br>All features accessible<br>Text readable, touch targets adequate size<br>Responsive design works | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-DEVICE-002
**Title:** Tablet Responsiveness - iPad (768×1024)
**Pre-conditions:** Browser viewport set to 768×1024 (iPad)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Resize browser to 768×1024<br>2. Navigate through all pages<br>3. Test all interactions<br>4. Verify layout is appropriate for tablet<br>5. Test orientation changes | Viewport resized correctly<br>Layout optimized for tablet<br>All features work<br>Appropriate spacing and sizing<br>Layout works in both portrait and landscape | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |# Phase 4: Integration & E2E Test Scripts

## 1. End-to-End Scenarios

### ID: TC-E2E-001
**Title:** Complete User Journey - Purchase Flow
**Pre-conditions:** User starts on catalog page, cart is empty
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Browse catalog at /catalog<br>2. Search for a book<br>3. Add book to cart (click "Buy Now")<br>4. Navigate to /cart<br>5. Update quantity<br>6. Click "Proceed to Checkout"<br>7. Fill shipping form at /checkout<br>8. Review order<br>9. Complete payment<br>10. Verify redirect to order details<br>11. Verify order status is "Paid" | Books displayed<br>Search results shown<br>Cart counter updates<br>Cart page loads<br>Quantity changes<br>Checkout starts<br>Form submitted<br>Order details shown<br>Payment successful<br>Order created with status "Paid"<br>Cart cleared, navigation smooth | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-E2E-002
**Title:** Multiple Simultaneous Operations
**Pre-conditions:** User has items in cart
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Open app in two browser tabs<br>2. In tab 1: Add item to cart<br>3. In tab 2: Remove item from cart<br>4. Refresh both tabs<br>5. Verify cart state is consistent<br>6. Check localStorage | Both tabs load successfully<br>Cart updates in tab 1<br>Cart updates in tab 2<br>Both tabs show same cart state after refresh<br>Cart state synchronized via localStorage<br>app.cart synchronized correctly | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-E2E-003
**Title:** State Persistence Across Browser Sessions
**Pre-conditions:** User has items in cart and completed orders
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Add items to cart<br>2. Complete an order<br>3. Close browser completely<br>4. Reopen browser and navigate to app<br>5. Verify cart items persist<br>6. Navigate to order history<br>7. Confirm localStorage data | Cart populated with items<br>Order successfully created<br>Browser session ended<br>App loads fresh session<br>Cart still contains previous items<br>Previous orders accessible<br>app.cart and app.orders persisted | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 2. Edge Cases & Error Handling

### ID: TC-EDGE-001
**Title:** Checkout with Empty Cart
**Pre-conditions:** Cart is empty, user navigates to /checkout
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Ensure cart is empty (0 items)<br>2. Navigate to /checkout route<br>3. Attempt to proceed through checkout steps<br>4. Observe button states and error messages | Cart shows 0 items<br>Checkout page loads<br>All "Next" buttons are disabled<br>User sees appropriate message or empty state | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-EDGE-002
**Title:** Invalid Email Format - Missing @ Symbol
**Pre-conditions:** User is on checkout step 1 (Shipping form)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Enter invalid email: "userexample.com" (missing @)<br>2. Attempt to submit form<br>3. Observe validation behavior<br>4. Verify error message | Email field accepts input<br>Browser shows validation error<br>Form does not submit<br>Specific email format error displayed | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-EDGE-003
**Title:** Very Long Input Strings
**Pre-conditions:** User is on checkout step 1 (Shipping form)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Enter very long string (1000+ characters) in fullName field<br>2. Enter very long string in address field<br>3. Attempt to submit form<br>4. Observe form behavior and UI layout | Field accepts long input<br>Field accepts long input<br>Form accepts long inputs, UI does not break<br>Text may wrap or truncate appropriately | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-EDGE-004
**Title:** Special Characters in Search
**Pre-conditions:** User is on /catalog page, search input is visible
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Enter search query with special characters: "!@#$%^&*()"<br>2. Observe search behavior and results<br>3. Test SQL injection patterns<br>4. Verify search functionality | Search executes<br>May return no results or handle gracefully<br>No errors or security issues<br>Search remains stable with special chars | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-EDGE-005
**Title:** Whitespace-Only Inputs in Forms
**Pre-conditions:** User is on checkout step 1 (Shipping form)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Enter only spaces "   " in fullName field<br>2. Enter only spaces in address field<br>3. Attempt to submit form<br>4. Observe validation behavior | Field accepts whitespace<br>Field accepts whitespace<br>Form validation may pass or fail appropriately<br>Consistent validation handling | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-EDGE-006
**Title:** Network Failure During Payment
**Pre-conditions:** User is on checkout step 3 (Payment), internet connection available
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Click "Pay Now" button<br>2. Simulate network failure (disable network in DevTools)<br>3. Observe error handling<br>4. Re-enable network<br>5. Attempt payment again | Payment process initiates<br>Network connection lost<br>"Payment failed to start. Please try again." displayed<br>Network connection restored<br>Payment can be retried successfully | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |## 3. Boundary Value Testing

### ID: TC-BOUND-001
**Title:** Maximum Quantity Value
**Pre-conditions:** User has item in cart
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Navigate to cart page<br>2. Enter very large quantity: More than 10 characters<br>3. Observe calculation and UI behavior<br>4. Verify subtotal calculation | Cart page loads<br>Quantity accepted by input field<br>Subtotal calculated correctly (price × 999999)<br>UI displays correctly, no overflow errors | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-BOUND-002
**Title:** Very Large Cart Totals
**Pre-conditions:** User adds multiple high-priced books with large quantities
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Add expensive books with quantity 100 each<br>2. Navigate to cart<br>3. Verify subtotal calculation<br>4. Proceed to checkout<br>5. Verify totals calculation | Multiple high-value items in cart<br>Cart displays all items<br>All totals calculated correctly<br>No rounding errors, currency formatting correct<br>Totals display properly | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |

### ID: TC-BOUND-003
**Title:** Very Long Text Inputs (Boundary)
**Pre-conditions:** User is on checkout step 1 (Shipping form)
| Steps | Expected Result | Actual Result | Screenshot | Status |
|:------|:----------------|:--------------|:----------|:------|
| 1. Enter 5000 character string in fullName<br>2. Enter 5000 character string in address<br>3. Submit form<br>4. Verify data is stored correctly | Field accepts extremely long input<br>Field accepts extremely long input<br>Long text accepted and stored<br>Order created successfully | *(fill: what happened when you executed all steps)* | *(fill: screenshot link)* | *(fill: PASS/FAIL/BLOCKED/SKIP)* |