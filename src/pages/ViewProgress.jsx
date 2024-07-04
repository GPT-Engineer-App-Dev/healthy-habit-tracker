import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ViewProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">View Progress</h1>
        <Button variant="outline" size="icon" onClick={() => navigate("/")}>
          Back
        </Button>
      </header>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Weekly Steps Chart" className="mx-auto object-cover w-full h-[200px]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Calories Burned</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Calories Burned Chart" className="mx-auto object-cover w-full h-[200px]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Active Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Active Minutes Chart" className="mx-auto object-cover w-full h-[200px]" />
            </CardContent>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Here's a summary of your progress over the past week:</p>
              <ul className="list-disc list-inside">
                <li>Steps Taken: 70,000</li>
                <li>Calories Burned: 3,500</li>
                <li>Active Minutes: 420</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default ViewProgress;