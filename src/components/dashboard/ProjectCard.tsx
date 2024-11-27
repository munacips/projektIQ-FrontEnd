import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title?: string;
  deadline?: string;
  status?: "on-track" | "at-risk" | "delayed";
  completionPercentage?: number;
  organization?: string;
  onStatusChange?: (status: string) => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ProjectCard = ({
  title = "Website Redesign Project",
  deadline = "2024-06-30",
  status = "on-track",
  completionPercentage = 65,
  organization = "Acme Corp",
  onStatusChange = () => {},
  onEdit = () => {},
  onDelete = () => {},
}: ProjectCardProps) => {
  const statusColors = {
    "on-track": "bg-green-100 text-green-800 border-green-300",
    "at-risk": "bg-yellow-100 text-yellow-800 border-yellow-300",
    delayed: "bg-red-100 text-red-800 border-red-300",
  };

  const statusBorderColors = {
    "on-track": "border-green-300",
    "at-risk": "border-yellow-300",
    delayed: "border-red-300",
  };

  return (
    <Card
      className={`w-[380px] p-6 bg-white border-l-4 ${statusBorderColors[status]}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{organization}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onEdit}>Edit Project</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onStatusChange("on-track")}
              className="text-green-600"
            >
              Mark as On Track
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onStatusChange("at-risk")}
              className="text-yellow-600"
            >
              Mark as At Risk
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onStatusChange("delayed")}
              className="text-red-600"
            >
              Mark as Delayed
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete} className="text-red-600">
              Delete Project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span className="text-sm text-muted-foreground">
            Due {new Date(deadline).toLocaleDateString()}
          </span>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">
              {completionPercentage}%
            </span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>

        <div className="flex justify-between items-center">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>
              {Math.ceil(
                (new Date(deadline).getTime() - new Date().getTime()) /
                  (1000 * 60 * 60 * 24),
              )}{" "}
              days left
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
