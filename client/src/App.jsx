import "./App.css";
import Layout from "./components/Layout/Layout";
import Works from "./components/Works/Works.jsx";
import Blog from "./Routes/Blog/Blog";
import BlogPost from "./Routes/BlogPost/BlogPost";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonial/Testimonials.jsx";
import Home from "./pages/Home.jsx";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.jsx";
import Protected from './components/Protect/ProtectedRoute.jsx';
import Gallery from "./components/Gallery/Gallery.jsx";

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