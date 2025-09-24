import React, { useState, useRef } from 'react';
import { Upload, File, X, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // in MB
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFileSelect, 
  accept = ".pdf", 
  maxSize = 10 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file: File): boolean => {
    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `File size must be less than ${maxSize}MB`,
        variant: "destructive",
      });
      return false;
    }

    // Check file type for PDF
    if (accept.includes('.pdf') && file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please select a PDF file",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleFiles = async (files: FileList) => {
    const file = files[0];
    if (!file || !validateFile(file)) return;

    setSelectedFile(file);
    setIsUploading(true);

    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      onFileSelect(file);
      setUploadComplete(true);
      setIsUploading(false);
      
      toast({
        title: "Resume uploaded successfully",
        description: "We'll review your application and get back to you soon!",
      });
    } catch (error) {
      setIsUploading(false);
      toast({
        title: "Upload failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    setUploadComplete(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (uploadComplete && selectedFile) {
    return (
      <div className="ai-card bg-secondary/10 border-secondary/20">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-secondary" />
            <div>
              <p className="font-medium text-gradient">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={removeFile}
            className="hover:bg-destructive/20 hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        multiple={false}
        onChange={handleChange}
        accept={accept}
        className="hidden"
      />
      
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer
          ${dragActive 
            ? 'border-secondary bg-secondary/10' 
            : 'border-border hover:border-secondary/50 hover:bg-secondary/5'
          }
          ${isUploading ? 'pointer-events-none opacity-50' : ''}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <div className="flex flex-col items-center space-y-4">
          {isUploading ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
              <p className="text-muted-foreground">Uploading your resume...</p>
            </div>
          ) : selectedFile ? (
            <div className="flex items-center space-x-3">
              <File className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="font-medium text-gradient">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          ) : (
            <>
              <Upload className="h-12 w-12 text-secondary" />
              <div className="space-y-2">
                <p className="text-lg font-medium text-gradient">
                  Drop your resume here, or click to select
                </p>
                <p className="text-sm text-muted-foreground">
                  PDF files up to {maxSize}MB
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;