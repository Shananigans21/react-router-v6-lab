import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DirectorContainer from "./components/DirectorContainer";
import DirectorForm from "./components/DirectorForm";
import DirectorCard from "./components/DirectorCard";
import DirectorList from "./components/DirectorList";
import MovieForm from "./components/MovieForm";
import MovieDetail from "./components/MovieDetail";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Static Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Director Routes */}
        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<DirectorList />} />
          <Route path="new" element={<DirectorForm />} />

          {/* Nested under a wrapper for DirectorCard with Outlet */}
          <Route path=":id" element={<DirectorCard />}>
            <Route path="movies/new" element={<MovieForm />} />
            <Route path="movies/:movieId" element={<MovieDetail />} />
          </Route>
        </Route>

        {/* Catch-all for invalid routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
