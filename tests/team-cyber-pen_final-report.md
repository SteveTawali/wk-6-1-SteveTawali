# **Software Test Report**

**Team Name:** Cyber Pen  
**E-Commerce BookStore Application v1.0**

**Document ID:** TR-2025-001

**Date of Report:** November 17, 2025  
**Prepared by:** Cyber Pen   
**Version:** 1.0

---

## Executive Summary

This report presents the results of comprehensive testing conducted on the Bookstore e-commerce web application version 1.0. The testing focused on validating core functionality, verifying payment integration, ensuring performance across various conditions, and confirming compatibility across browsers and devices.

**Key Findings:**

- All critical and high-severity issues have been addressed; 4 medium-severity validation issues remain open with mitigation plans  
- Core functionality performs well across all tested browsers with 92.1% test case pass rate (58 passed out of 63 executed)  
- Payment integration (Paystack) functions as specified with proper order creation and status updates  
- Minor UI layout concern exists on mobile viewport (iPhone 375×667) affecting cart page display

**Recommendation:** The QA team recommends proceeding with release, with a phased rollout plan and immediate deployment of shipping form validation fixes.

---

## 1\. Test Objective

The primary objective of this testing cycle was to evaluate the quality, functionality, performance, and usability of the Bookstore e-commerce web application version 1.0 before its release to production. Specifically, our testing aimed to:

1. Validate that all core features function according to the requirements specifications, particularly the Paystack payment integration and checkout wizard flow.  
     
2. Ensure that cart operations, order management, and data persistence work correctly across browser sessions.  
     
3. Verify the application's performance under various network conditions, with special attention to checkout process optimization.  
     
4. Assess the application's compatibility across different browsers, devices, and screen sizes to ensure a consistent user experience.  
     
5. Validate security measures in place for user data protection, especially surrounding payment processing and localStorage usage.

This round of testing was conducted over a two-week period from November 5, 2025, to November 17, 2025, following feature completion

---

## 2\. Areas Covered

### 2.1 Functional Testing

The following functional areas were thoroughly tested:

**Book Catalog & Search**

- Search functionality (by title, author, description)  
- Catalog browsing and navigation  
- Navbar search integration  
- Real-time search results

**Shopping Cart Operations**

- Add/remove items functionality  
- Quantity modification with validation  
- Cart persistence across refresh  
- Cart count badge updates  
- Subtotal calculations  
- Empty cart state handling

**Checkout Wizard Flow**

- 4-step checkout process (Shipping → Review → Payment → Confirmation)  
- Form validation (email, postal code, city, country)  
- Step navigation and back button functionality  
- Data preservation across steps  
- Empty cart prevention

**Payment Integration**

- Paystack initialization  
- Payment with valid test cards  
- Order creation before payment  
- Order status updates on success  
- Payment cancellation handling  
- Payment error handling  
- Cart clearing after successful payment  
- Loading states during payment

**Order Management**

- Order detail page access  
- Order status display and timeline  
- Order items and totals display  
- Order persistence across sessions  
- Order not found error handling

### 2.2 Non-Functional Testing

The following non-functional areas were tested:

**Performance Testing**

- Image loading performance and lazy loading  
- Application behavior under Slow 3G network conditions  
- Application behavior under Fast 3G network conditions  
- Page load times and responsiveness

**Compatibility Testing**

- Testing across Chrome, Firefox, Safari, and Edge browsers (latest 2 versions)  
- Testing on various screen sizes and resolutions (desktop, tablet, mobile)  
- Responsive design validation

**Accessibility Testing**

- Keyboard navigation  
- Screen reader compatibility  
- Image alt text implementation  
- Focus management

**Security Testing**

- Input validation and sanitization  
- Secure storage of order data in localStorage  
- Payment data handling  
- Error handling and user feedback

**Intentional Defects & Edge Cases** (Explicitly listed in test plan)

The following intentional defects and edge cases were identified and documented as known issues:

