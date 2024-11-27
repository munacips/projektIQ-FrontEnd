import React from "react";
import AddProjectButton from "./AddProjectButton";
import StatusFilterDropdown from "./StatusFilterDropdown";
import SortOptionsDropdown from "./SortOptionsDropdown";

interface QuickActionsToolbarProps {
  onProjectAdd?: (projectData: any) => void;
  onStatusChange?: (status: string) => void;
  onSortChange?: (sortOption: string) => void;
  selectedStatus?: string;
  selectedSort?: string;
  isAddProjectOpen?: boolean;
  onAddProjectOpenChange?: (open: boolean) => void;
}

const QuickActionsToolbar = ({
  onProjectAdd = () => {},
  onStatusChange = () => {},
  onSortChange = () => {},
  selectedStatus = "all",
  selectedSort = "name-asc",
  isAddProjectOpen = false,
  onAddProjectOpenChange = () => {},
}: QuickActionsToolbarProps) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <AddProjectButton
            onProjectAdd={onProjectAdd}
            isOpen={isAddProjectOpen}
            onOpenChange={onAddProjectOpenChange}
          />
        </div>
        <div className="flex items-center gap-4">
          <StatusFilterDropdown
            onStatusChange={onStatusChange}
            selectedStatus={selectedStatus}
          />
          <SortOptionsDropdown
            onSortChange={onSortChange}
            selectedSort={selectedSort}
          />
        </div>
      </div>
    </div>
  );
};

export default QuickActionsToolbar;
