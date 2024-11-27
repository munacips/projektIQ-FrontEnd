import React from "react";
import { Card } from "@/components/ui/card";
import { Building2, Users, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface OrganizationCardProps {
  name?: string;
  rating?: number;
  activeProjects?: number;
  totalMembers?: number;
  projectCompletion?: number;
  onRatingChange?: (rating: number) => void;
  onEdit?: () => void;
}

const OrganizationCard = ({
  name = "Acme Corporation",
  rating = 8,
  activeProjects = 12,
  totalMembers = 45,
  projectCompletion = 75,
  onRatingChange = () => {},
  onEdit = () => {},
}: OrganizationCardProps) => {
  return (
    <Card className="w-[380px] p-6 bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 cursor-pointer ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                onClick={() => onRatingChange(index + 1)}
              />
            ))}
          </div>
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
            <DropdownMenuItem onClick={onEdit}>
              Edit Organization
            </DropdownMenuItem>
            <DropdownMenuItem>View Projects</DropdownMenuItem>
            <DropdownMenuItem>View Members</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-full">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Members</p>
              <p className="font-semibold">{totalMembers}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-full">
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
                className="h-4 w-4 text-primary"
              >
                <path d="M2 17 12 22l10-5" />
                <path d="m2 12 10 5 10-5" />
                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Projects</p>
              <p className="font-semibold">{activeProjects}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Project Completion</span>
            <span className="text-sm text-muted-foreground">
              {projectCompletion}%
            </span>
          </div>
          <Progress value={projectCompletion} className="h-2" />
        </div>
      </div>
    </Card>
  );
};

export default OrganizationCard;
