# Serverless Portfolio Website & Visitor Counter (Frontend)

A clean, responsive, and performance-optimized digital resume and portfolio hosted on **AWS Amplify**. It dynamically tracks page visits by communicating with a serverless backend API built on AWS SAM.

---

## 🚀 Live Demo

* **Live Portfolio & Resume:** [https://main.d1jq9lgeqew9vu.amplifyapp.com/](https://main.d1jq9lgeqew9vu.amplifyapp.com/)
* **Backend Repository:** [Link to Backend Repo](https://github.com/sophjvlia/visitor-counter-backend)

---

## 🛠 Tech Stack

* **Hosting & CI/CD:** AWS Amplify (Automated build & deployment on `main` branch push)
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **API Integration:** Asynchronous `fetch()` API calling AWS API Gateway with custom query parameters (`?page=home`)

---

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/visitor-counter-frontend.git
   cd visitor-counter-frontend
   ```

2. Open `index.html` directly in your browser or run a local web server (e.g., VS Code Live Server).

---

## 🔄 Deployment Pipeline

This repository is directly connected to **AWS Amplify**. Any commits pushed to the `main` branch will automatically trigger Amplify's automated deployment pipeline.