- Currency mismatch ($ vs configured gateway currency)
- Rounding variance (line vs grand total) ±0.01
- Return window off-by-one (day 8 accepted)
- XSS via markdown link (javascript: allowed)
- Stock race (mini-cart exceeds stock)
- Modal a11y (missing aria-modal, focus not returned)
- CSV decimal comma breaking columns
- Notification badge not updated after mark all read
- Images not lazy-loaded (regression scenario)
- Search diacritics not normalized

---

## 3\. Areas Not Covered

The following areas were not included in this testing cycle:

**Returns & Refunds Functionality (FR-R01, FR-R02, FR-R03)**

- Reason: Returns and refunds features are scheduled for future releases. This includes 7-day return window validation, full/partial refund simulation, and admin approval workflows.

**User Reviews & Q\&A System (FR-U01, FR-U02, FR-U03)**

- Reason: User-generated content features are not part of the current release. This includes review submission (purchaser-only), moderation queue, and Q\&A with safe markdown subset.

**Administrative Dashboard & Management Features (FR-M01, FR-M02, FR-M03, FR-M04, FR-M05)**

- Reason: The admin dashboard and management features are not part of the current release scope and will be tested in a separate cycle. This includes catalog CRUD operations, inventory management, orders dashboard, moderation management, and promotions management.

**Notifications System (FR-N01, FR-N02)**

- Reason: Notification features including unread count badge, in-app list, history, and batch mark-as-read functionality are scheduled for future releases.

**Advanced Security Features (FR-S02, FR-S03)**

- Reason: Some security features are not fully implemented in the current release. This includes URL scheme validation for UGC (rejecting non-http(s) links) and comprehensive storage error handling (quota exceeded, JSON parse failures). Note: Basic sanitization (FR-S01) is partially covered.

**Full Penetration Testing**

- Reason: A specialized third-party security firm may be contracted for comprehensive penetration testing in a future cycle.

**Extended Performance Testing on Legacy Browsers**

- Reason: Testing focused on the latest 2 versions of major browsers that represent the majority of the user base.

---

## 4\. Testing Approach

### 4.1 Test Strategy

Our testing approach combined various testing methodologies to ensure comprehensive coverage:

1. **Risk-Based Testing**  
     
   - We identified high-risk areas through requirements analysis and stakeholder input.  
   - Payment processing, checkout flow, and cart operations received additional testing focus due to their critical nature.

   

2. **Test Case Design**  
     
   - Test cases were designed using black-box techniques.  
   - Boundary value analysis and equivalence partitioning were applied to input fields.  
   - Decision tables were used for complex business rules in the checkout process.

   

3. **Manual Testing Focus**  
     
   - All 63 test cases were executed manually with detailed documentation.  
   - Test execution results tracked in Google Sheets for real-time collaboration.  
   - Evidence captured through screenshots and detailed notes.

### 4.2 Testing Process

The testing process followed these phases:

1. **Test Planning (November 5, 2025\)**  
     
   - Test plan creation and resource allocation  
   - Test environment setup and data preparation  
   - Test case review and prioritization

   

2. **Test Execution (November 6th \- 15th , 2025\)**  
     
   - Smoke testing on the single build provided  
   - Full regression testing on the build  
   - Feature-specific testing for core functionality  
   - Non-functional testing (performance, accessibility, compatibility)

   

3. **Defect Management(Ongoing)**  
     
   - Defects logged in defect log with severity and priority assignments  
   - Defect triage and prioritization  
   - All identified defects remain open pending future build with fixes

   

4. **Reporting & Analysis (November 16-17, 2025\)**  
     
   - Test results compilation and metrics analysis  
   - Final assessment and recommendations  
   - Report preparation and stakeholder presentation

### 4.3 Testing Tools

The following tools were utilized during the testing process:

- **Test Management**: Google Sheets for test case execution tracking  
- **Defect Tracking**: Markdown-based defect log with GitHub integration  
- **Performance Testing**: Chrome DevTools Network Throttling  
- **Compatibility Testing**: Multiple browsers (Chrome, Firefox, Safari, Edge)  
- **Accessibility Testing**: Browser DevTools, Screen Reader testing  
- **Evidence Collection**: Screenshots and Google Drive documentation

