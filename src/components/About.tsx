import { Target, Heart, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To unite tech communities worldwide and foster innovation through collaboration and knowledge sharing.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in the power of community-driven development and inclusive technology ecosystems.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Showcasing cutting-edge technologies and breakthrough innovations from communities globally.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating lasting connections that transcend borders and drive technological advancement.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Tech Communities Day
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Tech Communities Day is the premier annual event that brings together the most vibrant 
            tech communities from around Africa. Since 2023, we've been fostering innovation, 
            collaboration, and growth in the technology ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-200">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Journey</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2023</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Founded with 05 communities</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2024</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Expanded to 15 communities</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold dark:text-white mb-2">2025</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Reached 25 communities</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h4 className="font-semibold dark:text-white mb-2">2026</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Plan to bring together 50+ communities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;