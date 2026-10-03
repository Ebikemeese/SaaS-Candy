import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default Layout;
