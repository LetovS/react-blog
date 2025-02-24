import "./App.css";
import Layout from "./components/Layout/Layout";
import Works from "./components/Works/Works.jsx";
import Blog from "./Routes/Blog/Blog";
import BlogPost from "./Routes/BlogPost/BlogPost";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonial/Testimonials.jsx";
import Home from "./pages/Home.jsx";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.jsx";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Layout><Works /></Layout>} />
                <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
                <Route path="/blog" element={<Layout><Blog /></Layout>} />
                <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;