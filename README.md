# Portfolio Frontend

![Home](https://res.cloudinary.com/diufr72e9/image/upload/v1737134305/Screenshot_21_tqkggf.png)
##Query Part
![Send me Your Query](https://res.cloudinary.com/diufr72e9/image/upload/v1737134303/Screenshot_22_cdmvxs.png)


## Description
This is the frontend of my personal portfolio website. It showcases my skills, projects, and provides a way for viewers to send me queries directly using a backend powered by **Nodemailer**.

## Features
- **Modern Design:** Built with React and styled using TailwindCSS for a responsive and aesthetic look.
- **Interactive Icons:** Powered by Remix Icon and React Icons for a visually appealing UI.
- **Contact Form:** Allows visitors to send me queries, which are processed using Nodemailer.
- **Optimized Performance:** Developed with Vite for fast builds and smooth development experience.

## Tech Stack
- **Frontend Framework:** React 18
- **Styling:** TailwindCSS
- **HTTP Client:** Axios
- **Icons:** Remix Icon & React Icons
- **Toast Notifications:** React Hot Toast
- **Bundler:** Vite
- **Linting:** ESLint

## Scripts
The following scripts are available:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Previews the production build.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Visit [render]([http://localhost:000](https://portfolio-afzal.onrender.com/) to see your portfolio.

4. **Build for Production:**
   ```bash
   npm run build
   ```
   The build files will be located in the `dist` folder.

5. **Preview the Build:**
   ```bash
   npm run preview
   ```

## Sending Queries
The contact form allows users to send queries, which are processed on the server using **Nodemailer**. Ensure your backend server is running and configured correctly to handle these requests.

## Folder Structure
```
portfolio/
├── public/
│   ├── preview.png       # Preview image for the portfolio
│   └── ...               # Other static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Application pages
│   ├── styles/           # TailwindCSS configurations
│   └── App.jsx           # Root component
├── .eslintrc.js          # ESLint configuration
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Contributions
Feel free to fork this repository and submit a pull request if you want to contribute or improve the portfolio.

## License
This project is licensed under the MIT License.

---

> **Note:** Ensure your Nodemailer configuration (SMTP credentials, email address, etc.) is correctly set up on the server to handle queries from the contact form.

---

Happy Coding!
