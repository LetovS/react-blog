import "./App.css";
import Layout from "./components/Layout/Layout";
import Works from "./components/Works/Works";
import Blog from "./Routes/Blog/Blog";
import BlogPost from "./Routes/BlogPost/BlogPost";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonial/Testimonials";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext";
import Protected from './components/Protect/ProtectedRoute';
import Gallery from "./components/Gallery/Gallery";
import React from "react";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
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