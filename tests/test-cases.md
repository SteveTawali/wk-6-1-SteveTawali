## 1. Book Catalog and Cart Testing (FR-O01)

### ID: TC-CAT-000
- **Title**: Search Books by Title
- **Pre-conditions**: 
  - User is on catalog page
  - Books data is loaded
- **Steps**:
  1. Click on search input field
  2. Type a known book title/description/author
  3. Wait for results to load
- **Expected Result**: 
  - Matching books are displayed
  - Search is case-insensitive
  - Results update in real-time
- **Post-conditions**: Search results displayed correctly
- **Test Data**: Use existing book titles from books.js
- **Evidence:** : screenshots/search-book.png

### ID: TC-CART-001
- **Title**: Add Book to Cart
- **Pre-conditions**: 
  - User is viewing a book
  - Cart is empty
- **Steps**:
  1. Click "Buy Now" button on BookCard
  2. Observe cart counter update
  3. Navigate to cart page
- **Expected Result**: 
  - Book added to cart
  - Cart counter increments
  - Book visible in cart with correct price
- **Post-conditions**: Book present in cart
- **Evidence:** screenshots/cart-add-book.png

### ID: TC-CART-002
**Title:** Update Cart Quantity  
**Pre-conditions:** User has items in cart, user is on /cart page  
**Steps:**
1. Locate quantity input field for a cart item
2. Change quantity value (e.g., to 2 or 3)
3. Observe the subtotal calculation  
**Expected Result:** Quantity input shows updated value, line item price = book.price × quantity, subtotal recalculates correctly, cannot set quantity below 1  
**Post-conditions:** Cart item quantity is updated, subtotal updated, localStorage app.cart updated  
**Evidence:** screenshots/cart-update-quantity.png

### ID: TC-CART-003
- **Title**: Remove Book from Cart
- **Pre-conditions**: 
  - Book exists in cart
- **Steps**:
  1. Navigate to cart page
  2. Click "Remove" button
  3. Observe cart update
- **Expected Result**: 
  - Book removed from cart
  - Subtotal updates
  - Empty cart message if last item
- **Post-conditions**: Book removed from cart
- **Evidence:**: screenshots/remove-book.png

### ID: TC-CART-004
**Title:** Quantity Cannot Be Less Than 1  
**Pre-conditions:** User has items in cart, user is on /cart page  
**Steps:**
1. Locate quantity input field
2. Try to set quantity to 0
3. Try to set quantity to -1
4. Observe the quantity value  
**Expected Result:** Quantity input enforces minimum value of 1, cannot be set to 0 or negative  
**Post-conditions:** Quantity remains at minimum 1  
**Evidence:** screenshots/cart-quantity-minimum.png

### ID: TC-CART-005
**Title:** Calculate Subtotal Correctly  
**Pre-conditions:** User has multiple items in cart with different quantities, user is on /cart page  
**Steps:**
1. Add 2 books with quantities 2 and 3
2. Navigate to /cart page
3. Verify subtotal calculation: sum(price × quantity) for all items  
**Expected Result:** Subtotal displays correct sum: (book1.price × 2) + (book2.price × 3), formatted with currency symbol  
**Post-conditions:** Subtotal is correctly calculated and displayed  
**Evidence:** screenshots/cart-subtotal-calculation.png

### ID: TC-CART-006
**Title:** Empty Cart State  
**Pre-conditions:** Cart is empty  
**Steps:**
1. Navigate to Cart
2. Observe the empty cart message
3. Verify "Continue shopping" link is present  
**Expected Result:** Text "Your cart is empty" is displayed, link text "Continue shopping" is present, link navigates to /catalog  
**Post-conditions:** Empty cart state is displayed  
**Evidence:** screenshots/cart-empty-state.png

### ID: TC-CART-007
**Title:** Cart Persistence Across Refresh  
**Pre-conditions:** User has items in cart, user is on any page  
**Steps:**
1. Add items to cart
2. Refresh the browser page
3. Navigate to /cart route
4. Verify items are still present  
**Expected Result:** Cart items persist after refresh  
**Post-conditions:** Cart data is persisted in localStorage, cart survives page refresh  
**Evidence:** screenshots/cart-persistence.png

