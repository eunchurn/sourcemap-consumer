"use client";

import { UploadIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SourceMapFiles } from "@/types/sourceMap";

interface FileUploaderProps {
  onFilesUpload: (files: SourceMapFiles) => void;
  isLoading: boolean;
}

export function FileUploader({ onFilesUpload, isLoading }: FileUploaderProps) {
  const [minifiedFile, setMinifiedFile] = useState<File | null>(null);
  const [sourceMapFile, setSourceMapFile] = useState<File | null>(null);

  const handleMinifiedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMinifiedFile(e.target.files[0]);
    }
  };

  const handleSourceMapChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSourceMapFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!minifiedFile || !sourceMapFile) return;

    onFilesUpload({
      minified: minifiedFile,
      sourceMap: sourceMapFile,
    });
  };

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-xl">Upload Files</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="minified-js" className="text-sm font-medium">
              Minified JavaScript:
            </Label>
            <div className="border border-input rounded-md px-4 py-3 flex justify-between items-center">
              <span className="truncate max-w-[200px]">
                {minifiedFile ? minifiedFile.name : "No file selected"}
              </span>
              <Label 
                htmlFor="minified-js"
                className="cursor-pointer bg-muted hover:bg-muted/80 px-3 py-1 rounded text-sm"
              >
                Browse
              </Label>
            </div>
            <input
              id="minified-js"
              type="file"
              accept=".js"
              className="hidden"
              onChange={handleMinifiedChange}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="source-map" className="text-sm font-medium">
              Source Map:
            </Label>
            <div className="border border-input rounded-md px-4 py-3 flex justify-between items-center">
              <span className="truncate max-w-[200px]">
                {sourceMapFile ? sourceMapFile.name : "No file selected"}
              </span>
              <Label 
                htmlFor="source-map"
                className="cursor-pointer bg-muted hover:bg-muted/80 px-3 py-1 rounded text-sm"
              >
                Browse
              </Label>
            </div>
            <input
              id="source-map"
              type="file"
              accept=".map,.json"
              className="hidden"
              onChange={handleSourceMapChange}
            />
          </div>
        </div>
        
        <Button 
          onClick={handleUpload}
          disabled={!minifiedFile || !sourceMapFile || isLoading}
          className="mt-6 w-full"
        >
          <UploadIcon className="mr-2 h-4 w-4" />
          {isLoading ? "Processing..." : "Upload and Process"}
        </Button>
      </CardContent>
    </Card>
  );
}