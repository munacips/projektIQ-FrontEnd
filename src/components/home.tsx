import React from "react";
import SearchBar from "./dashboard/SearchBar";
import QuickActionsToolbar from "./dashboard/QuickActionsToolbar";
import MetricsPanel from "./dashboard/MetricsPanel";
import ProjectGrid from "./dashboard/ProjectGrid";
import OrganizationsSection from "./dashboard/OrganizationsSection";

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("all");
  const [selectedSort, setSelectedSort] = React.useState("name-asc");
  const [isAddProjectOpen, setIsAddProjectOpen] = React.useState(false);

  const handleProjectAdd = (projectData: any) => {
    console.log("Adding project:", projectData);
  };

  const handleProjectStatusChange = (projectId: string, status: string) => {
    console.log(`Changing project ${projectId} status to ${status}`);
  };

  const handleProjectEdit = (projectId: string) => {
    console.log(`Editing project ${projectId}`);
  };

  const handleProjectDelete = (projectId: string) => {
    console.log(`Deleting project ${projectId}`);
  };

  const handleOrganizationRatingChange = (
    organizationId: string,
    rating: number,
  ) => {
    console.log(`Changing organization ${organizationId} rating to ${rating}`);
  };

  const handleOrganizationEdit = (organizationId: string) => {
    console.log(`Editing organization ${organizationId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-6">
      <div className="space-y-6">
        <SearchBar
          onSearch={setSearchQuery}
          placeholder="Search projects and organizations..."
        />

        <QuickActionsToolbar
          onProjectAdd={handleProjectAdd}
          onStatusChange={setSelectedStatus}
          onSortChange={setSelectedSort}
          selectedStatus={selectedStatus}
          selectedSort={selectedSort}
          isAddProjectOpen={isAddProjectOpen}
          onAddProjectOpenChange={setIsAddProjectOpen}
        />

        <MetricsPanel
          totalProjects={12}
          overdueTasks={3}
          upcomingDeadlines={5}
          projectProgress={65}
        />

        <ProjectGrid
          onProjectStatusChange={handleProjectStatusChange}
          onProjectEdit={handleProjectEdit}
          onProjectDelete={handleProjectDelete}
        />

        <OrganizationsSection
          onOrganizationRatingChange={handleOrganizationRatingChange}
          onOrganizationEdit={handleOrganizationEdit}
        />
      </div>
    </div>
  );
};

export default Home;
