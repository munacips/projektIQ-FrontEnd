import React from "react";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatusFilterDropdownProps {
  onStatusChange?: (status: string) => void;
  selectedStatus?: string;
}

const StatusFilterDropdown = ({
  onStatusChange = () => {},
  selectedStatus = "all",
}: StatusFilterDropdownProps) => {
  const statuses = [
    { value: "all", label: "All Statuses" },
    { value: "on-track", label: "On Track" },
    { value: "at-risk", label: "At Risk" },
    { value: "delayed", label: "Delayed" },
  ];

  return (
    <div className="w-[180px] bg-white">
      <Select value={selectedStatus} onValueChange={onStatusChange}>
        <SelectTrigger className="w-full h-10">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {statuses.map((status) => (
            <SelectItem
              key={status.value}
              value={status.value}
              className="flex items-center gap-2"
            >
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StatusFilterDropdown;
