import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  deadline: string;
  status: "on-track" | "at-risk" | "delayed";
  completionPercentage: number;
  organization: string;
}

interface ProjectGridProps {
  projects?: Project[];
  onProjectStatusChange?: (projectId: string, status: string) => void;
  onProjectEdit?: (projectId: string) => void;
  onProjectDelete?: (projectId: string) => void;
}

const ProjectGrid = ({
  projects = [
    {
      id: "1",
      title: "Website Redesign",
      deadline: "2024-06-30",
      status: "on-track",
      completionPercentage: 65,
      organization: "Acme Corp",
    },
    {
      id: "2",
      title: "Mobile App Development",
      deadline: "2024-07-15",
      status: "at-risk",
      completionPercentage: 45,
      organization: "TechStart Inc",
    },
    {
      id: "3",
      title: "Database Migration",
      deadline: "2024-05-20",
      status: "delayed",
      completionPercentage: 30,
      organization: "Innovation Labs",
    },
  ],
  onProjectStatusChange = () => {},
  onProjectEdit = () => {},
  onProjectDelete = () => {},
}: ProjectGridProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            deadline={project.deadline}
            status={project.status}
            completionPercentage={project.completionPercentage}
            organization={project.organization}
            onStatusChange={(status) =>
              onProjectStatusChange(project.id, status)
            }
            onEdit={() => onProjectEdit(project.id)}
            onDelete={() => onProjectDelete(project.id)}
          />
        ))}
        n
      </div>
    </div>
  );
};

export default ProjectGrid;
