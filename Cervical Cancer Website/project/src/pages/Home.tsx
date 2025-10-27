import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Users, Activity, ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Understanding Cervical Cancer
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Early detection and awareness are crucial in the fight against cervical cancer.
          Our AI-powered solution aims to make detection more accessible and efficient.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-red-400" />
            <h2 className="text-xl font-semibold">What is Cervical Cancer?</h2>
          </div>
          <p className="text-gray-300">
            Cervical cancer is a type of cancer that occurs in the cells of the cervix - the lower part of the uterus that connects to the vagina. Various strains of the human papillomavirus (HPV) play a role in causing most cervical cancer cases.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-blue-400" />
            <h2 className="text-xl font-semibold">Global Impact</h2>
          </div>
          <p className="text-gray-300">
            Cervical cancer is the fourth most common cancer in women worldwide. In 2020, an estimated 604,000 women were diagnosed with cervical cancer worldwide and about 342,000 women died from the disease.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-8 h-8 text-green-400" />
            <h2 className="text-xl font-semibold">Prevention & Detection</h2>
          </div>
          <p className="text-gray-300">
            Regular screening and early detection are vital in preventing cervical cancer. When found early, cervical cancer is one of the most successfully treatable cancers.
          </p>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Try Our Detection Tool?</h2>
        <p className="text-gray-300 mb-6">
          Our AI-powered tool can help in early detection. Upload your cervical cell images for instant analysis.
        </p>
        <Link
          to="/detection"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Try Detection Tool
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Risk Factors</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Common Risk Factors</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>HPV infection</li>
              <li>Smoking</li>
              <li>Weakened immune system</li>
              <li>Multiple sexual partners</li>
              <li>Early sexual activity</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Prevention Methods</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Regular Pap tests</li>
              <li>HPV vaccination</li>
              <li>Safe sexual practices</li>
              <li>Quitting smoking</li>
              <li>Regular health check-ups</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;