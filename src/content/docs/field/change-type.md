---
title: Update Field Type
sidebar:
  order: 6
---

# Field Type Conversion Guide

## Overview

Undb supports conversion between different field types. The conversion process preserves original data when possible, but some incompatible conversions will result in data clearing.

## Conversion Matrix

| From/To | Text | Number | Date | DateRange | Checkbox | Select | User | Email | URL | Currency |
|---------|------|---------|------|------------|-----------|---------|------|--------|-----|-----------|
| Text | ✅ Keep | ⚠️ Parse | ⚠️ Parse valid dates | ⚠️ Parse valid dates | ⚠️ true/yes/1=true | ⚠️ Match options | ⚠️ Match users | ⚠️ Keep valid | ⚠️ Keep valid | ⚠️ Parse |
| Number | ✅ Convert | ✅ Keep | ✅ Unix timestamp | ✅ Unix timestamp | ✅ 0=false | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ✅ 100 |
| Date | ✅ ISO string | ✅ Timestamp | ✅ Keep | ✅ Same start/end | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear |
| DateRange | ✅ ISO string | ❌ Clear | ✅ Start date | ✅ Keep | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear |
| Checkbox | ✅ true/false | ✅ 1/0 | ❌ Clear | ❌ Clear | ✅ Keep | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear |
| Select | ✅ Option name | ❌ Clear | ❌ Clear | ❌ Clear | ✅ Keep | ✅ Keep | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear |
| User | ✅ Username | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ✅ Keep | ❌ Clear | ❌ Clear | ❌ Clear |
| Email | ✅ Keep | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ✅ Keep | ❌ Clear | ❌ Clear |
| URL | ✅ Keep | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ✅ Keep | ❌ Clear |
| Currency | ✅ Keep | ✅ /100 | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ❌ Clear | ✅ Keep |

### Legend:
- ✅ Full support with data preservation
- ⚠️ Conditional conversion (data might be cleared if invalid)
- ❌ Data will be cleared

## Data Validation Rules

### Text Conversions
- To `Email`: Must match email format (@.)
- To `URL`: Must start with "http"
- To `Date`: Must be parseable as date
- To `DateRange`: Must be parseable as date, will set same start/end date
- To `Checkbox`: "true"/"yes"/"1" = true, others = false
- To `User`: Must match existing username/email
- To `Select`: Must match option names

### Number Conversions
- To `Date`: Treated as Unix timestamp
- To `Checkbox`: 0 = false, others = true
- To `Currency`: Multiplied by 100 (cents conversion)

### Range Limitations
When converting to types with range constraints (rating, percentage, etc.):
- Values above maximum are capped at maximum
- Values below minimum are capped at minimum

## Important Notes
- Conversions are irreversible - backup important data before converting
- Some conversions may result in precision loss
- Test with a small dataset first to verify conversion results
- Invalid data for target type will be set to NULL
- Currency values are stored as cents (integer)
- Reference fields cannot be converted to other types
- Computed fields (`Formula`, `Rollup`, etc.) will always clear data when converting to other types
