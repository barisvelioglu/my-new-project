# My New Project

A Next.js project with a complete authentication UI flow.

## Features

- Modern UI with Tailwind CSS
- Responsive design
- Complete authentication flow:
  - Login page
  - Sign-up page
  - Forgot password page
  - Terms of service page
  - Privacy policy page
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
- `/lib` - Utility functions and shared code

## Authentication Pages

### Login Page

The login page includes:
- Email and password form
- Social login options (GitHub, Google)
- "Forgot password" link
- Sign up link for new users

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

## License

This project is licensed under the MIT License - see the LICENSE file for details