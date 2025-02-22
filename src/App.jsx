import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Modal from "./components/Modal/Modal";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Layout>
            <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
                Написать мне
            </button>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        </Layout>
    );
}

export default App;