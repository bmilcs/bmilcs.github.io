import adminDashboard from '../assets/admin_dashboard/screenshot.jpg';
import battleshipGameplay from '../assets/battleship/gameplay-1.jpg';
import battleshipGameplay2 from '../assets/battleship/gameplay-2.jpg';
import battleshipHome from '../assets/battleship/home.jpg';
import battleshipMenu from '../assets/battleship/menu.jpg';
import battleshipVictory from '../assets/battleship/victory.jpg';
import calculatorCalculations from '../assets/calculator/calculations.jpg';
import calculatorEmpty from '../assets/calculator/empty.jpg';
import comedyComedian from '../assets/comedy/comedian-page.jpg';
import comedyHome from '../assets/comedy/home-page.jpg';
import cvApp from '../assets/cv/screenshot.jpg';
import cavityHome from '../assets/early_clients/cavity-v2.0.jpg';
import headAboveWater from '../assets/early_clients/head-above-water-v1.0.jpg';
import kashetaFarmsHome from '../assets/early_clients/kasheta-farms.jpg';
import kashetaPowerEquipmentHome from '../assets/early_clients/kasheta-power-equip.jpg';
import kriegHome from '../assets/early_clients/krieg-home.jpg';
import kriegProduct from '../assets/early_clients/krieg-product.jpg';
import liarcBio from '../assets/early_clients/liarc-v1.0-bio.jpg';
import malachiConstantAboutV2 from '../assets/early_clients/mc-about-v2.0.jpg';
import malachiConstantHomeV2 from '../assets/early_clients/mc-home-v2.0.jpg';
import malachiConstantHomeV1 from '../assets/early_clients/mc-v1.0.jpg';
import nohoPetsittersDog from '../assets/early_clients/noho-dog-services.jpg';
import nohoPetsittersHome from '../assets/early_clients/noho-home.jpg';
import etchASketchDrawing from '../assets/etch_a_sketch/drawing.jpg';
import libraryAdd from '../assets/library/add.jpg';
import libraryEdit from '../assets/library/edit.jpg';
import libraryHome from '../assets/library/home.jpg';
import memoryCardGame from '../assets/memory_card/screenshot.jpg';
import restaurantContact from '../assets/restaurant/contact.jpg';
import restaurantHome from '../assets/restaurant/home.jpg';
import restaurantMenu from '../assets/restaurant/menu.jpg';
import shoppingCartCart from '../assets/shopping_cart/desktop-cart.jpg';
import shoppingCartHome from '../assets/shopping_cart/desktop-home.jpg';
import shoppingCartShopping from '../assets/shopping_cart/desktop-shop.jpg';
import signupFormEmpty from '../assets/signup_form/empty.jpg';
import signupFormValidation from '../assets/signup_form/validation.jpg';
import ticTacToeGameplay from '../assets/tictactoe/gameplay.jpg';
import ticTacToeHome from '../assets/tictactoe/home.jpg';
import ticTacToeIntro from '../assets/tictactoe/intro.jpg';
import ticTacToeVictory from '../assets/tictactoe/victory.jpg';
import todoList from '../assets/todo/screenshot.jpg';
import waldoVictory from '../assets/waldo/gameover.jpg';
import waldoGameplay1 from '../assets/waldo/gameplay-1.jpg';
import waldoGameplay2 from '../assets/waldo/gameplay-2.jpg';
import waldoGameplay3 from '../assets/waldo/gameplay-3.jpg';
import waldoHome from '../assets/waldo/home.jpg';
import weatherApp from '../assets/weather/screenshot.jpg';

export interface IProject {
  title: string;
  links?: {
    live: string;
    repo: string;
  };
  techIcons: TTech[];
  screenshots: TScreenshot[];
  description?: { type: 'header' | 'p'; value: string }[];
  bulletPoints?: string[];
}

export type TScreenshot = {
  url: string;
  alt: string;
};

type TTech =
  | 'react'
  | 'redux'
  | 'typescript'
  | 'javascript'
  | 'css'
  | 'sass'
  | 'firebase'
  | 'node'
  | 'html'
  | 'jest'
  | 'eslint'
  | 'babel'
  | 'webpack';

