"use client";

import { useState } from "react";
import { SourceMapFiles, ErrorResult } from "@/types/sourceMap";
import { useToast } from "@/hooks/use-toast";
import sourceMap from "source-map-js";

sourceMap.SourceMapConsumer
export function useSourceMap() {
  // const [minifiedSource, setMinifiedSource] = useState<string>("");
  const [originalSource, setOriginalSource] = useState<string>("");
  const [sourceMapConsumer, setSourceMapConsumer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorResult, setErrorResult] = useState<ErrorResult | null>(null);
  const { toast } = useToast();

  // Process uploaded files
  const setSourceFiles = async (files: SourceMapFiles) => {
    if (!sourceMap) {
      toast({
        title: "Error",
        description: "Source map library not initialized yet",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setErrorResult(null);

    try {
      // Read minified source
      // const minifiedText = await readFileAsText(files.minified);
      // setMinifiedSource(minifiedText);

      // Read source map
      const sourceMapText = await readFileAsText(files.sourceMap);
      const sourceMapJson = JSON.parse(sourceMapText);

      // Initialize source map consumer
      const consumer = new sourceMap.SourceMapConsumer(sourceMapJson);
      setSourceMapConsumer(consumer);

      // Get original source content
      const sources = consumer.sources;
      const sourcesContent = consumer.sourcesContent;

      if (sources.length > 0 && sourcesContent && sourcesContent.length > 0) {
        // Show the first source file by default
        setOriginalSource(sourcesContent[0] || "");
      }

      toast({
        title: "Success",
        description: "Files processed successfully",
      });
    } catch (error) {
      console.error("Error processing files:", error);
      toast({
        title: "Error",
        description: "Failed to process the uploaded files",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Find original position from error input
  const findOriginalPosition = (errorInput: string) => {
    if (!sourceMapConsumer) {
      toast({
        title: "Error",
        description: "Source map not loaded yet",
        variant: "destructive",
      });
      return;
    }

    try {
      // Parse error input (filename:line:column)
      const parts = errorInput.split(":");

      if (parts.length < 3) {
        toast({
          title: "Invalid Format",
          description: "Please use format: filename:line:column",
          variant: "destructive",
        });
        return;
      }

      const file = parts[0];
      const line = parseInt(parts[1], 10);
      const column = parseInt(parts[2], 10);

      if (isNaN(line) || isNaN(column)) {
        toast({
          title: "Invalid Format",
          description: "Line and column must be numbers",
          variant: "destructive",
        });
        return;
      }

      // Find original position
      const originalPosition = sourceMapConsumer.originalPositionFor({
        line,
        column,
      });

      // Create the result object
      const result: ErrorResult = {
        generatedFile: file,
        generatedPosition: { line, column },
        source: originalPosition.source,
        originalPosition: originalPosition.line
          ? {
              line: originalPosition.line,
              column: originalPosition.column,
            }
          : null,
        originalCode: null,
      };

      // Get original source code if available
      if (originalPosition.source) {
        const sourceContent = sourceMapConsumer.sourceContentFor(
          originalPosition.source
        );
        if (sourceContent && originalPosition.line) {
          const lines = sourceContent.split("\n");
          // Set the original source text to show the file with the error
          setOriginalSource(sourceContent);

          // Get the specific line from the original source
          if (lines.length >= originalPosition.line) {
            result.originalCode = lines[originalPosition.line - 1];
          }
        }
      }

      setErrorResult(result);

      if (!result.originalPosition) {
        toast({
          title: "Not Found",
          description: "Could not find original position for this error",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error finding original position:", error);
      toast({
        title: "Error",
        description: "Failed to find original position",
        variant: "destructive",
      });
    }
  };

  // Helper to read file as text
  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          resolve(event.target.result as string);
        } else {
          reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsText(file);
    });
  };

  return {
    // minifiedSource,
    originalSource,
    sourceMapConsumer,
    setSourceFiles,
    findOriginalPosition,
    errorResult,
    isLoading,
  };
}

// Add this to make TypeScript happy
declare global {
  interface Window {
    sourceMap: any;
  }
}
