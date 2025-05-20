"use client";

import { useState } from 'react';
import { FileUploader } from '@/components/FileUploader';
import { CodePanel } from '@/components/CodePanel';
import { ErrorLocationFinder } from '@/components/ErrorLocationFinder';
import { Header } from '@/components/Header';
import { SourceMapResult } from '@/components/SourceMapResult';
import { useSourceMap } from '@/hooks/useSourceMap';
import { Layout } from '@/components/Layout';

export default function HomePage() {
  const [errorInput, setErrorInput] = useState('');
  const {
    minifiedSource,
    originalSource,
    sourceMapConsumer,
    setSourceFiles,
    findOriginalPosition,
    errorResult,
    isLoading,
  } = useSourceMap();

  return (
    <Layout>
      <Header />
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <FileUploader onFilesUpload={setSourceFiles} isLoading={isLoading} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CodePanel 
            title="Minified Source" 
            code={minifiedSource} 
            isLoading={isLoading}
            errorPosition={errorResult?.generatedPosition}
          />
          <CodePanel 
            title="Original Source" 
            code={originalSource} 
            isLoading={isLoading}
            errorPosition={errorResult?.originalPosition}
            fileName={errorResult?.source}
          />
        </div>
        
        <ErrorLocationFinder 
          errorInput={errorInput}
          setErrorInput={setErrorInput}
          onFindError={() => findOriginalPosition(errorInput)}
          isDisabled={!sourceMapConsumer}
        />
        
        {errorResult && <SourceMapResult result={errorResult} />}
      </div>
    </Layout>
  );
}