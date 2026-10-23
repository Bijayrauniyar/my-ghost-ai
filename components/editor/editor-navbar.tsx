"use client";

import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface EditorNavbarProps {
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  title?: string;
  leftSection?: React.ReactNode;
  centerSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  className?: string;
}

export function EditorNavbar({
  isSidebarOpen = false,
  onToggleSidebar,
  title = "Ghost AI",
  leftSection,
  centerSection,
  rightSection,
  className,
}: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "h-12 w-full shrink-0 border-b border-surface-border bg-surface px-4 flex items-center justify-between select-none",
        className
      )}
    >
      {/* Left section: sidebar toggle button */}
      <div className="flex items-center gap-2 min-w-0 sm:min-w-[140px]">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          className="text-copy-muted hover:text-copy-primary hover:bg-subtle"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <PanelLeftOpen className="h-4 w-4" />
          )}
        </Button>
        {leftSection}
      </div>

      {/* Center section */}
      <div className="flex items-center justify-center flex-1 min-w-0 px-4">
        {centerSection ?? (
          <span className="text-sm font-medium text-copy-primary tracking-tight truncate">
            {title}
          </span>
        )}
      </div>

      {/* Right section: stays empty for now */}
      <div className="flex items-center justify-end gap-2 min-w-0 sm:min-w-[140px]">
        {rightSection}
      </div>
    </header>
  );
}
