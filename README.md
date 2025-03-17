# My New Project

A Next.js project with a complete authentication UI flow and dashboard.

## Features

- Modern UI with Tailwind CSS
- Responsive design
- Complete authentication flow:
  - Login page
  - Sign-up page
  - Forgot password page
  - Terms of service page
  - Privacy policy page
- Dashboard with multiple sections:
  - Overview dashboard with stats and activity
  - User profile management
  - Analytics page with charts and metrics
  - Settings page with various configuration options
- Social authentication options (GitHub, Google)
- Form validation
- TypeScript support

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/barisvelioglu/my-new-project.git
   ```
2. Navigate to the project directory
   ```
   cd my-new-project
   ```
3. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```
4. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the login page

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/contexts` - React context providers
- `/lib` - Utility functions and shared code

## Authentication Pages

### Login Page

The login page includes:
- Email and password form
- Social login options (GitHub, Google)
- "Forgot password" link
- Sign up link for new users
- Error handling and loading states

### Sign-up Page

The sign-up page includes:
- Full name, email, password, and confirm password fields
- Social sign-up options (GitHub, Google)
- Terms of service and privacy policy checkboxes
- Login link for existing users

### Forgot Password Page

A simple form to enter email address and request a password reset link.

### Terms of Service & Privacy Policy

Detailed pages outlining the terms of use and privacy policies.

## Dashboard Pages

### Overview

The main dashboard includes:
- Key statistics and metrics
- Recent activity feed
- Account summary information

### Profile

The profile page includes:
- Personal information management
- Profile picture upload
- Password update functionality

### Analytics

The analytics page includes:
- Traffic metrics
- User statistics
- Device breakdown
- Top pages report

### Settings

The settings page includes:
- Notification preferences
- Security settings
- Appearance customization
- Language and region options

## Authentication

This project includes a simple authentication context that mimics a real authentication flow:

- Login/logout functionality
- User state management
- Protected routes
- Persistent sessions with localStorage

## License

This project is licensed under the MIT License - see the LICENSE file for details