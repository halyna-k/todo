import { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { Dashboard, Home } from "./pages";
import { ContainerLayout, ErrorBoundary, Footer, Header, Spinner } from "./components";
import useSearchTasks from "./hooks/useSearchTasks";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: tasks } = useSearchTasks(searchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
   ;

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      setSearchQuery(searchQuery);
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
                      <Dashboard searchResults={tasks ?? []} />
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
