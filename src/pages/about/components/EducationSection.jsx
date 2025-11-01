import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EducationSection = () => {
  const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    period: "2016 - 2020",
    gpa: "3.8/4.0",
    description: "Focused on software engineering, algorithms, and database systems. Graduated Magna Cum Laude with specialization in backend systems and distributed computing.",
    coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering Principles",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies"],

    achievements: [
    "Dean\'s List for 6 consecutive semesters",
    "Led final year project on distributed payment systems",
    "Published research paper on microservices architecture",
    "President of Computer Science Student Association"],

    logo: "https://images.unsplash.com/photo-1588072351557-1457a8ac6fcd",
    logoAlt: "Addis Ababa University emblem featuring traditional Ethiopian design elements in blue and gold colors"
  }];


  const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023-001",
    logo: "https://images.unsplash.com/photo-1629640341147-e597cad2840e",
    logoAlt: "AWS certification badge with orange and white cloud computing logo",
    skills: ["Cloud Architecture", "AWS Services", "Scalability", "Security"]
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-002",
    logo: "https://images.unsplash.com/photo-1629640341147-e597cad2840e",
    logoAlt: "Google Cloud certification badge with multicolored Google logo on white background",
    skills: ["GCP Services", "Kubernetes", "DevOps", "Monitoring"]
  },
  {
    id: 3,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MDB-DEV-2022-003",
    logo: "https://images.unsplash.com/photo-1614787167957-ef05d03b7ad5",
    logoAlt: "MongoDB certification badge with green leaf logo on dark background",
    skills: ["NoSQL", "Database Design", "Aggregation", "Performance"]
  },
  {
    id: 4,
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2022",
    credentialId: "DCA-2022-004",
    logo: "https://images.unsplash.com/photo-1650264526473-b4a9f9473664",
    logoAlt: "Docker certification badge with blue whale logo and container graphics",
    skills: ["Containerization", "Orchestration", "DevOps", "Deployment"]
  }];


  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through formal education and industry-recognized certifications, staying current with evolving technologies and best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Icon name="GraduationCap" size={24} className="mr-3 text-primary" />
              Education
            </h3>

            {educationData?.map((edu) =>
            <div key={edu?.id} className="bg-background border border-border rounded-xl p-6 shadow-brand">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/30 flex-shrink-0">
                    <Image
                    src={edu?.logo}
                    alt={edu?.logoAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {edu?.degree}
                    </h4>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                      <Icon name="MapPin" size={16} />
                      <span>{edu?.institution}, {edu?.location}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-primary font-medium">{edu?.period}</span>
                      <span className="text-accent font-medium">GPA: {edu?.gpa}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {edu?.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="BookOpen" size={16} className="mr-2 text-accent" />
                      Key Coursework
                    </h5>
                    <ul className="space-y-1">
                      {edu?.coursework?.map((course, index) =>
                    <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <Icon name="Dot" size={12} className="mr-2 text-primary" />
                          {course}
                        </li>
                    )}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="Award" size={16} className="mr-2 text-warning" />
                      Achievements
                    </h5>
                    <ul className="space-y-1">
                      {edu?.achievements?.map((achievement, index) =>
                    <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <Icon name="Star" size={12} className="mr-2 text-warning" />
                          {achievement}
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Icon name="Award" size={24} className="mr-3 text-accent" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications?.map((cert) =>
              <div key={cert?.id} className="bg-background border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-strong transition-brand">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted/30 flex-shrink-0">
                      <Image
                      src={cert?.logo}
                      alt={cert?.logoAlt}
                      className="w-full h-full object-cover" />

                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {cert?.name}
                      </h4>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                        <Icon name="Building" size={16} />
                        <span>{cert?.issuer}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-primary font-medium">{cert?.date}</span>
                        <span className="text-muted-foreground">ID: {cert?.credentialId}</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-muted/50 rounded-lg transition-brand">
                      <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert?.skills?.map((skill, index) =>
                  <span
                    key={index}
                    className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">

                        {skill}
                      </span>
                  )}
                  </div>
                </div>
              )}
            </div>

            {/* Verification Note */}
            <div className="mt-8 p-4 bg-muted/20 border border-muted/30 rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-trust-builder" />
                <span>All certifications are verified and can be validated through official credential IDs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default EducationSection;