### 4.4 Sample Key Test Cases

Below are examples of critical test cases that helped validate core functionality:

**Test Case ID: TC-PAY-002**

- **Title**: Payment with Valid Test Card  
- **Preconditions**: Paystack modal is open, payment form is displayed  
- **Steps**:  
  1. Enter test card number: 4084084084084081  
  2. Enter CVV: 123  
  3. Enter future expiry date (e.g., 12/30)  
  4. Complete payment  
  5. Verify order status update  
- **Expected Results**: Payment succeeds, order status changes to "Paid", user is redirected to confirmation step  
- **Actual Results**: As expected  
- **Status**: PASS

**Test Case ID: TC-CHK-006**

- **Title**: Shipping Form \- Postal Code Format Validation  
- **Preconditions**: User is on checkout step 1 (Shipping)  
- **Steps**:  
  1. Fill all required fields  
  2. Enter invalid postal code: "ABC123"  
  3. Click "Next" button  
  4. Observe validation behavior  
- **Expected Results**: Form validation prevents submission, specific postal code format error displayed  
- **Actual Results**: Form is submitted to the next step, no specific postal code format error is displayed  
- **Status**: FAIL ([BUG--001](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/27))

---

## 5\. Defect Report

### 5.1 Defect Summary

A total of 5 defects were identified during the testing cycle, categorized by severity as follows:

| Severity | Count | Closed | Open |
| :---- | :---- | :---- | :---- |
| Critical | 0 | 0 | 0 |
| High | 0 | 0 | 0 |
| Medium | 4 | 0 | 4 |
| Low | 1 | 0 | 1 |
| **Total** | **5** | **0** | **5** |

### 5.2 Open Medium-Severity Defects

1. **Navbar Search Results Not Displayed** ([BUG--000](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/26))  
     
   - **Description**: Text is entered successfully in navbar search, but the catalog does not provide matching results when Enter key is pressed.  
   - **Root Cause**: Search functionality in navbar not properly integrated with catalog search results.  
   - **Current Status**: Open, awaiting fix  
   - **Mitigation Plan**: Users can use the alternative search bar on the catalog page as a workaround.

   

2. **Shipping Form \- Postal Code Format Validation Missing** ([BUG--001](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/27))  
     
   - **Description**: Form accepts invalid postal code formats (e.g., "ABC123", "1234", "123456789") and proceeds to next step without validation error.  
   - **Root Cause**: Missing postal code format validation in shipping form.  
   - **Current Status**: Open, awaiting fix  
   - **Mitigation Plan**: Users can manually correct the input before proceeding. Development team to implement format validation.

   

3. **City Field Should Reject Numeric Values** ([BUG--002](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/28))  
     
   - **Description**: City field accepts numeric values (e.g., "12345", "City123") and form proceeds to next step without validation error.  
   - **Root Cause**: Missing validation to reject numeric values in City field.  
   - **Current Status**: Open, awaiting fix  
   - **Mitigation Plan**: Users can manually correct the input. Development team to implement letter-only validation.

   

4. **Country Field Should Reject Numeric Values** ([BUG--003](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/29))  
     
   - **Description**: Country field accepts numeric values (e.g., "123", "Country456") and form proceeds to next step without validation error.  
   - **Root Cause**: Missing validation to reject numeric values in Country field.  
   - **Current Status**: Open, awaiting fix  
   - **Mitigation Plan**: Users can manually correct the input. Development team to implement letter-only validation.

### 5.3 Open Low-Severity Defect

1. **Mobile Responsiveness \- Cart Page Layout Issue** ([BUG--004](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/30))  
   - **Description**: Book titles in cart page overlap with the quantity field on iPhone viewport (375×667).  
   - **Root Cause**: CSS layout issue on mobile viewport.  
   - **Current Status**: Open, awaiting fix  
   - **Mitigation Plan**: Users can rotate phone to landscape or zoom in/out. Development team to apply CSS fixes for mobile compatibility.

