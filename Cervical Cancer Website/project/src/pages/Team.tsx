import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

// Replace these with actual team member information
const teamMembers: TeamMember[] = [
  {
    name: "Team Lead Name",
    role: "Project Lead & ML Engineer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
    bio: "Experienced in machine learning and computer vision, leading the development of our AI model.",
    social: {
      github: "#",
      linkedin: "#",
      email: "mailto:lead@example.com"
    }
  },
  {
    name: "Member Name",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Specializing in medical image processing and data analysis.",
    social: {
      github: "#",
      linkedin: "#",
      email: "mailto:member1@example.com"
    }
  },
  {
    name: "Member Name",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
    bio: "Full stack developer with expertise in React and Python.",
    social: {
      github: "#",
      linkedin: "#",
      email: "mailto:member2@example.com"
    }
  }
];

function Team() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Meet Our Team
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We're a dedicated team of researchers and developers working to make cervical cancer detection more accessible and accurate.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-400">{member.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300">{member.bio}</p>
              
              <div className="flex space-x-4 pt-4">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={member.social.email}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
        <p className="text-gray-300 mb-6">
          We're always looking for passionate individuals to join our mission. If you're interested in contributing to this project, feel free to reach out to any team member.
        </p>
      </section>
    </div>
  );
}

export default Team;