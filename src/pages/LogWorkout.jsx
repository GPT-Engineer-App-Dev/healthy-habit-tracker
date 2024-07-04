import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogWorkout = () => {
  const navigate = useNavigate();
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submission logic here
    console.log({ workoutType, duration, caloriesBurned });
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Log Workout</h1>
        <Button variant="outline" size="icon" onClick={() => navigate("/")}>
          Back
        </Button>
      </header>
      <main>
        <Card>
          <CardHeader>
            <CardTitle>Log Your Workout</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="workoutType">Workout Type</Label>
                <Select onValueChange={setWorkoutType}>
                  <SelectTrigger id="workoutType">
                    <SelectValue placeholder="Select workout type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Running">Running</SelectItem>
                    <SelectItem value="Cycling">Cycling</SelectItem>
                    <SelectItem value="Weightlifting">Weightlifting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="caloriesBurned">Calories Burned</Label>
                <Input id="caloriesBurned" type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} />
              </div>
              <Button type="submit">Log Workout</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LogWorkout;