### ID: TC-CART-008
**Title:** Cart Count Badge Updates  
**Pre-conditions:** User is on any page, cart may have items  
**Steps:**
1. Add item to cart from catalog
2. Observe navbar cart badge
3. Verify badge shows correct count  
**Expected Result:** Cart badge shows total item count (sum of all quantities), count updates immediately  
**Post-conditions:** Cart badge reflects accurate count, screen reader announces update  
**Evidence:** screenshots/cart-badge-update.png

### ID: TC-CART-009
**Title:** Proceed to Checkout Button  
**Pre-conditions:** User has items in cart, user is on /cart page  
**Steps:**
1. Locate "Proceed to Checkout" button
2. Click the button
3. User is directed to checkout page  
**Expected Result:** Checkout page loads  
**Post-conditions:** User is on checkout page  
**Evidence:** screenshots/cart-proceed-checkout.png

## 3. Checkout Wizard (FR-O02)

### ID: TC-CHK-001
**Title:** Checkout Wizard Has 4 Steps  
**Pre-conditions:** User navigates to /checkout route, cart has items  
**Steps:**
1. Navigate to /checkout
2. Observe step indicators in the page
3. Verify step labels and active step highlighting  
**Expected Result:** Step indicators show: "Shipping", "Review", "Payment", "Confirmation", first step "Shipping" is highlighted/bold  
**Post-conditions:** Checkout wizard displays with 4 steps, first step is active  
**Evidence:** screenshots/checkout-steps.png

### ID: TC-CHK-002
**Title:** Shipping Form - All Fields Required  
**Pre-conditions:** User is on checkout step 1 (Shipping), form is empty  
**Steps:**
1. Try to click "Next" button without filling any fields
2. Observe error message  
**Expected Result:** Error message displayed: "Please fill out all required fields", form does not proceed to next step  
**Post-conditions:** Form validation prevents progression, error message is visible  
**Evidence:** screenshots/checkout-validation-error.png

### ID: TC-CHK-003
**Title:** Shipping Form - Email Validation  
**Pre-conditions:** User is on checkout step 1 (Shipping)  
**Steps:**
1. Fill all fields except email
2. Enter invalid email format "invalid-email" in email field
3. Try to submit form  
**Expected Result:** Email validation prevents submission, email field shows validation error, form does not proceed  
**Post-conditions:** Email validation works, invalid email is rejected  
**Evidence:** screenshots/checkout-email-validation.png

### ID: TC-CHK-004
**Title:** Shipping Form - Valid Submission  
**Pre-conditions:** User is on checkout step 1 (Shipping), form fields are empty  
**Steps:**
1. Fill all required fields: fullName, email, address, city, country, postalCode
2. Click "Next" button
3. Observe step change  
**Expected Result:** Form submits successfully, URL remains /checkout, step indicator shows "Review" as active, form data is preserved  
**Post-conditions:** User is on Review step (step 2), shipping data is stored in component state  
**Evidence:** screenshots/checkout-shipping-submit.png

### ID: TC-CHK-005
**Title:** Shipping Form - Postal Code Format Validation  
**Pre-conditions:** User is on checkout step 1 (Shipping)  
**Steps:**
1. Fill all required fields
2. Enter invalid postal code format (e.g., "ABC123", "1234", "123456789")
3. Click "Next" button
4. Observe validation behavior  
**Expected Result:** Postal code format validation prevents submission, specific format error message displayed  
**Post-conditions:** Form remains on step 1, postal code format validation error shown  
**Evidence:** screenshots/code-format.png

### ID: TC-CHK-006
**Title:** City Field Should Reject Numeric Values  
**Pre-conditions:** User is on checkout step 1 (Shipping)  
**Steps:**
1. Fill all required fields
2. Enter numeric value in City field (e.g., "12345", "City123")
3. Click "Next" button
4. Observe validation behavior  
**Expected Result:** City field shows validation error for numeric values, form does not proceed to next step  
**Post-conditions:** Form validation prevents progression, City field shows "City should contain only letters" error  
**Evidence:**:screenshots/code-format.png

