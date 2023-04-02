import adminDashboard from '../assets/admin_dashboard/screenshot.png';
import battleshipGameplay from '../assets/battleship/gameplay-1.png';
import battleshipGameplay2 from '../assets/battleship/gameplay-2.png';
import battleshipHome from '../assets/battleship/home.png';
import battleshipMenu from '../assets/battleship/menu.png';
import battleshipVictory from '../assets/battleship/victory.png';
import calculatorCalculations from '../assets/calculator/calculations.png';
import calculatorEmpty from '../assets/calculator/empty.png';
import comedyDbDesktopHome from '../assets/comedy/desktop_home.png';
import comedyDbDesktopSpecial from '../assets/comedy/desktop_special.png';
import cvApp from '../assets/cv/screenshot.png';
import etchASketchDrawing from '../assets/etch_a_sketch/drawing.png';
import etchASketchEmpty from '../assets/etch_a_sketch/empty.png';
import landingPageBottom from '../assets/landing_page/bottom.png';
import landingPageTop from '../assets/landing_page/top.png';
import libraryAdd from '../assets/library/add.png';
import libraryEdit from '../assets/library/edit.png';
import libraryHome from '../assets/library/home.png';
import memoryCardGame from '../assets/memory_card/screenshot.png';
import restaurantContact from '../assets/restaurant/contact.png';
import restaurantHome from '../assets/restaurant/home.png';
import restaurantMenu from '../assets/restaurant/menu.png';
import rockPaperScissorsGameplay from '../assets/rock_paper_scissors/gameplay-1.png';
import rockPaperScissorsGameplay2 from '../assets/rock_paper_scissors/gameplay-2.png';
import shoppingCartCart from '../assets/shopping_cart/desktop-cart.png';
import shoppingCartHome from '../assets/shopping_cart/desktop-home.png';
import shoppingCartShopping from '../assets/shopping_cart/desktop-shop.png';
import signupFormEmpty from '../assets/signup_form/empty.png';
import signupFormValidation from '../assets/signup_form/validation.png';
import ticTacToeGameplay from '../assets/tictactoe/gameplay.png';
import ticTacToeHome from '../assets/tictactoe/home.png';
import ticTacToeIntro from '../assets/tictactoe/intro.png';
import ticTacToeVictory from '../assets/tictactoe/victory.png';
import todoList from '../assets/todo/screenshot.png';
import waldoGameplay from '../assets/waldo/gameplay-1.png';
import waldoVictory from '../assets/waldo/gameplay-3.png';
import waldoHome from '../assets/waldo/home.png';
import weatherApp from '../assets/weather/screenshot.png';

export interface IProject {
  title: string;
  links: {
    live: string;
    repo: string;
  };
  techIcons: TTech[];
  screenshots: TScreenshot[];
  description?: { type: 'header' | 'p'; value: string }[];
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
    techIcons: ['react', 'redux', 'typescript', 'sass', 'firebase', 'node'],
    screenshots: [
      { url: comedyDbDesktopHome, alt: 'The Comedy DB Desktop Home Screenshot' },
      { url: comedyDbDesktopSpecial, alt: 'The Comedy DB Desktop Special Screenshot' },
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
          'Powered by TMDB, Firebase Firestore & Cloud Functions running on Node v18, I created pubsub functions that fetch the latest specials for all comedians in the database. When users sign up and favorite a comedian, they receive e-mail notifications (via node-mailer) & GUI notifications (via database entries) whenever that comedian releases a new special. ',
      },
      {
        type: 'p',
        value:
          'Users can add dynamically new comedians to the site by using the search bar. The initial search results page shows existing comedians and a list of people from the TMDB People API. To prevent actors from being added, extra API calls are issued to verify that the person has content with the TMDB standup keyword.',
      },
      {
        type: 'p',
        value:
          'Redux tool kit was used to handle state for user information, all comedians &specials.',
      },
    ],
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
      { url: waldoGameplay, alt: 'Wheres Waldo Gameplay Screenshot' },
      { url: waldoVictory, alt: 'Wheres Waldo Victory Screenshot' },
    ],
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
  },

  {
    title: 'memory game',
    links: {
      live: 'https://bmilcs.com/odin-memory-card/',
      repo: 'https://github.com/bmilcs/odin-memory-card',
    },
    techIcons: ['react', 'javascript', 'sass'],
    screenshots: [{ url: memoryCardGame, alt: 'Memory Card Screenshot' }],
  },

  {
    title: 'cv application',
    links: {
      live: 'https://bmilcs.com/odin-cv-application/',
      repo: 'https://github.com/bmilcs/odin-cv-application',
    },
    techIcons: ['react', 'javascript', 'css'],
    screenshots: [{ url: cvApp, alt: 'Memory Card Screenshot' }],
  },

  {
    title: 'battleship',
    links: {
      live: 'https://bmilcs.com/odin-battleship/',
      repo: 'https://github.com/bmilcs/odin-battleship/',
    },
    techIcons: ['javascript', 'css', 'jest', 'webpack', 'babel', 'eslint'],
    screenshots: [
      { url: battleshipHome, alt: 'Battleship Home Screenshot' },
      { url: battleshipMenu, alt: 'Battleship Menu Screenshot' },
      { url: battleshipGameplay, alt: 'Battleship Gameplay Screenshot' },
      { url: battleshipGameplay2, alt: 'Battleship Gameplay Screenshot' },
      { url: battleshipVictory, alt: 'Battleship Victory Screenshot' },
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
  },

  {
    title: 'todo list',
    links: {
      live: 'https://bmilcs.com/odin-todo-list/',
      repo: 'https://github.com/bmilcs/odin-todo-list',
    },
    techIcons: ['javascript', 'sass', 'webpack'],
    screenshots: [{ url: todoList, alt: 'Todo List Screenshot' }],
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
  },

  {
    title: 'admin dashboard',
    links: {
      live: 'https://bmilcs.com/odin-admin-dashboard/',
      repo: 'https://github.com/bmilcs/odin-admin-dashboard',
    },
    techIcons: ['css', 'html'],
    screenshots: [{ url: adminDashboard, alt: 'Admin Dashboard Screenshot' }],
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
  },

  {
    title: 'etch-a-sketch',
    links: {
      live: 'https://bmilcs.com/odin-etch-a-sketch/',
      repo: 'https://github.com/bmilcs/odin-etch-a-sketch',
    },
    techIcons: ['javascript', 'css', 'html'],
    screenshots: [
      { url: etchASketchDrawing, alt: 'Etch-A-Sketch Drawing Screenshot' },
      { url: etchASketchEmpty, alt: 'Etch-A-Sketch Empty Screenshot' },
    ],
  },

  {
    title: 'rock paper scissors',
    links: {
      live: 'https://bmilcs.com/odin-rock-paper-scissors/',
      repo: 'https://github.com/bmilcs',
    },
    techIcons: ['javascript', 'css', 'html'],
    screenshots: [
      { url: rockPaperScissorsGameplay, alt: 'Rock Paper Scissors Gameplay Screenshot' },
      { url: rockPaperScissorsGameplay2, alt: 'Rock Paper Scissors Gameplay Screenshot' },
    ],
  },

  {
    title: 'landing page',
    links: {
      live: 'https://bmilcs.com/odin-landing-page/',
      repo: 'https://github.com/bmilcs/odin-landing-page',
    },
    techIcons: ['css', 'html'],
    screenshots: [
      { url: landingPageTop, alt: 'Landing Page Top Screenshot' },
      { url: landingPageBottom, alt: 'Landing Page Bottom Screenshot' },
    ],
  },
];

export default PROJECTS;
