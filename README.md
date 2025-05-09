# LaughLines API 🤖

[![Azure DevOps](https://img.shields.io/badge/Deployed%20via-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/LaughLines%20API)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://laughlines-api-dtgjbqgubfgsbceg.canadacentral-01.azurewebsites.net/)

**LaughLines** is a public RESTful API that serves up categorized, developer-friendly jokes. It’s built with Express and Node.js and follows REST principles like statelessness, standardized HTTP methods, resource-based routing, and separation between client and server. The API also features full Swagger documentation and a clean, modular UI served via EJS.

---

## 🖥️ Live Site

👉 **[LaughLines API](https://laughlines-api-dtgjbqgubfgsbceg.canadacentral-01.azurewebsites.net/)** _(Hosted on Microsoft Azure)_<br>
👉 **[Swagger Docs](https://laughlines-api-dtgjbqgubfgsbceg.canadacentral-01.azurewebsites.net/api-docs)** _(Interactive API interface)_<br>
👉 **[Azure DevOps Project](https://dev.azure.com/Junaid-Arif/LaughLines%20API)** _(Deployed on Azure DevOps)_

---

## 🎯 Purpose

**LaughLines-API** was created to strengthen my understanding of:

- Designing **RESTful APIs** using **Express** and **Node.js**
- Applying REST conventions like **statelessness**, **standard HTTP methods**, and **resource URIs**
- Using **`res.json()`** to serve data as JSON from JS objects
- Differentiating **`req.params`** vs **`req.query`** in endpoint design
- Leveraging core **JavaScript array methods** like `.filter()`, `.find()`, and `.splice()`
- Structuring dynamic APIs that support **CRUD operations**
- Modularizing code into separate files (`index.js`, `jokes.js`, etc.)
- Generating and styling interactive **Swagger API documentation**
- Deploying an API with **Azure App Service** and **Azure DevOps**

---

## 🛠️ Features

- **Get a random joke** via `/random`
- **Retrieve a joke by ID** via `/jokes/:id`
- **Filter jokes by category/type** using `/filter?type=wordplay`
- **Create, update, and delete jokes** via `POST`, `PUT`, `PATCH`, and `DELETE`
- **Admin endpoint**: `/all` can delete all jokes using a master key (`?key=...`)
- **Swagger UI documentation** accessible at `/api-docs`
- **In-memory data storage** (non-persistent)
- **Modular architecture** with separate files for logic, views, and styles
- **Minimal EJS homepage** with quick links and live API status

---

## 💻 Technologies Used

- **Node.js** — Server runtime
- **Express** — Web framework
- **EJS** — For dynamic HTML rendering
- **Swagger UI / OpenAPI** — For interactive API documentation
- **Body-Parser** — For parsing form requests
- **CSS3 / Flexbox** — Custom UI styling for homepage
- **Microsoft Azure App Service** — Deployment platform
- **Azure DevOps** — For CI/CD pipeline and repository management

---

## 🧠 What I Learned

- How to create a **RESTful API from scratch**
- The difference between **path parameters (`req.params`)** and **query parameters (`req.query`)**
- Using **`.filter()`**, **`.find()`**, and **`.splice()`** for working with arrays
- How to serve JSON responses using `res.json()`
- How to protect endpoints (e.g., master key for `/all`) without user authentication
- Writing clean, minimal Swagger documentation with parameter, schema, and response details
- Setting up an interactive landing page with EJS and CSS
- Managing **local environment variables** with `.env` for storing secrets like the master key

---

## 🚀 Deployment & Workflow

The API is deployed on **Azure App Service** and configured to auto-deploy through **Azure DevOps**.

### 🛠 Deployment Setup

1. **Azure App Service**  
   Created a new App Service instance on Azure for hosting.

2. **GitHub Repo**  
   Pushed project to GitHub at [`LaughLines-API`](https://github.com/junaid-mohammad/LaughLines-API)

3. **Azure DevOps Project**  
   Set up project in Azure DevOps and connected it to GitHub repo.

4. **Added DevOps as a Remote**

   ```bash
   git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/LaughLines%20API/_git/LaughLines%20API
   ```

5. **Pushed to Both Remotes**

   ```bash
   git push origin main   # GitHub
   git push azure main    # Azure triggers deployment
   ```

6. **Connected App Service to DevOps**
   Configured CI/CD pipeline in Deployment Center.

7. **Added Environment Variable on Azure**
   Navigated to **Azure App Service > Configuration > Application settings**
   and added a new key-value pair:

   - Key: `MASTER_KEY`
   - Value: _your-secret-key-here_
     This is used to authorize destructive operations like deleting all jokes.

8. **Added Start Script to package.json**
   Included the following line so Azure knows how to start the app:

   ```json
   "start": "node index.js"
   ```

---

### 🔥 Deployment Workflow

```bash
git add .
git commit -m "New joke routes + updated Swagger docs"
git push origin main     # Push to GitHub
git push azure main      # Push to Azure DevOps (deploys automatically)
```

---

## ❗ In-Memory Disclaimer

> ⚠️ **This API uses an in-memory data store. All changes are temporary and will be lost when the server restarts.** No database is currently implemented.

---

## 📊 API Categories

Jokes can be filtered by the following types:

```
["Animals", "Food", "Math", "Spooky", "Puns", "Music", "Sports", "Wordplay", "Tech"]
```

Use `/filter?type=Food` to retrieve jokes in a category.

---

## 📄 Swagger Reference

Full API documentation is available and interactive at:

👉 **[localhost:3000/api-docs](http://localhost:3000/api-docs)**
👉 **[Production API Docs](https://laughlines-api-dtgjbqgubfgsbceg.canadacentral-01.azurewebsites.net/api-docs)**

---

## 🤝 Contribution

This project was built as a portfolio/demo API.
Feel free to fork it, explore, remix, or suggest improvements!

---

## 📄 License

This project is open-source and free to use for personal or educational purposes.

---

## 🔗 Credits

- Inspired by the need to learn API design and deployment using Node.js.
- Design inspired by Swagger UI and Bored API’s landing page.
