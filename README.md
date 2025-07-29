# Reactique
<p align="center">
  <img src="https://github.com/R-o-n-a-k/assets/blob/40b401458ae867b491ec9390bd8de3d8d5a42389/assets/ReactProjectCanvas.gif?raw=true" alt="React Projects Banner" width="100%" />
</p>
<p align="center">
  A responsive, scalable, and beginner-to-advanced gallery of React.js projects by <strong><a href="https://ronakjpatel.in/">Ronak</a></strong>
</p>


## 🚀 About the Project

This repository is a **canvas-style showcase** of my React projects ranging from **beginner to advanced** level. It’s designed not just for practice and display, but also as a **starter framework** for developers who want to organize and scale their own React projects easily.

It’s **fully responsive**, features **tab-based filtering**, and comes with a **plug-and-play structure** so others can add their own projects with minimal effort.

### 🛠️ Technologies Used

- **Frontend:** React, JavaScript
- **Styling:** CSS
- **Animation:** [animation-on-scroll](https://github.com/michalsnik/aos)
- **Email Integration:** [EmailJS](https://www.emailjs.com/).
- **Hosting & Deployment:** Netlify & Hostinger


### ✨ Features

- Gallery-style project layout
- Easy integration of new projects
- Filter projects by category using tabs
- Clean and scalable folder structure
- Modular project structure
- Dynamic routing
- Responsive design

### 📂 Folder Structure

<pre>
Reactique/
│
├── /node_modules
├── /src
|   ├── /assets  #Adding project images
│   ├── /Home  #Homepage for the website
│   ├── /projects  #Adding new projects
│   ├── /routes  #Adding routes for the new project added
│   ├── /components  #UI elements and layout
│   ├── App.jsx
│   ├── App.css
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
https://github.com/R-o-n-a-k/Reactique.git

cd Reactique
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

- [Live Demo](https://reactique.netlify.app/)
- [React Documentation](https://reactjs.org/)

## 📫 Contact
Want to collabrate and build something great? <p> <a href="mailto:ronak.p.1206@gmail.com"><img src="https://img.shields.io/badge/email-%23D14836.svg?&style=for-the-badge&logo=email&logoColor=white" height="25">
</a></p> 

<hr>
<p align="center">Curated with React, crafted for devs who love to build and scale 🎨</p>

