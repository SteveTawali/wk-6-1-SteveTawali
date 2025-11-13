# Traceability Matrix

*Project Name: BookStore QA PROJECT*
*Created: ${13/11/2025}*  
*Version: 1.0*  
*Last Updated: ${13/11/2025}*

## Requirements Coverage Matrix

| FR Code | Requirement Description | Test Cases | Coverage Status | Test Count |
|---------|-------------------------|------------|-----------------|------------|
| **FR-O01** | Cart operations — add/remove/update quantities with stock enforcement and persistence | TC-CART-001, TC-CART-002, TC-CART-003, TC-CART-004, TC-CART-005, TC-CART-006, TC-CART-007, TC-CART-008, TC-CART-009 | ✅ **100% Covered** | 9 |
| **FR-O02** | Checkout wizard — Shipping → Review → Payment → Confirmation with validation and navigation | TC-CHK-001, TC-CHK-002, TC-CHK-003, TC-CHK-004, TC-CHK-005, TC-CHK-006, TC-CHK-007, TC-CHK-008, TC-CHK-009, TC-CHK-010, TC-CHK-011, TC-CHK-012, TC-CHK-013 | ✅ **100% Covered** | 13 |
| **FR-O03** | Payments — Paystack init with configured currency; exact cents; success/cancel/error handling; verify updates order to Paid | TC-PAY-001, TC-PAY-002, TC-PAY-003, TC-PAY-004, TC-PAY-005, TC-PAY-006, TC-PAY-007, TC-PAY-008 | ✅ **100% Covered** | 8 |
| **FR-O04** | Orders — Order history/list; order details with status timeline; CSV export | TC-ORD-001, TC-ORD-002, TC-ORD-003, TC-ORD-004, TC-ORD-005, TC-ORD-006 | ✅ **100% Covered** | 6 |
| **FR-O05** | Order lifecycle — Status transitions Pending→Paid→Fulfilled→Delivered; Cancelled/Refunded with audit trail | TC-ORD-002, TC-ORD-006 | ⚠️ **33% Covered** | 2 |
| **Catalog** | Search and discovery functionality | TC-CAT-000, TC-NAV-001, TC-NAV-002, TC-NAV-003 | ✅ **100% Covered** | 4 |
| **FR-X01** | Accessibility — Labels, focus, aria-live; keyboard nav coverage | TC-A11Y-001, TC-A11Y-002, TC-A11Y-003 | ✅ **100% Covered** | 3 |
| **FR-X02** | Performance — LCP/TTI budgets met; lazy images; stable layout | TC-PERF-001, TC-PERF-002, TC-PERF-003 | ✅ **100% Covered** | 3 |
| **FR-X03** | Compatibility — Latest 2 browsers; responsive breakpoints validated | TC-BROWSER-001, TC-BROWSER-002, TC-BROWSER-003, TC-BROWSER-004, TC-DEVICE-001, TC-DEVICE-002 | ✅ **100% Covered** | 6 |
| **Integration** | End-to-end scenarios and system integration | TC-E2E-001, TC-E2E-002, TC-E2E-003 | ✅ **100% Covered** | 3 |
| **Edge Cases** | Error handling and boundary conditions | TC-EDGE-001, TC-EDGE-002, TC-EDGE-003, TC-EDGE-004, TC-EDGE-005, TC-EDGE-006, TC-BOUND-001, TC-BOUND-002, TC-BOUND-003 | ✅ **100% Covered** | 9 |

## Coverage Summary

| Category | Test Count | Percentage | Status |
|----------|------------|------------|--------|
| **Core Functional** | 36 | 52.2% | ✅ Excellent |
| **Checkout & Payments** | 21 | 30.4% | ✅ Excellent |
| **Non-Functional** | 12 | 17.4% | ✅ Good |
| **Total** | **69** | **100%** | |

## Coverage Gaps Analysis

### 🔴 Not Covered Requirements
| FR Code | Requirement | Impact | Priority |
|---------|-------------|--------|----------|
| **FR-R01** | Returns — 7-day window validation from delivery date | High | P2 |
| **FR-R02** | Refunds — Full/partial refund simulation; audit entries recorded | High | P2 |
| **FR-R03** | Admin approval — Return requests require admin approval before refund | Medium | P2 |
| **FR-U01** | Reviews — Only purchasers can submit; one per user/title | Medium | P2 |
| **FR-U02** | Moderation — Report/flag review; admin moderation queue | Medium | P2 |
| **FR-U03** | Q&A — Safe markdown subset; sanitation; scheme whitelist | Medium | P2 |
| **FR-M01** | Catalog CRUD — Admin can create/update/delete titles and metadata | High | P2 |
| **FR-M02** | Inventory — Adjust stock; low-stock warnings | Medium | P2 |
| **FR-M03** | Orders dashboard — Change statuses; process returns/refunds | High | P2 |
| **FR-M04** | Moderation — Manage reviews/Q&A flags | Low | P3 |
| **FR-M05** | Promotions — Manage promo banners and coupons | Low | P3 |
| **FR-N01** | Notifications — Unread count badge; in-app list; history | Medium | P2 |
| **FR-N02** | Mark all read — Batch mark; badge updates to 0 | Low | P3 |
| **FR-S01** | Sanitization — Block scripts and `javascript:`; allow safe markdown | ⚠️ **Partial** | P2 |
| **FR-S02** | URL scheme validation — Reject non-http(s) links in UGC | High | P2 |
| **FR-S03** | Storage errors — Gracefully handle quota exceeded and JSON parse failures | Medium | P2 |

### ⚠️ Partially Covered Requirements
| FR Code | Requirement | Current Coverage | Missing Tests |
|---------|-------------|------------------|---------------|
| **FR-O05** | Order lifecycle transitions | 2/6 scenarios | Fulfilled→Delivered, Cancelled, Refunded status transitions |
| **FR-S01** | Sanitization | 1/3 scenarios | XSS prevention, script blocking |

## Risk-Based Test Coverage

| Risk Level | Area | Test Coverage | Status |
|------------|------|---------------|--------|
| **🔴 Critical** | Payment Processing | 8 tests | ✅ Well Covered |
| **🔴 Critical** | Cart Operations | 9 tests | ✅ Well Covered |
| **🟡 High** | Checkout Flow | 13 tests | ✅ Well Covered |
| **🟡 High** | Order Management | 6 tests | ⚠️ Partial |
| **🟡 High** | Data Persistence | 5 tests | ✅ Good |
| **🟢 Medium** | Performance/A11Y | 6 tests | ✅ Adequate |
| **🟢 Medium** | Compatibility | 6 tests | ✅ Adequate |

*Traceability Matrix Summary: 69 existing tests provide excellent coverage for core functionality with identified gaps in admin features, reviews, returns, and advanced security.*