---
title: Roles and permission
sidebar:
  order: 5
---

# Roles and Permissions Overview

This document provides an overview of the roles and their associated permissions in **undb**. Each section is categorized by the area of functionality, such as **Space**, **Base**, **Table**, **Field**, **Record**, **Sharing**, and **Authorization**.

## Space Permissions

| Action                | Owner | Admin | Editor | Viewer |
| --------------------- | :---: | :---: | :----: | :----: |
| List all spaces       |  ✅   |  ✅   |   ✅   |   ✅   |
| Read space details    |  ✅   |  ✅   |   ✅   |   ✅   |
| Update space settings |  ✅   |  ❌   |   ❌   |   ❌   |
| Delete a space        |  ✅   |  ❌   |   ❌   |   ❌   |

## Base Permissions

| Action               | Owner | Admin | Editor | Viewer |
| -------------------- | :---: | :---: | :----: | :----: |
| Create a base        |  ✅   |  ✅   |   ✅   |   ❌   |
| List all bases       |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete a base        |  ✅   |  ✅   |   ❌   |   ❌   |
| Read base details    |  ✅   |  ✅   |   ✅   |   ✅   |
| Update base settings |  ✅   |  ✅   |   ✅   |   ❌   |

## Table Permissions

| Action                | Owner | Admin | Editor | Viewer |
| --------------------- | :---: | :---: | :----: | :----: |
| Create a table        |  ✅   |  ✅   |   ✅   |   ❌   |
| List all tables       |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete a table        |  ✅   |  ✅   |   ❌   |   ❌   |
| Read table details    |  ✅   |  ✅   |   ✅   |   ✅   |
| Update table settings |  ✅   |  ✅   |   ✅   |   ❌   |

## Field Permissions

| Action                | Owner | Admin | Editor | Viewer |
| --------------------- | :---: | :---: | :----: | :----: |
| Create a field        |  ✅   |  ✅   |   ❌   |   ❌   |
| Update field settings |  ✅   |  ✅   |   ❌   |   ❌   |
| Delete a field        |  ✅   |  ✅   |   ❌   |   ❌   |

## Record Permissions

| Action                | Owner | Admin | Editor | Viewer |
| --------------------- | :---: | :---: | :----: | :----: |
| Create a record       |  ✅   |  ✅   |   ✅   |   ❌   |
| List all records      |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete a record       |  ✅   |  ✅   |   ✅   |   ❌   |
| Read record details   |  ✅   |  ✅   |   ✅   |   ✅   |
| Update record details |  ✅   |  ✅   |   ✅   |   ❌   |
| Download record data  |  ✅   |  ✅   |   ✅   |   ❌   |

## Sharing Permissions

| Action          | Owner | Admin | Editor | Viewer |
| --------------- | :---: | :---: | :----: | :----: |
| Enable sharing  |  ✅   |  ✅   |   ✅   |   ❌   |
| Disable sharing |  ✅   |  ✅   |   ✅   |   ❌   |

## Authorization Permissions

| Action               | Owner | Admin | Editor | Viewer |
| -------------------- | :---: | :---: | :----: | :----: |
| Invite users         |  ✅   |  ✅   |   ✅   |   ✅   |
| List all invitations |  ✅   |  ✅   |   ✅   |   ✅   |
| Delete an invitation |  ✅   |  ✅   |   ❌   |   ❌   |
