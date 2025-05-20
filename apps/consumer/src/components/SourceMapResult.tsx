"use client";

import { clipboard } from "@/lib/clipboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { ErrorResult } from "@/types/sourceMap";
import { useToast } from "@/hooks/use-toast";

interface SourceMapResultProps {
  result: ErrorResult;
}

export function SourceMapResult({ result }: SourceMapResultProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const handleCopy = () => {
    const text = `${result.source}:${result.originalPosition?.line}:${result.originalPosition?.column}`;
    clipboard.copy(text);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: text,
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  if (!result.originalPosition) {
    return (
      <Card className="bg-destructive/10 border-destructive/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Could not find the original position for this error location.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-l-4 border-l-primary">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Original Source Location</CardTitle>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleCopy}
          className="h-8"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 mr-2" />
          ) : (
            <CopyIcon className="h-4 w-4 mr-2" />
          )}
          {copied ? "Copied" : "Copy"}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-1">Generated (Minified)</h3>
            <div className="bg-muted p-3 rounded-md">
              <p className="text-sm font-mono">
                {result.generatedFile}:{result.generatedPosition?.line}:{result.generatedPosition?.column}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Original</h3>
            <div className="bg-primary/10 p-3 rounded-md">
              <p className="text-sm font-mono">
                {result.source}:{result.originalPosition.line}:{result.originalPosition.column}
              </p>
            </div>
          </div>
        </div>

        {result.originalCode && (
          <div>
            <h3 className="text-sm font-medium mb-1">Original Code</h3>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto font-mono text-sm">
              {result.originalCode}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}