### 5.4 Defect Trend Analysis

The defect discovery was consistent throughout the testing cycle:

- All 5 defects were identified during functional testing of checkout and navigation features  
- 4 defects are related to form validation in the shipping step  
- 1 defect is related to UI layout on mobile devices  
- No critical or high-severity defects were found, indicating good overall quality

---

## 6\. Platform Details

### 6.1 Test Environment

**Server Environment:**

- **Backend API**: Production-like environment with isolated database  
- **Database**: localStorage-based (app.cart, app.orders)  
- **Payment Gateway**: Paystack sandbox/test environment  
- **API Version**: Current production version

**Client Environments:**

**Desktop Browsers:**

- Chrome (latest 2 versions)  
- Firefox (latest 2 versions)  
- Safari (latest 2 versions)  
- Edge (latest 2 versions)

**Mobile/Tablet Viewports:**

- iPhone (375×667)  
- iPad (768×1024)  
- Desktop (1920×1080, 1366×768)

### 6.2 Network Conditions Tested

- **High-Performance**: Wi-Fi (100+ Mbps)  
- **Average Mobile**: Fast 3G (10-20 Mbps)  
- **Poor Connection**: Slow 3G (1-2 Mbps)  
- **Offline Mode**: Testing offline functionality and data synchronization upon reconnection

### 6.3 Tools and Frameworks

- **Manual Testing**: Google Sheets for test execution tracking  
- **Performance Monitoring**: Chrome DevTools Network Throttling  
- **Accessibility Testing**: Browser DevTools, Screen Reader testing  
- **Defect Tracking**: Markdown-based defect log with GitHub integration  
- **Evidence Collection**: Screenshots and Google Drive documentation

---

## 7\. Overall Status

### 7.1 Testing Summary

- **Test Cases Executed**: 63 out of 63 planned (100%)  
- **Test Case Pass Rate**: 58 passed (92.1%)  
- **Test Cases Failed**: 5 failed (7.9%)  
- **Automation Coverage**: Manual testing only (0% automation)  
- **Critical User Journeys**: 100% passing (all critical user journeys verified)

### 7.2 Quality Assessment

Based on our testing results, the Bookstore v1.0 application has reached a satisfactory level of quality with the following observations:

**Strengths:**

- The core shopping functionality is stable and performs well across all tested browsers.  
- The Paystack payment integration works correctly with proper order creation and status updates.  
- The application handles data persistence gracefully using localStorage.  
- Cart operations function correctly with proper quantity validation and subtotal calculations.  
- Order management displays correctly with status timelines and order details.

**Areas of Concern:**

- Four medium-severity form validation issues in the shipping step need to be addressed ([BUG--001](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/26), [BUG--002](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/27), [BUG--003](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/29)).  
- Navbar search functionality not returning results ([BUG--000](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/26)) affects user experience but has a workaround.  
- Mobile layout issue on cart page ([BUG--004](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/30)) affects visual presentation but doesn't block functionality.

### 7.3 Risk Assessment

The remaining risks associated with releasing the application are:

1. **Form Validation Issues**: MEDIUM RISK  
     
   - Impact: Medium (users can enter invalid data, but can manually correct before submission)  
   - Mitigation: Users can manually verify and correct input. Development team to implement validation fixes in next release.

   

2. **Navbar Search Issue**: MEDIUM RISK  
     
   - Impact: Medium (affects search discoverability, but alternative search available)  
   - Mitigation: Users can use catalog page search as alternative. Development team to fix navbar search integration.

   

3. **Mobile Layout Issue**: LOW RISK  
     
   - Impact: Low (affects visual presentation only, functionality intact)  
   - Mitigation: Users can rotate device or zoom. Development team to apply CSS fixes.

### 7.4 Release Recommendation

Based on our comprehensive testing and the current status of the application, the QA team **RECOMMENDS PROCEEDING WITH THE RELEASE** of Bookstore v1.0 to production, with the following conditions:

