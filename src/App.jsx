import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import MyFile from "./pages/MyFile/MyFile.jsx";
import Subscription from "./pages/Subscription/Subscription.jsx";
import Transactions from "./pages/Transactions/Transactions.jsx";
import Upload from "./pages/Upload/Upload.jsx"; // ✅ Make sure this file exists

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/my-files" element={<MyFile />} />
                <Route path="/subscriptions" element={<Subscription />} />
                <Route path="/transactions" element={<Transactions />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
