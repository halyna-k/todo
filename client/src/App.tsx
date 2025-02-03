import { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import PrivateRoute from "./routes/PrivateRoute";
import { Dashboard, Home } from "./pages";
import { ContainerLayout, ErrorBoundary, Footer, Header } from "./components";

const queryClient = new QueryClient();

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <ContainerLayout>
          <Header searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              } />
            </Routes>
            </ContainerLayout>
            <Footer />
          </ErrorBoundary>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}
