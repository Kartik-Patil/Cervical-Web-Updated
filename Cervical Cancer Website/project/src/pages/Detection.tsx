import React, { useState } from 'react';
import { Upload, Image as ImageIcon, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Prediction {
  result: string;
  confidence: number;
}

function Detection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    try {
      setError(null);
      setPrediction(null);
      
      if (!file.type.startsWith('image/')) {
        throw new Error('Please upload an image file');
      }

      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target?.result as string);
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('image', file);

      setIsLoading(true);

      // TODO: Replace with your actual API endpoint
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction');
      }

      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Image Classification</h1>
        <p className="text-gray-400 text-center mb-8">Upload an image to get predictions from our ML model</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="flex flex-col items-center space-y-4">
                <Upload className="w-12 h-12 text-gray-400" />
                <div className="space-y-2">
                  <p className="text-lg">Drag and drop your image here</p>
                  <p className="text-sm text-gray-400">or</p>
                  <label className="inline-block">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file);
                      }}
                    />
                    <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors">
                      Browse Files
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Preview */}
            {selectedImage && (
              <div className="border border-gray-700 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Preview
                </h2>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Prediction Results</h2>

            {isLoading ? (
              <div className="flex items-center justify-center h-48">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : error ? (
              <div className="flex items-center gap-3 text-red-400 p-4 bg-red-950/50 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <p>{error}</p>
              </div>
            ) : prediction ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Prediction Complete</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">Result</h3>
                    <p className="text-2xl font-bold text-blue-400">
                      {prediction.result}
                    </p>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-medium mb-2">Confidence</h3>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-900 text-blue-300">
                            {Math.round(prediction.confidence * 100)}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-900">
                        <div
                          style={{ width: `${prediction.confidence * 100}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                <p>Upload an image to see predictions</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detection;