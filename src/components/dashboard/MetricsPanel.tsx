import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle2, AlertTriangle } from "lucide-react";

interface MetricsPanelProps {
  totalProjects?: number;
  overdueTasks?: number;
  upcomingDeadlines?: number;
  projectProgress?: number;
}

const MetricsPanel = ({
  totalProjects = 12,
  overdueTasks = 3,
  upcomingDeadlines = 5,
  projectProgress = 65,
}: MetricsPanelProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Total Projects</h3>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold">{totalProjects}</p>
          <Progress value={projectProgress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {projectProgress}% completion rate
          </p>
        </Card>

        <Card className="p-4 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Overdue Tasks</h3>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </div>
          <p className="text-2xl font-bold">{overdueTasks}</p>
          <div className="text-xs text-red-500">
            Requires immediate attention
          </div>
        </Card>

        <Card className="p-4 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Upcoming Deadlines</h3>
            <Clock className="h-4 w-4 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold">{upcomingDeadlines}</p>
          <div className="text-xs text-muted-foreground">
            Due in the next 7 days
          </div>
        </Card>

        <Card className="p-4 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Project Health</h3>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="text-center">
              <div className="text-sm font-bold text-green-500">8</div>
              <div className="text-xs text-muted-foreground">On Track</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-yellow-500">3</div>
              <div className="text-xs text-muted-foreground">At Risk</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-red-500">1</div>
              <div className="text-xs text-muted-foreground">Delayed</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MetricsPanel;