### ID: TC-CHK-007
**Title:** Country Field Should Reject Numeric Values  
**Pre-conditions:** User is on checkout step 1 (Shipping)  
**Steps:**
1. Fill all required fields
2. Enter numeric value in Country field (e.g., "123", "Country456")
3. Click "Next" button
4. Observe validation behavior  
**Expected Result:** Country field shows validation error for numeric values, form does not proceed to next step  
**Post-conditions:** Form validation prevents progression, Country field shows "Country should contain only letters" error  
**Evidence:**:screenshots/code-format.png

### ID: TC-CHK-008
**Title:** Review Step - Display Cart Items  
**Pre-conditions:** User completed shipping step, user is on Review step (step 2)  
**Steps:**
1. Verify all cart items are listed
2. Verify quantities are displayed correctly
3. Verify prices are displayed correctly  
**Expected Result:** All cart items are displayed with: book title, quantity (e.g., "Qty 2"), line item price (book.price × quantity), formatted currency  
**Post-conditions:** Review step shows all cart items with correct details  
**Evidence:** screenshots/checkout-review-items.png

### ID: TC-CHK-009
**Title:** Review Step - Back Button  
**Pre-conditions:** User is on Review step (step 2), shipping form was filled  
**Steps:**
1. Click "Back" button
2. Observe step change
3. Verify form data is still present  
**Expected Result:** Step indicator shows "Shipping" as active, all form fields retain their values  
**Post-conditions:** User is back on Shipping step, form data is preserved  
**Evidence:** screenshots/checkout-review-back.png

### ID: TC-CHK-010
**Title:** Payment Step - Display Payment Info  
**Pre-conditions:** User is on Payment step (step 3)  
**Steps:**
1. Verify payment instructions are displayed
2. Verify "Pay Now" button is present  
**Expected Result:** Text "You will be redirected to complete your payment securely" is displayed, "Pay Now" button is visible and enabled  
**Post-conditions:** Payment step displays correctly  
**Evidence:** screenshots/checkout-payment-step.png

### ID: TC-CHK-011
**Title:** Payment Step - Back Button  
**Pre-conditions:** User is on Payment step (step 3)  
**Steps:**
1. Click "Back" button
2. Observe step change  
**Expected Result:** Step indicator shows "Review" as active, user returns to Review step, URL remains /checkout  
**Post-conditions:** User is back on Review step  
**Evidence:** screenshots/checkout-payment-back.png

### ID: TC-CHK-012
**Title:** Payment Step - Disabled When Cart Empty  
**Pre-conditions:** Cart is empty  
**Steps:**
1. Navigate to /checkout route
2. Verify "Next" button state  
**Expected Result:** "Next" button is disabled, cart empty state prevents checkout  
**Post-conditions:** Checkout is disabled when cart is empty  
**Evidence:** screenshots/checkout-disabled-empty-cart.png

### ID: TC-CHK-013
**Title:** Confirmation Step - Success Message  
**Pre-conditions:** Payment completed successfully, order was created  
**Steps:**
1. Complete payment flow
2. Observe confirmation step
3. Wait for redirect  
**Expected Result:** Text "Payment successful" is displayed, text "Preparing your confirmation… Redirecting to order details" is shown  
**Post-conditions:** User is redirected to order detail page, order status is "Paid"  
**Evidence:** screenshots/checkout-confirmation.png


## 4. Payment Integration (FR-O03)

### ID: TC-PAY-001
**Title:** Paystack Initialization  
**Pre-conditions:** User clicks "Pay Now" on checkout step 3, cart has items, shipping info is complete  
**Steps:**
1. Click "Pay Now" button
2. Observe Paystack popup/modal
3. Verify payment form is displayed  
**Expected Result:** Paystack payment interface opens (popup or iframe), payment form is visible  
**Post-conditions:** Paystack payment modal is open, order is created with status "Pending"  
**Evidence:** screenshots/payment-paystack-init.png

