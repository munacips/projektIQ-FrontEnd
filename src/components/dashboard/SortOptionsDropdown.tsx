import React from "react";
import { ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortOptionsDropdownProps {
  onSortChange?: (sortOption: string) => void;
  selectedSort?: string;
}

const SortOptionsDropdown = ({
  onSortChange = () => {},
  selectedSort = "name-asc",
}: SortOptionsDropdownProps) => {
  const sortOptions = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "deadline-asc", label: "Deadline (Earliest)" },
    { value: "deadline-desc", label: "Deadline (Latest)" },
    { value: "progress-asc", label: "Progress (Low-High)" },
    { value: "progress-desc", label: "Progress (High-Low)" },
  ];

  return (
    <div className="w-[160px] bg-white">
      <Select value={selectedSort} onValueChange={onSortChange}>
        <SelectTrigger className="w-full h-10">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4" />
            <SelectValue placeholder="Sort by" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="flex items-center gap-2"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortOptionsDropdown;
