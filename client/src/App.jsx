import "./App.css";
import Layout from "./components/Layout/Layout.js";
import Works from "./components/Works/Works.tsx";
import Blog from "./Routes/Blog/Blog";
import BlogPost from "./Routes/BlogPost/BlogPost";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonial/Testimonials.tsx";
import Home from "./pages/Home.jsx";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.tsx";
import Protected from './components/Protect/ProtectedRoute.tsx';
import Gallery from "./components/Gallery/Gallery.tsx";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/works"
                    element={
                        <Protected>
                            <Layout>
                                <Works />
                            </Layout>
                        </Protected>
                    }
                />
                <Route
                    path="/testimonials"
                    element={
                        <Protected>
                            <Layout>
                                <Testimonials />
                            </Layout>
                        </Protected>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <Protected>
                            <Layout>
                                <Blog />
                            </Layout>
                        </Protected>
                    }
                />
                <Route
                    path="/blog/:id"
                    element={
                        <Protected>
                            <Layout>
                                <BlogPost />
                            </Layout>
                        </Protected>
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <Protected>
                            <Layout>
                                <Gallery />
                            </Layout>
                        </Protected>
                    }
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;