### ID: TC-PAY-002
**Title:** Payment with Valid Test Card  
**Pre-conditions:** Paystack modal is open, payment form is displayed  
**Steps:**
1. Enter test card number: 4084084084084081
2. Enter CVV: 123
3. Enter future expiry date (e.g., 12/30)
4. Complete payment
5. Verify order status update  
**Expected Result:** Payment succeeds, order status changes to "Paid", user is redirected to confirmation step  
**Post-conditions:** Order status is "Paid", gatewayRef is stored, cart is cleared  
**Evidence:** screenshots/payment-success.png

### ID: TC-PAY-003
**Title:** Order Creation Before Payment  
**Pre-conditions:** User initiates payment, cart has items  
**Steps:**
1. Click "Pay Now" button
2. Check localStorage for app.orders
3. Verify order is created  
**Expected Result:** Order is created with status "Pending", order is saved to localStorage app.orders, order contains: id, status, items, shipping, totals, createdAt  
**Post-conditions:** Order exists in localStorage before payment completes  
**Evidence:** screenshots/payment-order-creation.png

### ID: TC-PAY-004
**Title:** Order Status Update on Success  
**Pre-conditions:** Payment is successful, order exists with status "Pending"  
**Steps:**
1. Complete successful payment
2. Check order status in localStorage
3. Verify gateway reference  
**Expected Result:** Order status changes to "Paid" in localStorage, gatewayRef field is added to order object, order is updated in app.orders  
**Post-conditions:** Order status is "Paid", gatewayRef is stored  
**Evidence:** screenshots/payment-status-update.png

### ID: TC-PAY-005
**Title:** Payment Cancellation  
**Pre-conditions:** Paystack modal is open, user can cancel  
**Steps:**
1. Close payment modal without completing payment
2. Observe error message
3. Check order status  
**Expected Result:** Error message displayed: "Payment was cancelled. You can retry.", order status remains "Pending" in localStorage  
**Post-conditions:** Order remains "Pending", user can retry payment  
**Evidence:** screenshots/payment-cancelled.png

### ID: TC-PAY-006
**Title:** Payment Error Handling  
**Pre-conditions:** Payment fails (simulated or actual failure)  
**Steps:**
1. Simulate payment failure
2. Observe error message
3. Check order status  
**Expected Result:** Error message displayed: "Payment failed to start. Please try again.", order status remains "Pending"  
**Post-conditions:** Order remains "Pending", error is displayed  
**Evidence:** screenshots/payment-error.png

### ID: TC-PAY-007
**Title:** Cart Cleared After Successful Payment  
**Pre-conditions:** Payment is successful, cart has items  
**Steps:**
1. Complete successful payment
2. Check cart
3. Verify navbar cart badge  
**Expected Result:** cart badge shows count "0", cart is cleared  
**Post-conditions:** Cart is empty, cart badge reflects empty state  
**Evidence:** screenshots/payment-cart-cleared.png

### ID: TC-PAY-008
**Title:** Loading State During Payment  
**Pre-conditions:** User clicks "Pay Now" button  
**Steps:**
1. Click "Pay Now" button
2. Observe button state
3. Verify button is disabled  
**Expected Result:** Button text changes to "Processing…", button is not clickable during processing  
**Post-conditions:** Button shows loading state, payment is processing  
**Evidence:** screenshots/payment-loading.png

## 5. Order Management (FR-O04, FR-O05)

### ID: TC-ORD-001
**Title:** Order Detail Page Access  
**Pre-conditions:** User has completed an order, order exists in localStorage app.orders  
**Steps:**
1. Navigate to /orders/{orderId} route (replace {orderId} with actual order ID)
2. Verify order details are displayed  
**Expected Result:** URL is /orders/{orderId}, order information is displayed: order ID, status, items, totals, shipping info  
**Post-conditions:** Order detail page is displayed  
**Evidence:** screenshots/order-detail-page.png

### ID: TC-ORD-002
**Title:** Order Status Display  
**Pre-conditions:** User is on order detail page, order has status "Paid"  
**Steps:**
1. Locate status timeline section
2. Verify status steps are displayed
3. Verify current status is highlighted  
**Expected Result:** Status timeline shows: "Pending", "Paid", "Fulfilled", "Delivered", current status "Paid" is highlighted (green/bold)  
**Post-conditions:** Status timeline displays correctly with active status highlighted  
**Evidence:** screenshots/order-status-timeline.png

