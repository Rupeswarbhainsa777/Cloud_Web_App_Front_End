import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import MyFile from "./pages/MyFile/MyFile.jsx";
import Subscription from "./pages/Subscription/Subscription.jsx";
import Transactions from "./pages/Transactions/Transactions.jsx";
import Upload from "./pages/Upload/Upload.jsx";
import {RedirectToSignIn, SignedIn, SignedOut} from "@clerk/clerk-react"; // ✅ Make sure this file exists

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="/dashboard"
                    element={
                        <>
                            <SignedIn>
                                <Dashboard />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />
                <Route path="/upload" element={
                    <>
                        <SignedIn>
                          <Upload />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>


                    } />


                <Route path="/my-files" element={

                    <>
                        <SignedIn>
                           <MyFile />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                } />

                <Route path="/subscriptions" element={


                    <>
                        <SignedIn>
                          <Subscription />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                } />
                <Route path="/transactions" element={

                    <>
                        <SignedIn>
                          <Transactions />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                } />

                <Route  path="/*"  element={<RedirectToSignIn />}/>
            </Routes>



        </BrowserRouter>
    );
};

export default App;
