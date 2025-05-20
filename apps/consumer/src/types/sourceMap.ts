export interface Position {
  line: number;
  column: number;
}

export interface SourceMapFiles {
  minified: File;
  sourceMap: File;
}

export interface ErrorResult {
  generatedFile: string;
  generatedPosition: Position | null;
  source: string | null;
  originalPosition: Position | null;
  originalCode: string | null;
}