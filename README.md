# 🏅 Player Management System – Group Project

### Overview  
This is a **comprehensive Player Management System** developed as a **group project** using **ASP.NET Core Web API**, **React**, and **SQL Server**. The system supports various player management operations including **Player Registration**, **Performance Evaluation**, **Manager & Trainer Management**, **Match Scheduling**, and more.

Our objective was to build a **real-world, scalable solution** that automates player development operations—enabling smooth management of player profiles, training schedules, evaluation progress, and skill tracking.

---

### 👩‍💻 My Contributions (Mahia Mosarrat)

Along with a teammate, I **designed and maintained the complete SQL Server database schema and relationships**.  
Individually, I developed and implemented the following **core modules**:

#### 🧑‍💼 Manager Management
- Developed full **CRUD functionality** using **React**.
- Integrated dynamic fields including **Trainer Assignment** and **Joining Date** dropdowns.
- Implemented **separate Create and Edit pages** with robust form validation.

#### 🏟️ Match Scheduling
- Built functionalities to **create, update, and delete matches**.
- Maintained **referential integrity** using dropdowns for match format and relational data handling.

#### 📝 Player Performance Evaluation
- Implemented **evaluation logic** based on selected **Evaluation Categories** and **Evaluation Types**.
- Designed a **clean master-detail layout** for managing evaluations and billing operations.

➡️ All these modules were built using **ASP.NET Core Web API (v8)** for the backend and **React** for the frontend, styled with **Bootstrap 5**.

---

### 🧾 Backend Controller Structure  
While the **Player**, **Trainer**, and **Training** modules were developed collaboratively, the following modules were developed by me:

- `PlayerEvaluationsController.cs`  
- `MatchesController.cs`  
- `MatchFormatsController.cs`  
- `ManagersController.cs`  
- `EvaluationCategoriesController.cs`  
- `EvaluationTypesController.cs`  
- **SQL Database Schema** (collaboratively with one teammate)

---

### 💻 Technologies Used

- **ASP.NET Core Web API (v8)**
- **Entity Framework Core (Code First)**
- **React**
- **SQL Server 2022**
- **Bootstrap 5**
- **Git & GitHub**

---

### 📸 Module Screenshots

- 📋 **Dashboard – Home Page**
- 📋 **Manager List – View All Managers**
- ➕ **Create Manager – Add New Manager**
- 📄 **Manager Detail View**
- 🧪 **Match List – Upcoming & Past Matches**
- ➕ **Create / Edit Match**
- 💳 **Player Evaluation Management – Evaluation & Billing Interface**
- 📄 **Performance Report Generation – Evaluation Reports**

---

### ▶️ How to Run

#### Backend
```bash
cd Player_Management_System_React_CoreWebApi
dotnet ef database update
dotnet run
