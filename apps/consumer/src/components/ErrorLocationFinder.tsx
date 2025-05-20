"use client";

import { SearchIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ErrorLocationFinderProps {
  errorInput: string;
  setErrorInput: (value: string) => void;
  onFindError: () => void;
  isDisabled: boolean;
}

export function ErrorLocationFinder({
  errorInput,
  setErrorInput,
  onFindError,
  isDisabled,
}: ErrorLocationFinderProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFindError();
  };

  return (
    <Card className="mb-8">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Find Error Location</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="error-input" className="text-sm font-medium">
              Error Location (e.g.): ,{" "}
              <div className="inline-block bg-muted p-3 rounded-md">
                <span className="text-sm font-mono">
                  ../../src/App.tsx:49:35182
                </span>
              </div>
            </Label>
            <div className="flex space-x-3">
              <Input
                id="error-input"
                value={errorInput}
                onChange={(e) => setErrorInput(e.target.value)}
                placeholder="e.g., bundle.js:1:1000"
                className="flex-1"
                disabled={isDisabled}
              />
              <Button type="submit" disabled={isDisabled || !errorInput}>
                <SearchIcon className="h-4 w-4 mr-2" />
                Find
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Enter the error location from your browser console or error log to
            find the corresponding location in your original source code.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
