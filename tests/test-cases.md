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