### ID: TC-ORD-003
**Title:** Order Items Display  
**Pre-conditions:** User is on order detail page, order has multiple items  
**Steps:**
1. Verify all order items are listed
2. Verify quantities are correct
3. Verify prices are correct
4. Verify images are displayed  
**Expected Result:** All order items are displayed with: book image (alt text includes title and author), book title, quantity (e.g., "Qty 2"), line item price (formatted currency)  
**Post-conditions:** All order items are displayed with correct details  
**Evidence:** screenshots/order-items.png

### ID: TC-ORD-004
**Title:** Order Totals Display  
**Pre-conditions:** User is on order detail page, order has totals  
**Steps:**
1. Verify subtotal is displayed
2. Verify shipping fee is displayed
3. Verify tax is displayed
4. Verify total is displayed  
**Expected Result:** All totals are displayed: Subtotal, Shipping, Tax, Total, all values match checkout totals, formatted with currency symbol  
**Post-conditions:** Order totals are displayed correctly  
**Evidence:** screenshots/order-totals.png

### ID: TC-ORD-005
**Title:** Order Not Found Handling  
**Pre-conditions:** User navigates to non-existent order ID  
**Steps:**
1. Navigate to /orders/invalid-id route
2. Observe error message
3. Verify link to catalog  
**Expected Result:** Text "We couldn't find this order" is displayed, link text "Go back to catalog" is present, link navigates to /catalog  
**Post-conditions:** Error state is displayed with navigation option  
**Evidence:** screenshots/order-not-found.png

### ID: TC-ORD-006
**Title:** Order Persistence  
**Pre-conditions:** Order is created, order exists in localStorage  
**Steps:**
1. Create an order (complete checkout)
2. Refresh the browser page
3. Navigate to order detail page using order ID
4. Verify order is still present  
**Expected Result:** Order persists after refresh, localStorage app.orders contains order data, order detail page displays correctly  
**Post-conditions:** Order data is persisted in localStorage, order survives page refresh  
**Evidence:** screenshots/order-persistence.png

## 6. Navbar & Search

### ID: TC-NAV-001
**Title:** Navbar Search Input  
**Pre-conditions:** User is on any page, navbar is visible  
**Steps:**
1. Locate search input in navbar
2. Verify input is present
3. Verify placeholder text  
**Expected Result:** Search input is visible, placeholder text "Search books…" is displayed, input is accessible  
**Post-conditions:** Search input is available in navbar  
**Evidence:** screenshots/navbar-search-input.png

### ID: TC-NAV-002
**Title:** Navbar Search  
**Pre-conditions:** User has entered search text in navbar search field  
**Steps:**
1. Enter text in search field
2. Press Enter key  
**Expected Result:** Search functionality works on catalog page  
**Evidence:** screenshots/navbar-enter-navigate.png

### ID: TC-NAV-003
**Title:** Search Clears on Route Change  
**Pre-conditions:** User has entered search text, user navigates to different page  
**Steps:**
1. Enter text in navbar search
2. Navigate to different page (e.g., click cart link)
3. Return to catalog or check search field
4. Verify search is cleared  
**Expected Result:** Search input is cleared when route changes, search state resets on navigation  
**Post-conditions:** Search is cleared on route change  
**Evidence:** screenshots/navbar-search-clear-route.png

## 7. Performance Testing

### ID: TC-PERF-001
- **Title**: Image Loading Performance
- **Pre-conditions**: User is on /catalog page
- **Steps**:
  1. Open Network tab in DevTools
  2. Scroll through catalog
  3. Observe image loading behavior
  4. Verify lazy loading works
  5. Measure image load times 
- **Expected Result**: Images load lazily (loading="lazy" attribute), images load as user scrolls, no layout shift (CLS), images have explicit dimensions
- **Post-conditions**: Images optimized and lazy-loaded
- **Evidence**: screenshots/perf-image-loading.png

