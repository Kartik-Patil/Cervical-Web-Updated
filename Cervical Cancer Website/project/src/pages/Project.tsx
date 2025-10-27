import React from 'react';
import { Brain, Target, Zap, CheckCircle2 } from 'lucide-react';

function Project() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Our Project
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Leveraging artificial intelligence to make cervical cancer detection more accessible,
          accurate, and efficient for healthcare providers worldwide.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-10 h-10 text-purple-400" />
            <h2 className="text-2xl font-semibold">Deep Learning Model</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Our project utilizes a state-of-the-art deep learning model trained on thousands of cervical cell images. The model has been trained to identify various cellular abnormalities that may indicate precancerous or cancerous conditions.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              High accuracy in detection
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Fast processing time
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Continuous learning capabilities
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-10 h-10 text-blue-400" />
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-300 mb-4">
            We aim to reduce the global impact of cervical cancer by making early detection more accessible and accurate. Our tool serves as a valuable aid to healthcare professionals in their diagnostic process.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Support healthcare professionals
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Improve early detection rates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Increase accessibility to screening
            </li>
          </ul>
        </div>
      </div>

      <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold">Upload</h3>
            <p className="text-gray-300">
              Upload cervical cell images through our secure interface
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold">Analysis</h3>
            <p className="text-gray-300">
              Our AI model analyzes the images for cellular abnormalities
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold">Results</h3>
            <p className="text-gray-300">
              Receive detailed results with confidence scores
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">For Healthcare Providers</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Faster screening process</li>
              <li>Reduced manual analysis time</li>
              <li>Higher accuracy in detection</li>
              <li>Support for decision making</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">For Patients</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Earlier detection of abnormalities</li>
              <li>Faster test results</li>
              <li>More accessible screening</li>
              <li>Better health outcomes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;