import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={"Home"} />
            <Route path="/dashboard" element={"Dashboard"} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}
