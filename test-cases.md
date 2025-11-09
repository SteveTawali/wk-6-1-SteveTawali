## 1. Book Catalog Testing

### ID: TC-CAT-001
- **Title**: Search Books by Title
- **Pre-conditions**: 
  - User is on catalog page
  - Books data is loaded
- **Steps**:
  1. Click on search input field
  2. Type a known book title
  3. Wait for results to load
- **Expected Result**: 
  - Matching books are displayed
  - Search is case-insensitive
  - Results update in real-time
- **Post-conditions**: Search results displayed correctly
- **Test Data**: Use existing book titles from books.js

### ID: TC-CAT-002
- **Title**: Filter Books by Price Range
- **Pre-conditions**: 
  - User is on catalog page
  - Multiple books with different prices exist
- **Steps**:
  1. Locate price filter controls
  2. Set minimum price
  3. Set maximum price
  4. Observe results
- **Expected Result**: 
  - Only books within price range shown
  - Empty state message if no matches
  - Price formatting correct
- **Post-conditions**: Filtered list displayed

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

### ID: TC-CART-002
- **Title**: Update Book Quantity in Cart
- **Pre-conditions**: 
  - Book exists in cart
  - Initial quantity is 1
- **Steps**:
  1. Navigate to cart page
  2. Find quantity input
  3. Change quantity to 2
  4. Observe subtotal update
- **Expected Result**: 
  - Quantity updates
  - Subtotal recalculates correctly
  - Cannot set quantity below 1
- **Post-conditions**: Updated quantity reflected in cart

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

## 3. Checkout Process Testing

### ID: TC-CHECK-001
- **Title**: Complete Checkout Process
- **Pre-conditions**: 
  - Cart contains items
  - User has shipping info
- **Steps**:
  1. Click "Proceed to Checkout"
  2. Fill shipping information
  3. Review order
  4. Proceed to payment
- **Expected Result**: 
  - All forms validate correctly
  - Order summary accurate
  - Payment integration loads
- **Post-conditions**: Order placed successfully

### ID: TC-CHECK-002
- **Title**: Validate Shipping Form
- **Pre-conditions**: 
  - User is on checkout page
- **Steps**:
  1. Submit empty form
  2. Submit invalid email
  3. Submit valid data
- **Expected Result**: 
  - Error messages for empty fields
  - Email validation message
  - Proceeds with valid data
- **Post-conditions**: Form validation works

## 4. Payment Integration Testing

### ID: TC-PAY-001
- **Title**: Process Payment with Paystack
- **Pre-conditions**: 
  - Order reviewed
  - Valid shipping info entered
- **Steps**:
  1. Click "Pay Now"
  2. Enter test card details
  3. Complete payment
- **Expected Result**: 
  - Paystack modal opens
  - Payment processes
  - Order confirms
- **Post-conditions**: Order marked as paid

### ID: TC-PAY-002
- **Title**: Handle Failed Payment
- **Pre-conditions**: 
  - Order ready for payment
- **Steps**:
  1. Click "Pay Now"
  2. Use invalid test card
  3. Observe error handling
- **Expected Result**: 
  - Error message displayed
  - Order remains unpaid
  - Retry option available
- **Post-conditions**: Payment failure handled gracefully

## 5. Performance Testing

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

## 6. Accessibility Testing

### ID: TC-ACC-001
- **Title**: Keyboard Navigation
- **Pre-conditions**: 
  - Homepage loaded
  - Keyboard only
- **Steps**:
  1. Tab through all elements
  2. Activate buttons/links
  3. Fill forms
- **Expected Result**: 
  - All elements focusable
  - Focus visible
  - Actions triggerable
- **Post-conditions**: Fully keyboard accessible

### ID: TC-ACC-002
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

## 8. Cross-Browser Test Cases

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

## 9. Reviews & Community Features

### ID: TC-REV-001
- **Title**: Submit Product Review
- **Pre-conditions**: 
  1. User has purchased the book
  2. User is logged in
  3. User hasn't reviewed this book before
- **Steps**:
  1. Navigate to book details page
  2. Click "Write a Review" button
  3. Enter rating (1-5 stars)
  4. Enter review text
  5. Submit review
- **Expected Result**: 
  - Review is posted successfully
  - Review appears on book page
  - Review count updates
- **Post-conditions**: Review is visible to other users

### ID: TC-REV-002
- **Title**: Review Validation - Non-Purchaser
- **Pre-conditions**: 
  1. User is logged in
  2. User has not purchased the book
- **Steps**:
  1. Navigate to book details page
  2. Attempt to write a review
- **Expected Result**: 
  - "Write a Review" button is disabled
  - Message indicates purchase required
- **Post-conditions**: No review created

### ID: TC-REV-003
- **Title**: Q&A Safe Markdown
- **Pre-conditions**: User is logged in
- **Steps**:
  1. Navigate to book Q&A section
  2. Post question with markdown
  3. Include safe and unsafe URLs
- **Expected Result**: 
  - Safe markdown renders correctly
  - Unsafe URLs are sanitized
  - javascript: URLs blocked
- **Post-conditions**: Question posted with safe content only

### ID: TC-REV-004
- **Title**: Review Moderation
- **Pre-conditions**: 
  1. Admin user is logged in
  2. Flagged reviews exist
- **Steps**:
  1. Navigate to admin moderation queue
  2. Review flagged content
  3. Approve or reject review
- **Expected Result**: 
  - Flagged reviews visible in queue
  - Moderation actions recorded
  - Review status updates
- **Post-conditions**: Review moderated appropriately

## 10. Notification System

### ID: TC-NOT-001
- **Title**: Notification Badge
- **Pre-conditions**: User has unread notifications
- **Steps**:
  1. Login to application
  2. Observe notification badge
  3. Click on notification
  4. Check badge count
- **Expected Result**: 
  - Badge shows correct unread count
  - Count decrements when notification read
  - Badge hidden when no unread items
- **Post-conditions**: Notification marked as read

### ID: TC-NOT-002
- **Title**: Mark All Read
- **Pre-conditions**: Multiple unread notifications exist
- **Steps**:
  1. Open notifications panel
  2. Click "Mark All Read"
  3. Observe badge behavior
- **Expected Result**: 
  - All notifications marked as read
  - Badge should update to 0 (Known issue: badge doesn't update)
- **Post-conditions**: All notifications marked as read

### ID: TC-NOT-003
- **Title**: Order Status Notifications
- **Pre-conditions**: User has placed an order
- **Steps**:
  1. Admin updates order status
  2. Check user notifications
  3. Verify notification content
- **Expected Result**: 
  - Notification created for status change
  - Notification contains order details
  - Notification links to order
- **Post-conditions**: Order status notification delivered

## 11. Device Test Cases

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


