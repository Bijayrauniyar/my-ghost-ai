"use client";

import * as React from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewProject?: () => void;
  className?: string;
}

export function ProjectSidebar({
  isOpen,
  onClose,
  onNewProject,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      aria-label="Projects sidebar"
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={cn(
        "fixed top-14 left-3 bottom-3 z-40 w-80 flex flex-col rounded-2xl border border-surface-border bg-surface/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1.5rem)] pointer-events-none",
        className
      )}
    >
      {/* Header with Projects title + close button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-surface-border">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={onClose}
          aria-label="Close projects sidebar"
          className="text-copy-muted hover:text-copy-primary hover:bg-subtle"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs: My Projects & Shared */}
      <Tabs defaultValue="my-projects" className="flex flex-col flex-1 min-h-0">
        <div className="px-4 pt-3">
          <TabsList className="w-full grid grid-cols-2 bg-subtle">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
        </div>

        {/* My Projects empty state */}
        <TabsContent value="my-projects" className="flex-1 overflow-y-auto px-4 mt-2">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-sm font-medium text-copy-secondary">No projects yet</p>
            <p className="text-xs text-copy-muted mt-1 max-w-[200px]">
              Create your first system design project to get started.
            </p>
          </div>
        </TabsContent>

        {/* Shared empty state */}
        <TabsContent value="shared" className="flex-1 overflow-y-auto px-4 mt-2">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-sm font-medium text-copy-secondary">No shared projects</p>
            <p className="text-xs text-copy-muted mt-1 max-w-[200px]">
              Projects shared with you by collaborators will appear here.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Bottom action: full-width New Project button with Plus icon */}
      <div className="p-3 border-t border-surface-border mt-auto">
        <Button className="w-full gap-2" onClick={onNewProject}>
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
