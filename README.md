# PRODIGY_WD_01
Secure Employee Management System built with Node.js, Express 5, and SQLite3. Features robust admin authentication via bcrypt password hashing and stateful session tracking. Enables secure, centralized CRUD operations on employee records through a protected, responsive dashboard, preventing unauthorized data exposure.

# employee-management-system

A secure, minimalist web application built with **Node.js**, **Express**, and **SQLite3** that allows administrators to easily manage employee records.

---

## 🚀 Features

* **Admin Authentication:** Secure login system using hashed passwords with `bcrypt`.


* **Session Management:** Restricts unauthorized visitors from accessing protected views like the admin dashboard using `express-session`.


* **Full CRUD Operations:** Create, read, update, and delete employee profile records dynamically.
* **Lightweight Storage:** Uses a self-contained, file-based SQLite database for zero-configuration deployment.



---

## 🛠️ Project Setup

### 1. Prerequisites

Ensure you have **Node.js** installed on your machine.

### 2. Installation

Clone the repository, open your terminal inside the project directory, and install the required dependencies:

```bash
npm install

```

### 3. Running the Server

Launch the application backend locally:

```bash
node server.js

```

Once running, open your web browser and navigate to:

```text
http://localhost:3000

```
