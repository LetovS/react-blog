import "./App.css";
import Layout from "./components/Layout/Layout";
import Works from "./components/Works/Works.jsx";
import Blog from "./Routes/Blog/Blog";
import BlogPost from "./Routes/BlogPost/BlogPost";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonial/Testimonials.jsx";
import Home from "./pages/Home.jsx";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.jsx";
import ProtectedRoute from './components/Protect/ProtectedRoute.jsx';
import Gallery from "./components/Gallery/Gallery.jsx";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/works"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Works />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/testimonials"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Testimonials />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Blog />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/blog/:id"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <BlogPost />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Gallery />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;