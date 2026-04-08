import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        login: path.resolve(__dirname, "html/login.html"),
        signup: path.resolve(__dirname, "html/signup.html"),
        forgotPassword: path.resolve(__dirname, "html/forgot-password.html"),
        dashboard: path.resolve(__dirname, "html/dashboard.html"),
        library: path.resolve(__dirname, "html/library.html"),
        addMedia: path.resolve(__dirname, "html/add-media.html"),
        mediaDetail: path.resolve(__dirname, "html/media-detail.html"),
        quizHub: path.resolve(__dirname, "html/quiz-hub.html"),
        quizSession: path.resolve(__dirname, "html/quiz-session.html"),
        feed: path.resolve(__dirname, "html/feed.html"),
        vocabulary: path.resolve(__dirname, "html/vocabulary.html"),
        insights: path.resolve(__dirname, "html/insights.html"),
        profile: path.resolve(__dirname, "html/profile.html"),
        notFound: path.resolve(__dirname, "html/not-found.html"),
      },
    },
  },
});
