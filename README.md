# Next Secure

Next Secure is a modern web application built with Next.js, designed to provide a secure and user-friendly authentication system. It leverages server-side rendering (SSR) and client-side rendering (CSR) to deliver a seamless user experience.

## Features

- **Authentication System**: Includes sign-in and sign-out functionality with secure session management.
- **Responsive Design**: Built with Tailwind CSS for a fully responsive and accessible UI.
- **Server-Side Rendering**: Ensures fast page loads and SEO optimization.
- **Dynamic Theming**: Supports light and dark themes using CSS variables.
- **Reusable Components**: Modular and reusable UI components for scalability.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Better Auth] (https://www.better-auth.com)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with Zod validation
- **email Validation**: [Arcjet](https://docs.arcjet.com)
- **Icons**: [Lucide React](https://lucide.dev/)


## Getting Started

1. Clone the repository:
   git clone [Repository]
   cd next-secure
2. install dependencies
    npm install
3. update .env
4. generate prisma schema
    npx prisma generate -> npx prisma db push
5. run the application
    npm run dev 