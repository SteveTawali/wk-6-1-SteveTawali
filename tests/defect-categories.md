# Defect Categories

**Team Name:** Cyber Pen  
**Date:** November 17, 2025  
**Version:** 1.0

---

## Purpose
This document defines standard defect categories for consistent bug reporting and tracking.

## 1. Functional Defects
**Description:** Features not working as specified in requirements

**Examples:**
- Payment processing fails
- Search returns incorrect results
- Cart calculations wrong
- Form validation missing

**Testing Focus:** Verify feature works per requirements

## 2. UI/UX Defects
**Description:** Visual, layout, or user experience issues

**Examples:**
- Layout breaks on mobile
- Inconsistent styling
- Poor navigation flow
- Missing error messages

**Testing Focus:** User interface and experience

## 3. Data Validation Defects
**Description:** Input validation and data handling issues

**Examples:**
- Invalid email formats accepted
- No maximum length enforcement
- Special characters breaking functionality
- Wrong data type acceptance

**Testing Focus:** Input sanitization and validation

## 4. Performance Defects
**Description:** Speed, loading, or resource usage issues

**Examples:**
- Slow page load times
- Memory leaks
- High CPU usage
- Poor network performance

**Testing Focus:** Application performance metrics

## 5. Accessibility Defects
**Description:** WCAG compliance and screen reader issues

**Examples:**
- Missing ARIA labels
- Poor color contrast
- Keyboard navigation broken
- Screen reader incompatibility

**Testing Focus:** Accessibility standards compliance


## 6. Compatibility Defects
**Description:** Browser or device-specific issues

**Examples:**
- Browser-specific layout issues
- JavaScript errors in specific browsers
- Mobile responsiveness problems
- Cross-platform functionality breaks

**Testing Focus:** Cross-browser and cross-device testing

---

## Severity vs Priority Definitions

### 🚨 Severity (Technical Impact)

| Level | Impact | Examples |
|-------|--------|----------|
| **Critical (S1)** | System crash, data loss, security breach | Payment failure, data corruption |
| **High (S2)** | Major feature broken, no workaround | Cannot complete checkout |
| **Medium (S3)** | Feature impaired, workaround exists | Search returns partial results |
| **Low (S4)** | Cosmetic, minor issues | Typo, alignment issue |

### 📋 Priority (Business Impact)

| Level | Business Impact | Response Time |
|-------|-----------------|---------------|
| **P1 - Urgent** | Blocks business operations |
| **P2 - High** | Affects key user journeys |
| **P3 - Medium** | Minor impact on UX | 
| **P4 - Low** | Cosmetic improvements |

---

## Template Usage

Always use the defect report template when logging new issues.
Refer to this document during triage meetings for consistent categorization.