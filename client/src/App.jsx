import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';

export default function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:listingId" element={<Listing />} />

        <Route
          path="/profile"
          element={currentUser ? <Profile /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/create-listing"
          element={currentUser ? <CreateListing /> : <Navigate to="/sign-in" />}
        />
        <Route
          path="/update-listing/:listingId"
          element={currentUser ? <UpdateListing /> : <Navigate to="/sign-in" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