1. Implement fixes for the shipping form validation issues([BUG--001](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/26), [BUG--002](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/27), [BUG--003](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/29)) in the next release cycle.  
     
2. Fix the navbar search functionality ([BUG--000](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/26)) to improve user experience.  
     
3. Apply CSS fixes for mobile cart page layout ([BUG--004](https://github.com/SteveTawali/wk-6-1-SteveTawali/issues/30)) for better mobile user experience.  
     
4. Enable monitoring for payment processing for the first 72 hours after release.  
     
5. Confirm the rollout plan includes a phased approach to allow for early detection of any unforeseen issues.

### 7.5 Post-Release Activities

The following activities are recommended after release:

1. Close monitoring of application performance metrics for the first week.  
     
2. Monitor user feedback on checkout flow and payment processing.  
     
3. Analysis of any error reports or user support tickets for patterns indicating undiscovered issues.  
     
4. Review of cart and order persistence behavior in production environment.  
     
5. Verification of form validation fixes once deployed.

---

## 8\. Requirements Traceability

The following table shows how key requirements were validated through testing:

| Requirement ID | Requirement Description | Test Case IDs | Status |
| :---- | :---- | :---- | :---- |
| **FR-O01** | Cart operations — add/remove/update quantities with persistence | TC-CART-001 through TC-CART-012 | PASSED |
| **FR-O02** | Checkout wizard — Shipping → Review → Payment → Confirmation with validation | TC-CHK-001 through TC-CHK-013 | **PARTIAL** (4 validation issues) |
| **FR-O03** | Payments — Paystack integration with order status updates | TC-PAY-001 through TC-PAY-008 | PASSED |
| **FR-O04** | Orders — Order details with status timeline | TC-ORD-001 through TC-ORD-006 | PASSED |
| **Catalog** | Search and discovery functionality | TC-CAT-000, TC-NAV-001, TC-NAV-002 | **PARTIAL** (navbar search issue) |
| **FR-X01** | Accessibility — Keyboard nav, screen reader, alt text | TC-A11Y-001, TC-A11Y-002, TC-A11Y-003 | PASSED |
| **FR-X02** | Performance — Network throttling, image loading | TC-PERF-001, TC-PERF-002, TC-PERF-003 | PASSED |
| **FR-X03** | Compatibility — Browser and device testing | TC-BROWSER-001 through TC-BROWSER-004, TC-DEVICE-001, TC-DEVICE-002 | **PARTIAL** (mobile layout issue) |

---

## 9\. Testing Challenges & Lessons Learned

### 9.1 Challenges Encountered

1. **Test Data Management**: Managing test data in localStorage required careful coordination to avoid test interference.  
     
   - **Solution**: Implemented clear test data cleanup procedures and isolated test scenarios.

   

2. **Payment Gateway Testing**: Paystack sandbox environment required careful setup and test card management.  
     
   - **Solution**: Documented test card numbers and payment scenarios clearly for consistent testing.

   

3. **Cross-Browser Testing**: Ensuring consistent behavior across different browsers required additional verification.  
     
   - **Solution**: Created browser-specific test checklists and prioritized critical user journeys.

   

4. **Form Validation Testing**: Identifying all edge cases for form validation required thorough boundary value analysis.  
     
   - **Solution**: Used systematic approach to test various invalid input combinations.

### 9.2 Lessons Learned

1. **Early Validation Testing**: Testing form validation early in the development cycle would have caught validation issues sooner.  
     
2. **Mobile-First Testing**: Testing mobile viewports earlier would have identified layout issues before final release.  
     
3. **Collaborative Defect Management**: Using markdown-based defect log with GitHub integration improved visibility and tracking.  
     
4. **Evidence Collection**: Systematic screenshot and documentation collection helped in defect reproduction and resolution.  
     
5. **Google Sheets Integration**: Using Google Sheets for test execution tracking improved team collaboration and real-time status updates.  
     
6. **Repository Collaboration with PRs and Project Board**: Using GitHub Pull Requests (PRs) for code reviews and documentation updates, combined with project board management, significantly enhanced team collaboration. The PR workflow enabled:  
     
   - Better code review and quality control  
   - Clear documentation of changes and rationale

---

## 10\. Appendices

### 10.1 Test Case Execution Details

Detailed test case execution results are available in:

- **Google Sheets**: [Test Scripts Execution Sheet](https://docs.google.com/spreadsheets/d/1HVTzzAeCkWOl7JnKip2kckogLFJ5EpZ_gWgSmEW5EL4/edit?usp=sharing)  
- **Markdown Reference**: [`tests/manual-test-scripts.md`](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/manual-test-scripts.md)

### 10.2 Traceability Matrix

The full Requirements Traceability Matrix linking requirements to test cases and their results is available in [`tests/traceability-metrics.md`.](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/traceability-metrics.md)

### 10.3 Test Data Used

Test data used during testing:

- Test books from `books.js` data file  
- Paystack test card: 4084084084084081 (CVV: 123, Expiry: 12/30)  
- Various shipping addresses and form inputs for validation testing

### 10.4 Defect Details

Complete details of all defects, including screenshots and reproduction steps, are available in:

- **Defect Log**: [`tests/defect-log.md`](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/defect-log.md)

### 10.5 Test Plan

The comprehensive test plan is available in [`tests/test-plan.md`](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/test-plan.md).

### 10.6 Project Management Exports

Jira/GitHub Project board exports, dashboard screenshots, and issue exports are available in:
- **Project Exports Directory**: [`tests/project-exports/`](https://github.com/SteveTawali/wk-6-1-SteveTawali/tree/main/tests/project-exports)
- Includes: Board screenshots, dashboard views, filter results, and issue exports (CSV)

---

## 11. Executive Summary (Quick Reference)

The Book Store App has successfully completed comprehensive functional testing with a **92.1% pass rate** across **63 executed test cases**, covering 100% of core features. Testing was performed in Paystack sandbox mode and validated across major browsers (Chrome, Firefox, Safari, Edge).

**Key Achievements:**

- ✅ All critical user journeys validated (Browse → Cart → Checkout → Payment)
- ✅ Cart persistence working reliably via localStorage
- ✅ Paystack payment integration functional in sandbox mode with proper order creation and status updates
- ✅ Core shopping functionality stable across all tested browsers (Chrome, Firefox, Safari, Edge)
- ✅ Order management displays correctly with status timelines and order details
- ✅ Accessibility features implemented (keyboard navigation, screen reader compatibility)
- ✅ 92.1% test case pass rate (58 passed out of 63 executed)

**Known Issues:**

- ⚠️ Four medium-severity form validation issues in shipping step (BUG--001, BUG--002, BUG--003)
- ⚠️ Navbar search functionality not returning results (BUG--000)
- ⚠️ Mobile layout issue on cart page (BUG--004)

**Recommendation:** The QA team recommends proceeding with release of v1.0.0, with monitoring of Paystack integration and addressing the identified validation issues in the next release cycle.

---

## 12. Approvals

The following stakeholders have reviewed this report and approve the release recommendation or have noted their concerns:

| Role | Name | Approval Date | Signature | Notes |
| :---- | :---- | :---- | :---- | :---- |
| Test Manager (QA Lead) | Anu | November 17, 2025 | \[Approved\] | Approves release with conditions noted in section 7.4 |
| Test Designer / Risk Analyst | Steven | November 17, 2025 | \[Approved\] | Reviewed and approved test coverage and risk assessment |
| Test Executor | Kevin | November 17, 2025 | \[Approved\] | Verified test execution results and defect reporting |
| Development Lead | TBD | TBD | \[Pending\] | Awaiting review |
| Product Owner | TBD | TBD | \[Pending\] | Awaiting review |
| Security Officer | TBD | TBD | \[Pending\] | Awaiting review |
| Release Manager | TBD | TBD | \[Pending\] | Awaiting review |

By signing above, approvers acknowledge they have reviewed this report in its entirety and understand the current state of the application, including any limitations, risks, and mitigation plans.

---

*End of Test Report*

