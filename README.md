# Rhema Online - Next.js Project

A modern web application for Rhema Online, built with **Next.js** and integrated with **WordPress CMS** via GraphQL. The website provides features for religious content management, sermons, prayer requests, and giving.

## 🚀 Tech Stack

The project is developed with modern technologies to ensure performance and optimal user experience:

- **Frontend Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [Styled Components](https://styled-components.com/) (Main styling)
  - [Tailwind CSS](https://tailwindcss.com/) (Utility classes)
- **Data Management**: 
  - [Apollo Client](https://www.apollographql.com/docs/react/) (GraphQL)
  - [RSS Parser](https://www.npmjs.com/package/rss-parser)
- **UI & Animations**: 
  - [Framer Motion](https://www.framer.com/motion/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [React Slick](https://react-slick.neostack.com/) (Carousel)
  - [React Player](https://www.npmjs.com/package/react-player)
- **Third-party Integrations**:
  - **YouTube Data API v3**: Manages sermon playlists and videos.
  - **WordPress (WPGraphQL)**: Content Management System (CMS).
  - **Google Tag Manager**: Analytics and tracking.
  - **Constant Contact**: Email marketing integration.

## ✨ Key Features

- 📺 **Sermons & Bible Studies**: Integrated YouTube playlists and WordPress content.
- 🙏 **Prayer Requests**: Online system for submitting and managing prayer requests.
- 💳 **Giving & Fund Raising**: Integrated donation and fundraising pages.
- 🔴 **Live Stream**: Watch live services and events.
- 📅 **Events & Calendar**: Management for church activities and special events.
- 🏦 **Facility Bookings**: Online booking system for church facilities.
- 💬 **Interactive Chatbot**: Quick support and information for users.
- 📍 **Multi-location support**: Information about different locations and how to join.

## 📂 Project Structure

```text
├── components/          # UI components (common, home, items, etc.)
├── pages/               # Routing and main application pages
│   ├── api/             # Next.js API Routes
│   ├── sermons/         # Sermon management
│   └── bible-studies/   # Bible study management
├── lib/                 # API logic (GraphQL, RSS) and utility functions
├── styles/              # Global styles, variables, and animation settings
├── types/               # TypeScript interfaces and type definitions
├── data/                # Static data and configurations
├── public/              # Static assets (images, icons, fonts)
└── telegram_bot/        # Source code for the Telegram chatbot (if any)
```

## 🛠️ Installation & Development

### 1. Prerequisites
- Node.js (supported version)
- Yarn or NPM

### 2. Environment Variables
Create a `.env.local` file in the root directory and configure the following variables:

```env
WP_DOMAIN=cms.rhemacanada.com
WP_URL=https://cms.rhemacanada.com/rhemaonline/graphql
YT_API_KEY=your_youtube_api_key
YT_CHANNEL_ID=your_channel_id
YT_SERMON_NOTES_PLAYLIST=playlist_id
YT_BIBLE_STUDIES_PLAYLIST=playlist_id
GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
HOME_URL=https://rhemaonline.ca
CC_DOMAIN=files.constantcontact.com
```

### 3. Running the Project

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Deployment

The project is ready for deployment on platforms like **Vercel** or **Netlify**. Ensure all environment variables are properly configured in the deployment platform's settings.
