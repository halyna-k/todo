import { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { Dashboard, Home } from "./pages";
import { ContainerLayout, ErrorBoundary, Footer, Header, Spinner } from "./components";
import useSearchTasks from "./hooks/useSearchTasks";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  useSearchTasks(debouncedSearchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      setSearchQuery(searchQuery);
      setSearchQuery('');
    }
  };

  return (
      <Router>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary>
            <ContainerLayout>
              <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearchKeyDown={handleSearchKeyDown} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard searchQuery={debouncedSearchQuery} />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </ContainerLayout>
            <Footer />
          </ErrorBoundary>
        </Suspense>
      </Router>
  );
}