### ID: TC-PERF-002
- **Title**: Network Throttling - Slow 3G
- **Pre-conditions**: Network throttled to Slow 3G in DevTools
- **Steps**:
  1. Navigate to /catalog
  2. Measure page load time
  3. Add item to cart
  4. Navigate to checkout
  5. Observe user experience 
- **Expected Result**: App remains functional on slow network, loading states shown, user can complete actions, acceptable performance degradation
- **Post-conditions**: App works on slow networks
- **Evidence**: screenshots/perf-slow-3g.png

### ID: TC-PERF-003
- **Title**: Network Throttling - Fast 3G
- **Pre-conditions**: Network throttled to Fast 3G in DevTools
- **Steps**:
  1. Navigate through all pages
  2. Complete checkout flow
  3. Measure performance metrics 
- **Expected Result**: All pages load quickly, checkout flow smooth, performance acceptable on Fast 3G
- **Post-conditions**: App performs well on Fast 3G
- **Evidence**: screenshots/perf-fast-3g.png

## 8. Accessibility Testing

### ID: TC-A11Y-001
**Title:** Keyboard Navigation  
**Pre-conditions:** User navigates with keyboard only (no mouse)  
**Steps:**
1. Press Tab key to navigate through interactive elements
2. Verify focus is visible on each element
3. Verify all elements are reachable
4. Verify focus order is logical  
**Expected Result:** All interactive elements are reachable via Tab key, focus is visible (focus ring), focus order is logical, Enter/Space activate elements  
**Post-conditions:** All functionality is accessible via keyboard  
**Evidence:** screenshots/a11y-keyboard-nav.png

### ID: TC-A11Y-002
- **Title**: Screen Reader Compatibility
- **Pre-conditions**: 
  - Screen reader enabled
  - Book catalog loaded
- **Steps**:
  1. Navigate through page
  2. Read book information
  3. Use cart functions
- **Expected Result**: 
  - All content readable
  - Images have alt text
  - Actions announced
- **Post-conditions**: Screen reader friendly

### ID: TC-A11Y-003
**Title:** Image Alt Text  
**Pre-conditions:** User is on catalog page, book images are displayed  
**Steps:**
1. Inspect book image elements
2. Verify alt text is present
3. Verify alt text includes title and author  
**Expected Result:** All images have alt text attribute, alt text includes book title and author (e.g., "{title} by {author}")  
**Post-conditions:** Images are accessible to screen readers  
**Evidence:** screenshots/a11y-image-alt.png

## 7. Integration & E2E Scenarios
### ID: TC-E2E-001
- **Title**: Complete User Journey - Purchase Flow
- **Pre-conditions**: User starts on catalog page, cart is empty
- **Steps**:
  1. Browse catalog at /catalog
  2. Search for a book
  3. Add book to cart (click "Buy Now")
  4. Navigate to /cart
  5. Update quantity
  6. Click "Proceed to Checkout"
  7. Fill shipping form at /checkout
  8. Review order
  9. Complete payment
  10. Verify redirect to order details
  11. Verify order status is "Paid" 
- **Expected Result**: Complete flow works end-to-end, all steps complete successfully, order created and paid, cart cleared, navigation smooth
- **Post-conditions**: Order created with status "Paid", cart empty, user on order details page
- **Evidence**: screenshots/e2e-complete-purchase-flow.png

### ID: TC-E2E-002
- **Title**: Multiple Simultaneous Operations
- **Pre-conditions**: User has items in cart
- **Steps**:
  1. Open app in two browser tabs
  2. In tab 1: Add item to cart
  3. In tab 2: Remove item from cart
  4. Refresh both tabs
  5. Verify cart state is consistent 
- **Expected Result**: Cart state synchronized via localStorage, both tabs show same cart state after refresh, last write wins or state merges correctly
- **Post-conditions**: Cart state consistent across tabs
- **Evidence**: screenshots/e2e-multiple-tabs.png

### ID: TC-E2E-003
- **Title**: State Persistence Across Browser Sessions
- **Pre-conditions**: User has items in cart and completed orders
- **Steps**:
  1. Add items to cart
  2. Complete an order
  3. Close browser completely
  4. Reopen browser and navigate to app
  5. Verify cart and orders persist 
