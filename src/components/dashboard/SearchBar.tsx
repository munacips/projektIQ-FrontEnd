import React from "react";
import { Search } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const SearchBar = ({
  onSearch = () => {},
  placeholder = "Search projects and organizations...",
  isOpen = false,
  onOpenChange = () => {},
}: SearchBarProps) => {
  const mockSearchResults = [
    { type: "project", name: "Website Redesign", status: "In Progress" },
    { type: "project", name: "Mobile App Development", status: "On Track" },
    { type: "organization", name: "Acme Corp", activeProjects: 5 },
    { type: "organization", name: "TechStart Inc", activeProjects: 3 },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white">
      <Command className="rounded-lg border shadow-md">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandInput
            placeholder={placeholder}
            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            onValueChange={(value) => onSearch(value)}
          />
        </div>
        <CommandList className="max-h-[300px] overflow-y-auto">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Projects">
            {mockSearchResults
              .filter((item) => item.type === "project")
              .map((project, index) => (
                <CommandItem
                  key={`project-${index}`}
                  className="flex items-center justify-between py-2"
                >
                  <span>{project.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {project.status}
                  </span>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Organizations">
            {mockSearchResults
              .filter((item) => item.type === "organization")
              .map((org, index) => (
                <CommandItem
                  key={`org-${index}`}
                  className="flex items-center justify-between py-2"
                >
                  <span>{org.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {org.activeProjects} Projects
                  </span>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>

      <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Create New Project</CommandItem>
            <CommandItem>View All Organizations</CommandItem>
            <CommandItem>Show Recent Activities</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchBar;
