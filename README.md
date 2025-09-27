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

- 👥📊 **Dashboard – Home Page**

<img width="950" height="839" alt="Home Page" src="https://github.com/user-attachments/assets/9071bb7b-b050-46e2-a020-7cf6140aba9f" />

 
- 🧑‍💼 **Manager List – View All Managers**


<img width="1851" height="865" alt="managerList" src="https://github.com/user-attachments/assets/5e5de4de-f9b6-4965-a8f8-53fa26a45ee4" />


- ➕ **Create Manager – Add New Manager**


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b8b6fadb-2f6d-4e15-8916-096120ca70f4" />

 
- 👤 **Manager Detail View**

  
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e377f28b-1549-485a-9bcf-0bb4116f7c57" />

 
- 🎯 **Match List – Upcoming & Past Matches**


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6d8a3528-8c27-4a35-8b71-ac9b7cba1a55" />


- ➕ **Create / Edit Match**

  
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d3af2155-508a-418f-8d61-55e5f7367298" />

 
 - 📋✔️ **Player Evaluation Management**


<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e65baf5f-713f-4e9e-8c5f-15ea931a2696" />


---

### ▶️ How to Run

#### Backend
```bash
cd Player_Management_System_React_CoreWebApi
dotnet ef database update
dotnet run
```

#### Frontend
```bash
cd client
npm install
npm start
```
---

### 🤝 Team Credit  
This project was developed in collaboration with my batchmates as part of a group project.
Each member contributed individual modules, especially within the Player Management, Trainer sections, ensuring a clean, modular, and testable architecture.

---

### 📢 Disclaimer 
This repository is intended for learning and demonstration purposes only.
All contributions listed under “My Contributions” were individually developed by me (Mahia Mosarrat) unless explicitly stated otherwise.