- **Expected Result**: Cart items still present, orders still accessible, localStorage data persisted across sessions
- **Post-conditions**: All state persisted and restored correctly
- **Evidence**: screenshots/e2e-session-persistence.png

## 9. Cross-Browser Test Cases

### ID: TC-BROWSER-001
- **Title**: Chrome Compatibility
- **Pre-conditions**: Chrome browser (latest 2 versions), app deployed
- **Steps**:
  1. Open app in Chrome
  2. Test all major features: catalog, cart, checkout, payment
  3. Verify layout and functionality
  4. Check console for errors 
- **Expected Result**: All features work correctly in Chrome, no console errors, layout correct, functionality intact
- **Post-conditions**: App fully functional in Chrome
- **Evidence**: screenshots/browser-chrome.png

### ID: TC-BROWSER-002
- **Title**: Firefox Compatibility
- **Pre-conditions**: Firefox browser (latest 2 versions)
- **Steps**:
  1. Open app in Firefox
  2. Test all major features
  3. Verify layout and functionality
  4. Check console for errors 
- **Expected Result**: All features work correctly in Firefox, no compatibility issues, layout correct
- **Post-conditions**: App fully functional in Firefox
- **Evidence**: screenshots/browser-firefox.png

### ID: TC-BROWSER-003
- **Title**: Safari Compatibility
- **Pre-conditions**: Safari browser (latest 2 versions)
- **Steps**:
  1. Open app in Safari
  2. Test all major features
  3. Verify layout and functionality
  4. Check for Safari-specific issues 
- **Expected Result**: All features work correctly in Safari, no Safari-specific bugs, layout correct
- **Post-conditions**: App fully functional in Safari
- **Evidence**: screenshots/browser-safari.png

### ID: TC-BROWSER-004
- **Title**: Edge Compatibility
- **Pre-conditions**: Edge browser (latest 2 versions)
- **Steps**:
  1. Open app in Edge
  2. Test all major features
  3. Verify layout and functionality
- **Expected Result**: All features work correctly in Edge, no compatibility issues
- **Post-conditions**: App fully functional in Edge
- **Evidence**: screenshots/browser-edge.png

## 10. Device Test Cases

### ID: TC-DEVICE-001
- **Title**: Mobile Responsiveness - iPhone (375×667)
- **Pre-conditions**: Browser viewport set to 375×667 (iPhone)
- **Steps**:
  1. Resize browser to 375×667
  2. Navigate through all pages
  3. Test all interactions (tap, scroll)
  4. Verify layout is responsive
  5. Verify text is readable 
- **Expected Result**: Layout adapts to mobile, all features accessible, text readable, touch targets adequate size, responsive design works
- **Post-conditions**: App fully functional on mobile viewport
- **Evidence**: screenshots/device-mobile-iphone.png

### ID: TC-DEVICE-002
- **Title**: Tablet Responsiveness - iPad (768×1024)
- **Pre-conditions**: Browser viewport set to 768×1024 (iPad)
- **Steps**:
  1. Resize browser to 768×1024
  2. Navigate through all pages
  3. Test all interactions
  4. Verify layout is appropriate for tablet 
- **Expected Result**: Layout optimized for tablet, all features work, appropriate spacing and sizing
- **Post-conditions**: App fully functional on tablet viewport
- **Evidence**: screenshots/device-tablet-ipad.png

## 12. Edge Cases & Error Scenarios

### ID: TC-EDGE-001
**Title:** Checkout with Empty Cart  
**Pre-conditions:** Cart is empty, user navigates to /checkout  
**Steps:**
1. Ensure cart is empty (0 items)
2. Navigate to /checkout route
3. Attempt to proceed through checkout steps
4. Observe button states and error messages  
**Expected Result:** All "Next" buttons are disabled, checkout cannot proceed, user sees appropriate message or empty state  
**Post-conditions:** User remains on checkout page, cannot proceed without items  
**Evidence:** screenshots/edge-empty-cart-checkout.png

