import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/feedbackData';
import FeedbackForm from './components/FeedbackForm';
import AboutLinkIcon from './components/AboutLinkIcon';
import AboutPage from './pages/AboutPage';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header text="Feedback UI" bgColor="rgba(0, 0, 0, 0.4)" textColor="#ff6a95" />
            <div className="container">
                <Routes>
                    <Route path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    } />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>

                <AboutLinkIcon />
            </div>
        </Router>
    )
}

export default App;
