# Shopify Announcement Banner App

A Shopify Embedded App built using the MERN stack that allows merchants to create announcement banners from the Shopify Admin panel and display them across the storefront using Shopify Metafields and a Theme App Extension.

---

## Features

### Admin Dashboard

* Create and manage announcement messages from Shopify Admin.
* Modern Polaris-based UI.
* Real-time announcement updates.

### MongoDB Integration

* Stores every announcement in MongoDB Atlas.
* Maintains an audit history with timestamps.
* Allows tracking of previously created announcements.

### Shopify Metafields Integration

* Saves announcements to Shopify Shop Metafields using the Shopify Admin GraphQL API.
* Namespace: `my_app`
* Key: `announcement`

### Theme App Extension

* Uses a Shopify App Embed Block.
* Reads announcement data directly from Shopify Metafields.
* Displays a sticky announcement banner across the storefront.
* Responsive design for desktop and mobile devices.

---

## Architecture

Admin Dashboard
↓
MongoDB Atlas
↓
Shopify Admin GraphQL API
↓
Shop Metafield (my_app.announcement)
↓
Theme App Extension
↓
Storefront Banner

---

## Tech Stack

### Frontend

* React
* Shopify Polaris
* Shopify App Bridge

### Backend

* Node.js
* Express
* React Router

### Database

* MongoDB Atlas
* Mongoose

### Shopify

* Shopify Admin GraphQL API
* Shopify Metafields
* Theme App Extensions

---

## Project Structure

announcement-app/

├── app/

├── extensions/

│ └── announcement-banner/

├── prisma/

├── public/

├── package.json

└── README.md

---

## MongoDB Document Example

```json
{
  "_id": "686xxxxxx",
  "text": "Big Summer Sale 70% OFF",
  "createdAt": "2026-06-28T07:28:27.988Z",
  "updatedAt": "2026-06-28T07:28:27.988Z"
}
```

## Shopify Metafield Example

Namespace:

```text
my_app
```

Key:

```text
announcement
```

Value:

```text
Big Summer Sale 70% OFF
```

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/SouravJ7860/shopify-app.git
cd shopify-app
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
```

### Run Application

```bash
shopify app dev
```

---

## How It Works

1. Merchant enters announcement text in Shopify Admin.
2. Data is stored in MongoDB Atlas.
3. Backend syncs announcement to Shopify Metafields.
4. Theme App Extension reads the metafield.
5. Announcement appears instantly on the storefront.

---

## Assignment Requirements Covered

### Admin Dashboard

* Announcement Text Input
* Save Button

### Backend & Database

* MongoDB Storage
* Timestamp Audit History

### Shopify API

* GraphQL Metafield Update

### Storefront

* Theme App Extension
* App Embed Block
* Dynamic Metafield Rendering

### Repository

* Public GitHub Repository

---

## Demo Flow

1. Enter announcement text in Shopify Admin.
2. Click Save.
3. Verify document in MongoDB Atlas.
4. Verify metafield update in Shopify GraphQL.
5. View announcement banner on the storefront.

---

## Author

Sourav

GitHub:
https://github.com/SouravJ7860

Repository:
https://github.com/SouravJ7860/shopify-app
