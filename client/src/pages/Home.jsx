import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Zap, BarChart2, Users, Globe } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  // Feature tabs data
  const featureTabs = [
    {
      id: 0,
      name: 'Lead Generation',
      description: 'Capture high-quality leads from multiple channels in one unified platform.',
      icon: <Users className="h-6 w-6 text-blue-600" />,
      features: [
        'Multi-channel lead capture forms',
        'Social media integration',
        'Website visitor tracking',
        'Lead scoring and qualification'
      ],
      image: "/api/placeholder/600/320"
    },
    {
      id: 1,
      name: 'Campaign Management',
      description: 'Create, track, and optimize marketing campaigns to maximize ROI.',
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      features: [
        'Campaign performance analytics',
        'Budget allocation and tracking',
        'A/B testing tools',
        'Channel performance comparison'
      ],
      image: "/api/placeholder/600/320"
    },
    {
      id: 2,
      name: 'Analytics Dashboard',
      description: 'Visualize your lead generation and conversion metrics in real-time.',
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      features: [
        'Real-time performance metrics',
        'Custom report generation',
        'Lead source attribution',
        'Conversion funnel analysis'
      ],
      image: "/api/placeholder/600/320"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      content: "LeadPulse transformed how we track and optimize our marketing campaigns. We've seen a 30% increase in qualified leads within just 3 months.",
      image: "/api/placeholder/64/64"
    },
    {
      name: 'Michael Chen',
      role: 'Growth Lead, StartupX',
      content: 'The analytics dashboard gives us insights we never had before. Now we can make data-driven decisions that have measurably improved our conversion rates.',
      image: "/api/placeholder/64/64"
    },
    {
      name: 'Lauren Smith',
      role: 'CMO, Retail Plus',
      content: "LeadPulse made it easy to understand which marketing channels were actually driving quality leads. We've optimized our budget allocation and seen tremendous ROI.",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Take control of your lead generation strategy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                LeadPulse helps marketing teams capture, analyze, and convert more high-quality leads with our all-in-one lead management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
              <div className="relative">
                <div className="bg-white p-4 rounded-lg shadow-xl">
                  <img 
                    src="/api/placeholder/500/350" 
                    alt="Dashboard preview" 
                    className="rounded" 
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-blue-500 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="bg-white p-2 rounded-full">
                      <ArrowRight className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Conversion Rate</p>
                      <p className="text-xl font-bold">+24.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 text-sm font-medium uppercase tracking-wider mb-6">
            Trusted by marketing teams at
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-gray-200 p-2 rounded">
                  <div className="h-8 w-24 flex items-center justify-center text-gray-500 font-semibold">
                    {company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              All-in-one lead management platform
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to capture, nurture, and convert leads into customers.
            </p>
          </div>

          <div className="mt-12">
            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center border-b border-gray-200">
              {featureTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex items-center pb-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Feature Content */}
            <div className="mt-12">
              {featureTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={activeTab === tab.id ? 'block' : 'hidden'}
                >
                  <div className="lg:flex lg:items-center lg:space-x-8">
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900">{tab.name}</h3>
                      <p className="mt-3 text-lg text-gray-500">{tab.description}</p>
                      
                      <div className="mt-6 space-y-4">
                        {tab.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-shrink-0">
                              <Check className="h-5 w-5 text-green-500" />
                            </div>
                            <p className="ml-3 text-base text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <Link 
                          to="/signup" 
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                          Learn more
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img 
                          src={tab.image} 
                          alt={tab.name} 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why marketing teams choose LeadPulse
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Streamline your lead generation and conversion process from start to finish.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Increased Efficiency</h3>
              <p className="mt-3 text-base text-gray-500">
                Automate your lead capture and qualification process to save time and focus on high-value activities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Data-Driven Decisions</h3>
              <p className="mt-3 text-base text-gray-500">
                Make informed marketing decisions with real-time analytics and comprehensive reporting tools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Improved ROI</h3>
              <p className="mt-3 text-base text-gray-500">
                Optimize your marketing spend by focusing on channels and campaigns that deliver the highest quality leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What our customers say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Hear from marketing teams that have transformed their lead generation strategy.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full" 
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Ready to transform your lead generation?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-blue-100">
                Join thousands of marketing teams already using LeadPulse to capture and convert more high-quality leads.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
              <Link 
                to="/signup" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Get started free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="#" 
                className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-600"
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}