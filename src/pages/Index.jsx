import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">FitTrack</h1>
        <Button variant="outline" size="icon">
          <img src="/placeholder.svg" alt="User Icon" className="mx-auto object-cover w-8 h-8 rounded-full" />
        </Button>
      </header>
      <main>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Welcome, User!</h2>
          <p className="text-lg">Here's a summary of your activities today:</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Steps Taken</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">10,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Calories Burned</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">500</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">60</p>
            </CardContent>
          </Card>
        </section>
        <section className="flex justify-around">
          <Button onClick={() => navigate("/log-workout")}>Log Workout</Button>
          <Button onClick={() => navigate("/log-meal")}>Log Meal</Button>
          <Button onClick={() => navigate("/view-progress")}>View Progress</Button>
        </section>
      </main>
    </div>
  );
};

export default Index;