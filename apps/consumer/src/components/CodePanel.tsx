"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Position } from "@/types/sourceMap";
import { Skeleton } from "@/components/ui/skeleton";

interface CodePanelProps {
  title: string;
  code: string;
  isLoading: boolean;
  errorPosition?: Position | null;
  fileName?: string | null;
}

export function CodePanel({ 
  title, 
  code, 
  isLoading, 
  errorPosition,
  fileName
}: CodePanelProps) {
  const codeRef = useRef<HTMLPreElement>(null);

  // Add line numbers and syntax highlighting
  const formattedCode = code.split("\n").map((line, i) => (
    <div key={i} className="flex">
      <span className="text-muted-foreground w-10 text-right pr-4 select-none">
        {i + 1}
      </span>
      <span className="flex-1">{line}</span>
    </div>
  ));

  // Scroll to error position when it changes
  useEffect(() => {
    if (errorPosition && codeRef.current) {
      const lineElements = codeRef.current.querySelectorAll("div");
      
      if (errorPosition.line && lineElements.length >= errorPosition.line) {
        const lineElement = lineElements[errorPosition.line - 1];
        lineElement.scrollIntoView({ behavior: "smooth", block: "center" });
        
        // Highlight the line
        lineElement.classList.add("bg-yellow-500/10", "border-l-2", "border-yellow-500");
      }
    }
  }, [errorPosition]);

  return (
    <Card className="h-[500px] overflow-hidden flex flex-col">
      <CardHeader className="py-3 px-4 border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-md font-medium">
            {title}
            {fileName && <span className="ml-2 text-sm text-muted-foreground">({fileName})</span>}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0 overflow-hidden flex-1 relative">
        {isLoading ? (
          <div className="p-4 h-full space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : (
          <pre 
            ref={codeRef}
            className="font-mono text-sm p-4 h-full overflow-auto bg-muted/30"
          >
            {code ? formattedCode : <span className="text-muted-foreground">No code to display</span>}
          </pre>
        )}
      </CardContent>
    </Card>
  );
}