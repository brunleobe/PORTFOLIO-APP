import quizAppImage from '../assets/images/quiz-app.png';
import watchlistAppImage from '../assets/images/watchlist-app.png';

export const portfolioData = {
  personalInfo: {
    name: "Bright Obende",
    title: "Frontend Developer",
    email: "brightobende11@gmail.com",
    github: "https://github.com/brunleobe",
    linkedin: "https://www.linkedin.com/in/bright-obende-420394302/",
    x: "https://x.com/brunleobe",
    instagram: "https://instagram.com/brunle.obe",
    whatsapp: "https://wa.me/+2349034290158",
  },
  about: "I am a passionate Frontend Developer and dedicated student with a strong foundation in building responsive, user-centric web applications. Proficient in HTML5, CSS3, JavaScript, and React, with a solid understanding of Version Control (Git/GitHub) and RESTful APIs. Proven ability to collaborate effectively through volunteer experience in fast-paced environments. Passionate about writing clean, maintainable code and solving complex UI challenges",
  skills: ["HTML5", "CSS3", "Javascript", "React JS", "Git", "Github", "Netlify", "REST APIs", "UI Design", "Tailwind CSS"],
  experience: [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "Teksphere Global Services Limited",
      period: "March 2026 - Present",
      description: "Developed and maintained user-facing features using React and Vite."
    }
  ],
  projects: [
    {
      id: 1,
      title: "Sports Quiz App",
      description: "A Sports quiz application built with HTML,CSS and React.",
      image: quizAppImage,
      demoUrl: "https://sportify-quiz-apps.netlify.app/",
      githubUrl: "https://github.com/brunleobe/sportify-quiz-app",
    },

    {
      id: 2,
      title: "Movie Watchlist App",
      description: "A Movie watchlist application built with HTML,CSS and Javascript.",
      image: watchlistAppImage,
      demoUrl: "https://gleaming-licorice-6634a7.netlify.app/",
      githubUrl: "https://github.com/brunleobe/movie-watchlist-app",
    }

  ]


};
