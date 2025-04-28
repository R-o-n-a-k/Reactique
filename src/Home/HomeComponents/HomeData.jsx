import img from "../../assets/favicon.png";
import comingSoon from "../../assets/project-images/coming-soon.png";
import calculator from "../../assets/project-images/calculator.png";
import quizz from "../../assets/project-images/quiz.png";
import chat from "../../assets/project-images/chat.png";
import toDo from "../../assets/project-images/to-do.png";
import quote from "../../assets/project-images/quote.png";
import gallery from "../../assets/project-images/gallery.png";
import bmi from "../../assets/project-images/bmi.png";
import ticTacToe from "../../assets/project-images/ticTacToe.png";
import weather from "../../assets/project-images/weather.png";
import stopwatch from "../../assets/project-images/stopwatch.png";
import blog from "../../assets/project-images/blog-website.png";
import recipe from "../../assets/project-images/recipe.png";
import eCommerce from "../../assets/project-images/eCommerce.png";
import expenseTracker from "../../assets/project-images/expense-tracker.png";
import musicPlayer from "../../assets/project-images/music-player.png";
import movieApp from "../../assets/project-images/movie-app.png";
import currencyConvertor from "../../assets/project-images/currency-convertor.png";
import socialMediaDashboard from "../../assets/project-images/social-media.png";
import recipeRecommendation from "../../assets/project-images/recipe-recommendation.png";

export const ProjectData = [
  {
    id: 1,
    type: "basic",
    demo: calculator,
    name: "Calculator",
    description:
      "Responsive React calculator with real-time input handling and basic math operations.",
    link: "/calculator",
  },
  {
    id: 2,
    type: "basic",
    demo: toDo,
    name: "To-Do",
    description:
      "Responsive React calculator with real-time input handling and basic math operations.",
    link: "to-do",
  },
  {
    id: 3,
    type: "basic",
    demo: quote,
    name: "Random Quote Generator",
    description:
      "Generates and displays a new inspirational or humorous quote on every click. Great for motivational boosts.",
    link: "/coming-soon",
  },
  {
    id: 4,
    type: "basic",
    demo: gallery,
    name: "Image Gallery",
    description:
      "A responsive and clean image gallery with lightbox preview and seamless grid layout for showcasing visuals.",
    link: "/coming-soon",
  },
  {
    id: 5,
    type: "basic",
    demo: bmi,
    name: "BMI Calculator",
    description:
      "Calculates Body Mass Index using height and weight, and provides category feedback like 'Underweight', 'Normal', or 'Overweight'",
    link: "/coming-soon",
  },
  {
    id: 6,
    type: "basic",
    demo: ticTacToe,
    name: "Tic Tac Toe",
    description:
      "A fun, interactive 2-player game with win detection, game reset, and a modern UI - built using React hooks.",
    link: "/coming-soon",
  },
  {
    id: 7,
    type: "basic",
    demo: weather,
    name: "Weather App",
    description:
      "Fetches real-time weather data including temperature, condition, and location info using OpenWeatherMap API.",
    link: "/coming-soon",
  },
  {
    id: 8,
    type: "basic",
    demo: stopwatch,
    name: "Stopwatch",
    description:
      "Fetches real-time weather data including temperature, condition, and location info using OpenWeatherMap API.",
    link: "/coming-soon",
  },
  {
    id: 9,
    type: "medium",
    demo: blog,
    name: "Blog",
    description:
      "A basic blogging interface allowing users to write, view, and read blog posts with a minimal design.",
    link: "/coming-soon",
  },
  {
    id: 10,
    type: "medium",
    demo: recipe,
    name: "Recipe App",
    description:
      "Lets users search for recipes, view ingredients, and cooking steps using an external recipe API.",
    link: "/coming-soon",
  },
  {
    id: 11,
    type: "hard",
    demo: eCommerce,
    name: "E-Commerce",
    description:
      "A front-end store interface with product listing, cart system, and dynamic filtering for a mock shopping experience.",
    link: "/coming-soon",
  },
  {
    id: 12,
    type: "hard",
    demo: expenseTracker,
    name: "Expense Tracker",
    description:
      "Allows users to add, delete, and view expenses in real-time with running balance and category tagging.",
    link: "/coming-soon",
  },
  {
    id: 13,
    type: "hard",
    demo: musicPlayer,
    name: "Music Player",
    description:
      "A sleek music interface with controls to play, pause, skip tracks, and manage playlists.",
    link: "/coming-soon",
  },
  {
    id: 14,
    type: "hard",
    demo: movieApp,
    name: "Movie App",
    description:
      "Showcases trending, popular, and upcoming movies fetched from an API, complete with posters and descriptions.",
    link: "/coming-soon",
  },
  {
    id: 15,
    type: "medium",
    demo: quizz,
    name: "Quizz",
    description:
      "An interactive quiz app built with React that tests users with multiple-choice questions and provides instant feedback.",
    link: "/coming-soon",
  },
  {
    id: 16,
    type: "hard",
    demo: chat,
    name: "Chat Application",
    description:
      "A real-time chat app built with React that enables seamless messaging between users with live updates.",
    link: "/coming-soon",
  },
  {
    id: 17,
    type: "hard",
    demo: socialMediaDashboard,
    name: "Social Media Dashboard",
    description:
      "Displays user statistics from platforms like Twitter or Instagram in a visually appealing dashboard.",
    link: "/coming-soon",
  },
  {
    id: 18,
    type: "medium",
    demo: currencyConvertor,
    name: "Live Currency Convertor",
    description:
      "Converts between currencies using real-time exchange rates, perfect for travelers or finance apps.",
    link: "/coming-soon",
  },
  {
    id: 19,
    type: "hard",
    demo: recipeRecommendation,
    name: "Recipe Recommendation",
    description:
      "Suggests meal ideas based on ingredients you have at home, reducing food waste and saving time.",
    link: "/coming-soon",
  },
];

export const creationsTab = [
  {
    name: "all",
  },
  {
    name: "basic",
  },
  {
    name: "medium",
  },
  {
    name: "hard",
  },
];

export const socialIcons = [
  {
    path: "https://ronakjpatel.in/",
    name: "fa-solid fa-code",
  },
  {
    path: "https://www.linkedin.com/in/ronak-j-patel/",
    name: "fa-brands fa-linkedin",
  },
  { path: "https://github.com/R-o-n-a-k", name: "fa-brands fa-github" },
];