### ID: TC-EDGE-002
**Title:** Invalid Email Format - Missing @ Symbol  
**Pre-conditions:** User is on checkout step 1 (Shipping form)  
**Steps:**
1. Enter invalid email: "userexample.com" (missing @)
2. Attempt to submit form
3. Observe validation behavior  
**Expected Result:** Browser shows validation error, form does not submit  
**Post-conditions:** Form remains on step 1, error message displayed  
**Evidence:** screenshots/edge-invalid-email-no-at.png

### ID: TC-EDGE-003
**Title:** Very Long Input Strings  
**Pre-conditions:** User is on checkout step 1 (Shipping form)  
**Steps:**
1. Enter very long string (1000+ characters) in fullName field
2. Enter very long string in address field
3. Attempt to submit form
4. Observe form behavior and UI layout  
**Expected Result:** Form accepts long inputs, UI does not break, text may wrap or truncate appropriately, form can be submitted  
**Post-conditions:** Long text is stored in order data  
**Evidence:** screenshots/edge-long-inputs.png

### ID: TC-EDGE-004
**Title:** Special Characters in Search  
**Pre-conditions:** User is on /catalog page, search input is visible  
**Steps:**
1. Enter search query with special characters: ""
2. Observe search behavior and results  
**Expected Result:** Search may return no results or handle gracefully  
**Evidence:** screenshots/edge-special-chars-search.png

### ID: TC-EDGE-005
**Title:** Whitespace-Only Inputs in Forms  
**Pre-conditions:** User is on checkout step 1 (Shipping form)  
**Steps:**
1. Enter only spaces " " in fullName field
2. Enter only spaces in address field
3. Attempt to submit form
4. Observe validation behavior  
**Expected Result:** Form validation may pass (spaces are characters) or fail appropriately, order creation handles whitespace correctly  
**Post-conditions:** Form behavior is consistent with validation rules  
**Evidence:** screenshots/edge-whitespace-inputs.png

### ID: TC-EDGE-006
**Title:** Network Failure During Payment  
**Pre-conditions:** User is on checkout step 3 (Payment), internet connection available  
**Steps:**
1. Click "Pay Now" button
2. Simulate network failure (disable network in DevTools)
3. Observe error handling
4. Re-enable network
5. Attempt payment again  
**Expected Result:** Error message displayed: "Payment failed to start. Please try again.", order remains "Pending", user can retry payment  
**Post-conditions:** Order status unchanged, payment can be retried  
**Evidence:** screenshots/edge-network-failure-payment.png


## 11. Boundary Value Testing

### ID: TC-BOUND-001
**Title:** Maximum Quantity Value  
**Pre-conditions:** User has item in cart  
**Steps:**
1. Navigate to cart page
2. Enter very large quantity: 999999
3. Observe calculation and UI behavior
4. Verify subtotal calculation  
**Expected Result:** Quantity accepted, subtotal calculated correctly (price × 999999), UI displays correctly, no overflow errors  
**Post-conditions:** Large quantity stored and calculated correctly  
**Evidence:** screenshots/bound-max-quantity.png

### ID: TC-BOUND-002
**Title:** Very Large Cart Totals  
**Pre-conditions:** User adds multiple high-priced books with large quantities  
**Steps:**
1. Add expensive books with quantity 100 each
2. Navigate to cart
3. Verify subtotal calculation
4. Proceed to checkout
5. Verify totals calculation (subtotal + shipping + tax)  
**Expected Result:** All totals calculated correctly, no rounding errors, currency formatting correct, totals display properly  
**Post-conditions:** Large totals calculated and displayed correctly  
**Evidence:** screenshots/bound-large-totals.png

### ID: TC-BOUND-003
**Title:** Very Long Text Inputs (Boundary)  
**Pre-conditions:** User is on checkout step 1 (Shipping form)  
**Steps:**
1. Enter 5000 character string in fullName
2. Enter 5000 character string in address
3. Submit form
4. Verify data is stored correctly  
**Expected Result:** Long text accepted and stored, order created successfully, order details display long text correctly  
**Post-conditions:** Long text persisted in order data  
**Evidence:** screenshots/bound-very-long-inputs.png
