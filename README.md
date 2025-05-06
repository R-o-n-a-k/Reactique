# React Projects Canvas
<p align="center">
  A responsive, scalable, and beginner-to-advanced gallery of React.js projects by <strong><a href="https://ronakjpatel.in/">Ronak Patel</a></strong>
</p>
<p align="center">
  <img src="https://github.com/R-o-n-a-k/R-o-n-a-k/blob/a989108d33bbf941043d03b9b663a2ce43a9b4ec/assets/ReactProjectCanvas.gif?raw=true" alt="React Projects Banner" width="100%" />
</p>


## 🚀 About the Project

This repository is a **canvas-style showcase** of my React projects ranging from **beginner to advanced** level. It’s designed not just for practice and display, but also as a **starter framework** for developers who want to organize and scale their own React projects easily.

It’s **fully responsive**, features **tab-based filtering**, and comes with a **plug-and-play structure** so others can add their own projects with minimal effort.

### 🌐 Technologies Used

- **Frontend:** React, JavaScript
- **Styling:** CSS
- **Animation:** [animation-on-scroll](https://github.com/michalsnik/aos)
- **Email Integration:** [EmailJS](https://www.emailjs.com/).
- **Hosting & Deployment:** Netlify & Hostinger


### ✨ Features

- 🎯 Gallery-style project layout
- 🧩 Easy integration of new projects
- 🔍 Filter projects by category using tabs
- 🧱 Clean and scalable folder structure
- 📁 Modular project structure
- 🧭 Dynamic routing
- 📱 Responsive design

### 📂 Folder Structure

<pre>
React-Projects/
│
├── /node_modules
├── /src
|   ├── /assets  #Adding project images
│   ├── /Home  #Homepage for the website
│   ├── /projects  #Adding new projects
│   ├── /routes  #Adding routes for the new project added
│   ├── /components  #UI elements and layout
│   ├── App.jsx
│   ├──App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
</pre>

### 🧑‍💻 How to Add Your Own Project

>This repository serves as a template version of my Canvas. Feel free to fork, modify and add your own project gallery.

To run this project locally:

1. **Clone the repository:**
```
git clone https://github.com/R-o-n-a-k/React-Projects.git

cd React-Projects
```

2. **Install dependencies:**

```
npm install
```

3. **Run the development server:**

```
npm run dev
```

4. Open localhost link to view it in the browser.

Now adding your own project is easy! Just follow these two steps:

- **Create a folder** in `src/projects/` with your project.
- **Add your project entry** to the data array in `src/Home/HomeComponents/HomeData` and configure a new `<Route />` in `routes/AppRoutes.jsx`.

Done! Your project now appears in the UI and can be filtered by category.

### 📎 Useful Links

- 🖥️ [Live Demo](https://react-projects-ronak.netlify.app/)
- 📘 [React Documentation](https://reactjs.org/)

<hr>

## 📫 Contact

Made with ❤️ by [Ronak Patel](https://ronakjpatel.in/)  
Feel free to connect, contribute, or fork!
