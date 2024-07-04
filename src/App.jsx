import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Dumbbell, Utensils, LineChart } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import LogWorkout from "./pages/LogWorkout.jsx";
import LogMeal from "./pages/LogMeal.jsx";
import ViewProgress from "./pages/ViewProgress.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Log Workout",
    to: "/log-workout",
    icon: <Dumbbell className="h-4 w-4" />,
  },
  {
    title: "Log Meal",
    to: "/log-meal",
    icon: <Utensils className="h-4 w-4" />,
  },
  {
    title: "View Progress",
    to: "/view-progress",
    icon: <LineChart className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="log-workout" element={<LogWorkout />} />
              <Route path="log-meal" element={<LogMeal />} />
              <Route path="view-progress" element={<ViewProgress />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;