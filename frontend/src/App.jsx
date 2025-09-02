import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddSchoolPage from "./pages/addSchool/addSchool.jsx";
import ShowSchoolsPage from "./pages/showSchools/showSchools.jsx";
import SnackbarProvider from "./components/snackbar/SnackbarProvider.jsx";

function App() {
  return (
    <SnackbarProvider>
      <div className="bg-zinc-800 h-screen w-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowSchoolsPage />} />
            <Route path="/add" element={<AddSchoolPage />} />
            <Route path="/schools" element={<ShowSchoolsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </SnackbarProvider>
  );
}

export default App;
