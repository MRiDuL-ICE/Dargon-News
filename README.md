# Daily Dragon News - [Live Site](https://dailydragonnews.netlify.app/)

A modern news portal built with React, featuring real-time news updates, category-based navigation, and user authentication.

![Daily Dragon News](./src/assets/logo.png)

## Features

### 📰 News Management
- Real-time news updates with category filtering
- Detailed news view with full article content
- Trending news indicators
- View count and rating system
- News sharing and bookmarking capabilities
- Breaking news ticker with auto-scroll

### 🔐 Authentication
- Email/Password authentication
- Social login (Google, GitHub)
- Protected routes for authenticated users
- User profile management
- Persistent login state

### 💫 User Interface
- Responsive grid layout (12-column system)
- Category-based navigation
- Modern card-based news display
- Loading states and animations
- Toast notifications for user feedback
- Social media integration

## Technologies Used

- React.js
- Firebase Authentication
- React Router DOM
- Context API
- React Icons
- React Fast Marquee
- React Toastify
- Tailwind CSS
- DaisyUI
- Moment.js
- Yarn Package Manager

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version)
- Yarn package manager
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/daily-dragon-news.git
```

2. Navigate to the project directory
```bash
cd daily-dragon-news
```

3. Install dependencies
```bash
yarn install
```

4. Create a `.env` file in the root directory and add your Firebase configuration
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Start the development server
```bash
yarn dev
```

## Project Structure

```
daily-dragon-news/
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable components
│   ├── layout/             # Layout components
│   ├── pages/              # Page components
│   ├── provider/           # Context providers
│   ├── firebase/           # Firebase configuration
│   └── routes/             # Route configurations
├── public/                 # Public assets
└── package.json           # Project dependencies
```

## Key Components

### Layouts
- `HomeLayout`: Main layout with news grid
- `AuthLayout`: Authentication pages layout

### Components
- `NewsCard`: Displays individual news articles
- `LeftNavbar`: Category navigation
- `RightNavbar`: Social links and additional features
- `Header`: Site header with logo and date
- `LatestNews`: Breaking news ticker

### Authentication
- `AuthProvider`: Manages authentication state
- `PrivateRoute`: Protected route wrapper
- `Login/Register`: Authentication forms

## API Integration

The project uses the Programming Hero API for news data:
- Categories: `https://openapi.programming-hero.com/api/news/categories`
- Category News: `https://openapi.programming-hero.com/api/news/category/${categoryId}`
- News Details: `https://openapi.programming-hero.com/api/news/${newsId}`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

- [Programming Hero](https://www.programming-hero.com/) for the API
- [Firebase](https://firebase.google.com/) for authentication
- All contributors who have helped this project grow


Project Link: [Dargon News](https://dailydragonnews.netlify.app/)