const PROJECTS: IProject[] = [
  {
    title: 'the comedy db',
    links: {
      live: 'https://comedy.bmilcs.com',
      repo: 'https://github.com/bmilcs/odin-javascript-final-project',
    },
    techIcons: ['react', 'redux', 'typescript', 'sass', 'firebase', 'node', 'eslint'],
    screenshots: [
      { url: comedyHome, alt: 'The Comedy DB Desktop Home Screenshot' },
      { url: comedyComedian, alt: 'The Comedy DB Desktop Special Screenshot' },
    ],
    description: [
      { type: 'header', value: 'The Inspiration' },
      {
        type: 'p',
        value:
          'I love standup and listen to comedy podcasts more often than I would like to admit. With the countless streaming platforms out there, even I find it challenging to stay up to date and not miss out when a comedian releases new a special. ',
      },
      {
        type: 'p',
        value:
          'Standup comedy is a fairly small community, but I wanted users to find new comedians to follow and to be able to add their favorite comedians if missing from the site. Email notifications were a must. Nobody wants to check a website everyday for content that is released as infrequently as standup specials are. The most prolific comedians release new work once a year, but more often that not, there are several years in between. ',
      },
      { type: 'header', value: 'High Level Breakdown' },
      {
        type: 'p',
        value:
          'Powered by TMDB, Firebase Firestore & Cloud Functions running on Node v18, I created pubsub functions that fetch the latest specials for all comedians in the database on a 12 hour interval. When users sign up and favorite a comedian, they receive e-mail notifications (via node-mailer) & GUI notifications (via database entries) whenever that comedian releases a new special. ',
      },
      {
        type: 'p',
        value:
          'Users can add dynamically new comedians to the site by using the search bar. The initial search results page shows existing comedians and a list of people from the TMDB People API. To prevent actors from being added, extra API calls are issued to verify that the person has content with the TMDB standup keyword.',
      },
      {
        type: 'p',
        value:
          'Redux tool kit was used to handle state for user information, all comedians & specials.',
      },
    ],
    bulletPoints: ['react-router-dom', 'react-icons', 'react-router-dom', 'vite'],
  },

  {
    title: 'where is waldo?',
    links: {
      live: 'https://bmilcs.com/odin-wheres-waldo/',
      repo: 'https://github.com/bmilcs/odin-wheres-waldo',
    },
    techIcons: ['react', 'redux', 'typescript', 'sass', 'firebase'],
    screenshots: [
      { url: waldoHome, alt: 'Wheres Waldo Home Screenshot' },
      { url: waldoGameplay1, alt: 'Wheres Waldo Gameplay Screenshot' },
      { url: waldoGameplay2, alt: 'Wheres Waldo Gameplay Screenshot' },
      { url: waldoGameplay3, alt: 'Wheres Waldo Gameplay Screenshot' },
      { url: waldoVictory, alt: 'Wheres Waldo Victory Screenshot' },
    ],
    description: [
      { type: 'header', value: 'A Photo Tagging Desktop App' },
      {
        type: 'p',
        value:
          'This project has a lot of moving parts: React, TypeScript, Redux Tool Kit & SASS on the frontend and Firebase Firestore & Cloud Functions on the backend. Level & character data is loaded from constant arrays of objects for the home page, stored in Redux slices when a level is launched and is tied to the DOM with React. The scoreboard & character locations for each level are stored in Firebase Firestore, a NoSQL-based database. During gameplay, users select coordinates on a large image and character locations are validated with async function calls to Firebase Cloud Functions.',
      },
      {
        type: 'p',
        value:
          'After completing a level, users are able to add their name to the leaderboard with a form and are presented with a list of the top scores for that level.',
      },
    ],
    bulletPoints: ['custom hooks', 'high order components', 'bem naming', 'asynchronous'],
  },

  {
    title: 'shopping cart',
    links: {
      live: 'https://bmilcs.github.io/odin-shopping-cart/',
      repo: 'https://github.com/bmilcs/odin-shopping-cart',
    },
    techIcons: ['react', 'javascript', 'sass', 'jest'],
    screenshots: [
      { url: shoppingCartHome, alt: 'Shopping Cart Home Screenshot' },
      { url: shoppingCartShopping, alt: 'Shopping Cart Shopping Screenshot' },
      { url: shoppingCartCart, alt: 'Shopping Cart Cart Screenshot' },
    ],
    description: [
      { type: 'header', value: 'api based e-commerce site' },
      {
        type: 'p',
        value:
          'My Shopping Cart React App utilizes localStorage caching, asynchronous JavaScript & the Fake Store Api for all product data. Client side routing is provided by React Router DOM and tests are written with Jest.',
      },
      {
        type: 'p',
        value:
          'The page is fully responsive with the help of media queries and is accessible through a custom domain with HTTPS.',
      },
    ],
  },

  {
    title: 'memory game',
    links: {
      live: 'https://bmilcs.com/odin-memory-card/',
      repo: 'https://github.com/bmilcs/odin-memory-card',
    },
    techIcons: ['react', 'javascript', 'sass'],
    screenshots: [{ url: memoryCardGame, alt: 'Memory Card Screenshot' }],
    description: [
      { type: 'header', value: 'react card game' },
      {
        type: 'p',
        value:
          'My Memory Game is a React App in which users try to pick all cards exactly once. Each time a card is chosen, the deck is shuffled.',
      },
      {
        type: 'p',
        value:
          'Functional components, useState & useEffect were the focus of this project. Shuffling is accomplished with the Fisher-Yates shuffle algorithm. It is fully responsive with the use of media queries, variable font sizes & grid template areas.',
      },
    ],
  },

  {
    title: 'cv application',
    links: {
      live: 'https://bmilcs.com/odin-cv-application/',
      repo: 'https://github.com/bmilcs/odin-cv-application',
    },
    techIcons: ['react', 'javascript', 'css'],
    screenshots: [{ url: cvApp, alt: 'Memory Card Screenshot' }],
    description: [
      { type: 'header', value: 'Curriculum Vitae React App' },
      {
        type: 'p',
        value:
          'My CV App was my initial introduction to React. As users enter data to input fields, a preview of the application is updated dynamically using the onChange & value attributes. This project was written with class components and then refactored with functional components.',
      },
      {
        type: 'p',
        value:
          'Props, state & Git feature branches were the focus of this app and it is fully responsive.',
      },
    ],
  },

  {
    title: 'battleship',
    links: {
      live: 'https://bmilcs.com/odin-battleship/',
      repo: 'https://github.com/bmilcs/odin-battleship/',
    },
    techIcons: ['javascript', 'sass', 'jest', 'webpack', 'babel', 'eslint'],
    screenshots: [
      { url: battleshipHome, alt: 'Battleship Home Screenshot' },
      { url: battleshipMenu, alt: 'Battleship Menu Screenshot' },
      { url: battleshipGameplay, alt: 'Battleship Gameplay Screenshot' },
      { url: battleshipGameplay2, alt: 'Battleship Gameplay Screenshot' },
      { url: battleshipVictory, alt: 'Battleship Victory Screenshot' },
    ],
    description: [
      { type: 'header', value: 'vanilla javascript board game' },
      {
        type: 'p',
        value:
          'Using pure JavaScript, this project was blast to create and features test driven development with Jest, recursion, stacks & factories.',
      },
      {
        type: 'p',
        value:
          'The Single Responsibility principle played a large role and allowed me to piece together "artificial intelligence" in a short period of time. Custom utility modules, containerize & makeElement, were used to simplify DOM manipulation.',
      },
    ],
  },

  {
    title: 'weather app',
    links: {
      live: 'https://bmilcs.com/odin-weather-app/',
      repo: 'https://github.com/bmilcs/odin-weather-app',
    },
    techIcons: ['javascript', 'sass', 'webpack', 'eslint'],
    screenshots: [{ url: weatherApp, alt: 'Weather App Screenshot' }],
    description: [
      { type: 'header', value: 'api & asynchronous javascript' },
      {
        type: 'p',
        value:
          'Promises and the fetch API were the focus of this project. Utilizing openweathermap.org, this app accepts a zip code and displays the current weather for that location.',
      },
      {
        type: 'p',
        value:
          'SOLID design principles were used to break the logic down into modules. A custom error message is displayed when a zip code cannot be found. Custom utility modules, containerize & makeElement, were used to simplify DOM manipulation.',
      },
    ],
  },

  {
    title: 'todo list',
    links: {
      live: 'https://bmilcs.com/odin-todo-list/',
      repo: 'https://github.com/bmilcs/odin-todo-list',
    },
    techIcons: ['javascript', 'sass', 'webpack'],
    screenshots: [{ url: todoList, alt: 'Todo List Screenshot' }],
    description: [
      { type: 'header', value: 'yet another todo app' },
      {
        type: 'p',
        value:
          'SOLID design principles & vanilla JavaScript were used to create this simple Todo List. Some of the notable JavaScript fundamentals used include nested objects & arrays, array methods (reduce, map, filter, some), localStorage and Object.assign.',
      },
      {
        type: 'p',
        value:
          'Local storage strips away constructors & methods from objects, which required reassembly on loading. A split Webpack config was used for dev & production modes. Firebase Firestore and authentication were added at a later date for persistent storage. Custom utility modules, containerize & makeElement, were used to simplify DOM manipulation.',
      },
    ],
  },

  {
    title: 'restaurant page',
    links: {
      live: 'https://bmilcs.com/odin-restaurant-page/',
      repo: 'https://github.com/bmilcs/odin-restaurant-page',
    },
    techIcons: ['javascript', 'sass', 'webpack'],
    screenshots: [
      { url: restaurantHome, alt: 'Restaurant Page Home Screenshot' },
      { url: restaurantMenu, alt: 'Restaurant Page Menu Screenshot' },
      { url: restaurantContact, alt: 'Restaurant Page Contact Screenshot' },
    ],
    description: [
      { type: 'header', value: 'single page restaurant app' },
      {
        type: 'p',
        value:
          'NPM, Webpack and ES6 modules were the focus of this project. Inline source maps, dev server, sass-loader and asset management were used.',
      },
      {
        type: 'p',
        value: 'SASS was used for styling and the design turned out to be one of my better ones.',
      },
    ],
  },

  {
    title: 'tic tac toe',
    links: {
      live: 'https://bmilcs.com/odin-tic-tac-toe/',
      repo: 'https://github.com/bmilcs/odin-tic-tac-toe',
    },
    techIcons: ['javascript', 'sass', 'html'],
    screenshots: [
      { url: ticTacToeHome, alt: 'TicTacToe Home Screenshot' },
      { url: ticTacToeIntro, alt: 'TicTacToe Intro Screenshot' },
      { url: ticTacToeGameplay, alt: 'TicTacToe Gameplay Screenshot' },
      { url: ticTacToeVictory, alt: 'TicTacToe Victory Screenshot' },
    ],
    description: [
      { type: 'header', value: 'animated javascript game' },
      {
        type: 'p',
        value:
          'Module design pattern, factory functions, and keeping the global namespace tidy with scope and closures were the focus of this vanilla JavaScript app.',
      },
      {
        type: 'p',
        value:
          'The transitionend event & once: true option for event handlers played a large role in the animations.',
      },
    ],
  },

  {
    title: 'library',
    links: {
      live: 'https://bmilcs.com/odin-library/',
      repo: 'https://github.com/bmilcs/odin-library',
    },
    techIcons: ['javascript', 'css', 'html'],
    screenshots: [
      { url: libraryHome, alt: 'Library Home Screenshot' },
      { url: libraryEdit, alt: 'Library Edit Screenshot' },
      { url: libraryAdd, alt: 'Library Add Screenshot' },
    ],
    description: [
      { type: 'header', value: 'Book Progress Tracker' },
      {
        type: 'p',
        value:
          'Object Constructor Design Pattern, prototypes and classes were the focus of this responsive vanilla JavaScript app. UI/UX was implemented with subtle hover animations and multiple input methods: buttons, escape key, double clicking on cards, and clicking outside of the modal.',
      },
      {
        type: 'p',
        value: '',
      },
    ],
  },

  {
    title: 'admin dashboard',
    links: {
      live: 'https://bmilcs.com/odin-admin-dashboard/',
      repo: 'https://github.com/bmilcs/odin-admin-dashboard',
    },
    techIcons: ['sass', 'html'],
    screenshots: [{ url: adminDashboard, alt: 'Admin Dashboard Screenshot' }],
    description: [
      { type: 'header', value: 'Frontend Mentor-like Assignment' },
      {
        type: 'p',
        value:
          'Responsive design without the use of media queries, CSS Grid and the all powerful repeat(auto-fit, minmax()) were the focus of this project.',
      },
      {
        type: 'p',
        value:
          'Git fundamentals & semantic HTML elements were also covered: section, nav, aside, main, header & article.',
      },
    ],
  },

  {
    title: 'signup form',
    links: {
      live: 'https://bmilcs.com/odin-signup-form',
      repo: 'https://github.com/bmilcs/odin-signup-form',
    },
    techIcons: ['javascript', 'css', 'html'],
    screenshots: [
      { url: signupFormEmpty, alt: 'Signup Form Empty Screenshot' },
      { url: signupFormValidation, alt: 'Signup Form Validation Screenshot' },
    ],
    description: [
      { type: 'header', value: 'Form Validation via HTML & JavaScript' },
      {
        type: 'p',
        value:
          'Form validation was the focus of this project. After submitting the form for the first time, custom visual indicators appear  alerting the user of fields that need correction. Users continue to receive live feedback as they make the changes.',
      },
      {
        type: 'p',
        value: '',
      },
    ],
  },

  {
    title: 'calculator',
    links: {
      live: 'https://bmilcs.github.io/odin-calculator/',
      repo: 'https://github.com/bmilcs/odin-calculator',
    },
    techIcons: ['javascript', 'css', 'html'],
    screenshots: [
      { url: calculatorEmpty, alt: 'Calculator Empty Screenshot' },
      { url: calculatorCalculations, alt: 'Calculator With Calculations Screenshot' },
    ],
    description: [
      { type: 'header', value: 'JavaScript Calculator' },
      {
        type: 'p',
        value:
          'HTML, CSS, JavaScript & Git fundamentals were the focus of this project. Topics covered include objects, arrays, methods, constructors and switches. ',
      },
    ],
  },

  {
    title: 'etch-a-sketch',
    links: {
      live: 'https://bmilcs.com/odin-etch-a-sketch/',
      repo: 'https://github.com/bmilcs/odin-etch-a-sketch',
    },
    techIcons: ['javascript', 'css', 'html'],
    screenshots: [{ url: etchASketchDrawing, alt: 'Etch-A-Sketch Drawing Screenshot' }],
    description: [
      { type: 'header', value: 'Enhanced Drawing App' },
      {
        type: 'p',
        value:
          'Etch-A-Sketch+ was created using HTML, CSS & JavaScript. Topics covered include hex & rgb color conversions, draw & erase modes and incremental shading with multiple passes over the same cell.',
      },
    ],
  },

  {
    title: 'Early 2000 Clients',
    techIcons: ['javascript', 'css', 'html'],
    screenshots: [
      { url: kashetaPowerEquipmentHome, alt: 'Kasheta Power Equipment Home' },
      { url: kashetaFarmsHome, alt: 'Kasheta Farms Home' },
      { url: kriegHome, alt: 'Krieg Motorsports Home' },
      { url: kriegProduct, alt: 'Krieg Motorsports Products' },
      { url: nohoPetsittersHome, alt: 'NoHo Petsitters Home' },
      { url: nohoPetsittersDog, alt: 'NoHo Petsitters Dog' },
      { url: malachiConstantHomeV2, alt: 'Malachi Constant Band Page Home v2' },
      { url: malachiConstantAboutV2, alt: 'Malachi Constant Band Page About v2' },
      { url: malachiConstantHomeV1, alt: 'Malachi Constant Band Home v1' },
      { url: liarcBio, alt: 'Lost Inside A Rubix Cube Band Page Home' },
      { url: headAboveWater, alt: 'Head Above Water Band Page Home' },
      { url: cavityHome, alt: 'Cavity Band Page Home' },
    ],
    description: [
      { type: 'header', value: 'Local Bands & Businesses' },
      {
        type: 'p',
        value:
          'My web development experience dates back to 2001 as a freshman in high school. I was responsible for 5 local band web sites. These projects were created with Adobe Photoshop, HTML, CSS and JavaScript.',
      },
      {
        type: 'p',
        value:
          'After high school, I took on a few paying clients, including a pet sitting business and local farm.',
      },
      {
        type: 'p',
        value: 'Fun Fact: These projects have persisted over time via physical backups.',
      },
    ],
  },
];

export default PROJECTS;
