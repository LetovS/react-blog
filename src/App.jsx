import "./App.css";
import Layout from "./components/Layout/Layout";
import Works from "./components/Works/Works";
import Blog from "./Routes/Blog/Blog";
import BlogPost from "./Routes/BlogPost/BlogPost";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./components/Testimonial/Testimonials.jsx";
import ModalButton from "./components/Buttons/ModalButton.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout> <ModalButton/> </Layout>}/>
            <Route path="/works" element={<Layout><Works /></Layout>}/>
            <Route path="/testimonials" element={<Layout><Testimonials /></Layout>}/>
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/blog/:id" element={<Layout><BlogPost /></Layout>} />
        </Routes>
    );
}

export default App;