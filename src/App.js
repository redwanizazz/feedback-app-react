import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutLinkIcon from './components/AboutLinkIcon';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header text="Feedback UI" bgColor="rgba(0, 0, 0, 0.4)" textColor="#ff6a95" />
                <div className="container">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        } />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>

                    <AboutLinkIcon />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;
