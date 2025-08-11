import { Download, BarChart3, Users, TrendingUp, Calendar } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      year: '2023',
      title: 'Tech Communities Day 2023 Annual Report',
      description: 'Comprehensive overview of our largest event yet, featuring 500+ communities and 10,000+ attendees.',
      highlights: [
        '500+ Tech Communities Participated',
        '10,000+ Attendees from 50+ Countries',
        '150+ Sessions and Workshops',
        '95% Satisfaction Rate',
      ],
      fileSize: '12.5 MB',
      pages: 48,
      downloadUrl: '#',
      coverImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '2022',
      title: 'Tech Communities Day 2022 Impact Report',
      description: 'Analyzing the growth and impact of tech communities worldwide, with focus on diversity and inclusion.',
      highlights: [
        '300+ Tech Communities Joined',
        '7,500+ Active Participants',
        '120+ Educational Sessions',
        '40% Increase in Female Participation',
      ],
      fileSize: '8.2 MB',
      pages: 36,
      downloadUrl: '#',
      coverImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '2021',
      title: 'Digital Transformation Report 2021',
      description: 'How tech communities adapted to remote collaboration and virtual events during the pandemic.',
      highlights: [
        '150+ Communities Went Digital',
        '5,000+ Virtual Attendees',
        '80+ Online Workshops',
        '100% Remote Event Success',
      ],
      fileSize: '6.8 MB',
      pages: 28,
      downloadUrl: '#',
      coverImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const keyMetrics = [
    {
      icon: Users,
      label: 'Total Communities',
      value: '500+',
      growth: '+67%',
      color: 'blue',
    },
    {
      icon: TrendingUp,
      label: 'Annual Growth',
      value: '150%',
      growth: '+25%',
      color: 'green',
    },
    {
      icon: BarChart3,
      label: 'Event Sessions',
      value: '450+',
      growth: '+80%',
      color: 'purple',
    },
    {
      icon: Calendar,
      label: 'Years Running',
      value: '4',
      growth: 'Since 2020',
      color: 'orange',
    },
  ];

  return (
    <section id="reports" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Annual Reports
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore our comprehensive annual reports showcasing the growth, impact, and achievements 
            of the global tech communities ecosystem.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className={`w-12 h-12 rounded-lg bg-${metric.color}-100 flex items-center justify-center mb-4`}>
                <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</p>
                <p className={`text-xs font-medium text-${metric.color}-600 dark:text-${metric.color}-400`}>{metric.growth}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="space-y-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Report Cover */}
                <div className="relative">
                  <img
                    src={report.coverImage}
                    alt={`${report.title} Cover`}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {report.year}
                  </div>
                </div>

                {/* Report Content */}
                <div className="lg:col-span-2 p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{report.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{report.description}</p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Highlights:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {report.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Report Meta & Download */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{report.pages} pages</span>
                        <span>•</span>
                        <span>{report.fileSize}</span>
                        <span>•</span>
                        <span>PDF Format</span>
                      </div>
                      <a
                        href={report.downloadUrl}
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest reports, insights, and updates 
            from the tech communities ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;