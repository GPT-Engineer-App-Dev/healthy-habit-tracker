import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogMeal = () => {
  const navigate = useNavigate();
  const [mealType, setMealType] = useState("");
  const [caloriesConsumed, setCaloriesConsumed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submission logic here
    console.log({ mealType, caloriesConsumed });
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Log Meal</h1>
        <Button variant="outline" size="icon" onClick={() => navigate("/")}>
          Back
        </Button>
      </header>
      <main>
        <Card>
          <CardHeader>
            <CardTitle>Log Your Meal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="mealType">Meal Type</Label>
                <Select onValueChange={setMealType}>
                  <SelectTrigger id="mealType">
                    <SelectValue placeholder="Select meal type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Breakfast">Breakfast</SelectItem>
                    <SelectItem value="Lunch">Lunch</SelectItem>
                    <SelectItem value="Dinner">Dinner</SelectItem>
                    <SelectItem value="Snack">Snack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="caloriesConsumed">Calories Consumed</Label>
                <Input id="caloriesConsumed" type="number" value={caloriesConsumed} onChange={(e) => setCaloriesConsumed(e.target.value)} />
              </div>
              <Button type="submit">Log Meal</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default LogMeal;