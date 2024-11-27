import React from "react";
import OrganizationCard from "./OrganizationCard";

interface Organization {
  id: string;
  name: string;
  rating: number;
  activeProjects: number;
  totalMembers: number;
  projectCompletion: number;
}

interface OrganizationsSectionProps {
  organizations?: Organization[];
  onOrganizationRatingChange?: (organizationId: string, rating: number) => void;
  onOrganizationEdit?: (organizationId: string) => void;
}

const OrganizationsSection = ({
  organizations = [
    {
      id: "1",
      name: "Acme Corporation",
      rating: 8,
      activeProjects: 12,
      totalMembers: 45,
      projectCompletion: 75,
    },
    {
      id: "2",
      name: "TechStart Inc",
      rating: 7,
      activeProjects: 8,
      totalMembers: 30,
      projectCompletion: 60,
    },
    {
      id: "3",
      name: "Innovation Labs",
      rating: 9,
      activeProjects: 15,
      totalMembers: 60,
      projectCompletion: 85,
    },
  ],
  onOrganizationRatingChange = () => {},
  onOrganizationEdit = () => {},
}: OrganizationsSectionProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Organizations</h2>
        <div className="text-sm text-muted-foreground">
          {organizations.length} organizations
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <OrganizationCard
            key={org.id}
            name={org.name}
            rating={org.rating}
            activeProjects={org.activeProjects}
            totalMembers={org.totalMembers}
            projectCompletion={org.projectCompletion}
            onRatingChange={(rating) =>
              onOrganizationRatingChange(org.id, rating)
            }
            onEdit={() => onOrganizationEdit(org.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationsSection;
