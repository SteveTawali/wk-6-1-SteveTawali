# 🐞 Bug Report (Defect Log)

---

## ID: BUG--000

**Summary:** Navbar Search

**Severity/Priority:** Medium (S3)

**Environment:** Chrome

**Affected FR(s):** FR-004, FR-005

**Steps to Reproduce:**
1. Enter text in search field
2. Press Enter key
3. Verify search functionality

**Expected Result:**
1. Text entered successfully
2. User navigated to catalog page with search results
3. Search results match the entered text

**Actual Result:** Text is entered successfully but the catalog does not provide the match results

**Attachments:** https://docs.google.com/document/d/1V94TTjrtbzVXGc78HDW-I6UbX0UHq2e7HOKqWUsltoQ/edit?usp=sharing

**Notes:** The user can use the alternative search bar on the left top side corner. Users are affected as they can't find the desired product.

---

## ID: BUG--001

**Summary:** Shipping Form - Postal Code Format Validation

**Severity/Priority:** Medium (S3)

**Environment:** Chrome

**Affected FR(s):** FR-O02

**Steps to Reproduce:**
1. Fill all required fields
2. Enter invalid postal code: "ABC123"
3. Click "Next" button
4. Observe validation behavior
5. Test other invalid formats

**Expected Result:**
1. All fields populated correctly
2. Postal code field accepts input
3. Form validation prevents submission
4. Specific postal code format error displayed
5. "1234", "123456789" also rejected

**Actual Result:** All fields populated, postal code accepts input, form is submitted to the next step, no specific postal code format error is displayed

**Attachments:** https://docs.google.com/document/d/1u3QsyLsL9zENFkHBkaGecKKZIMlAhPCK6PWcNNpJCTo/edit?usp=sharing

**Notes:** The user can still manually correct the input and try again. User is affected as the item might be delivered to wrong address.

---

## ID: BUG--002

**Summary:** City Field Should Reject Numeric Values

**Severity/Priority:** Medium (S3)

**Environment:** Chrome

**Affected FR(s):** FR-O02

**Steps to Reproduce:**
1. Fill all required fields
2. Enter numeric value: "12345" in City field
3. Click "Next" button
4. Observe validation error
5. Test mixed value: "City123"

**Expected Result:**
1. All fields populated
2. City field accepts input
3. Form validation prevents submission
4. "City should contain only letters" error shown
5. Also rejected with validation error

**Actual Result:** …

**Attachments:** https://docs.google.com/document/d/1DQWTUNFni4zPjaHL-jLhsKGFPZ1nCvx1J5R0vQ94O68/edit?usp=sharing

**Notes:** The user can still manually correct the input and try again. User is affected, order might be delivered to wrong address.

---

## ID: BUG--003

**Summary:** Country Field Should Reject Numeric Values

**Severity/Priority:** Medium (S3)

**Environment:** Chrome

**Affected FR(s):** FR-O02

**Steps to Reproduce:**
1. Fill all required fields
2. Enter numeric value: "123" in Country field
3. Click "Next" button
4. Observe validation error
5. Test mixed value: "Country456"

**Expected Result:**
1. All fields populated
2. Country field accepts input
3. Form validation prevents submission
4. "Country should contain only letters" error shown
5. Also rejected with validation error

**Actual Result:** Country field accepts input, form is submitted and it moves to the next step, no form validation error is displayed

**Attachments:** https://docs.google.com/document/d/1tJPfv1NomdkoOd_nUvOK9ycrZx5ON5D7rzoF3wliAqc/edit?usp=sharing

**Notes:** User can still manually correct the input and try again. Affects both users and admins, it might prevent order processing.

---

## ID: BUG--004

**Summary:** Mobile Responsiveness - iPhone (375×667)

**Severity/Priority:** Low (S4)

**Environment:** Chrome browser

**Affected FR(s):** FR-004, FR-005

**Steps to Reproduce:**
1. Resize browser to 375×667
2. Navigate through all pages
3. Test all interactions (tap, scroll)
4. Verify layout is responsive
5. Verify text is readable

**Expected Result:**
1. Viewport resized correctly
2. Layout adapts to mobile
3. All features accessible
4. Text readable, touch targets adequate size
5. Responsive design works

**Actual Result:** Book titles in cart page overlap with the quantity field. All features are accessible and layout adapts correctly to mobile.

**Attachments:** https://drive.google.com/drive/folders/17OrIxZ3VNbMJVDBH6ZO0klBzGrqn41ci?usp=drive_link

**Notes:** User can try rotating the phone to landscape or zoom in/out. Developers can apply CSS for compatibility. Book title overlaps the quantity field creating poor user experience.
