import { useState } from 'react';
import { 
  BarChart3, 
  PieChart, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar, 
  Bell, 
  Settings, 
  Search, 
  Filter, 
  Download, 
  ChevronDown, 
  TrendingUp, 
  Zap,
  Menu
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';

export default function Dashboard() {
  const [currentDate] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data for charts and metrics
  const leadData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 750 }
  ];

  const conversionData = [
    { name: 'Jan', leads: 400, conversions: 240 },
    { name: 'Feb', leads: 300, conversions: 139 },
    { name: 'Mar', leads: 600, conversions: 380 },
    { name: 'Apr', leads: 800, conversions: 520 },
    { name: 'May', leads: 750, conversions: 490 }
  ];

  const sourceData = [
    { name: 'Website', value: 40 },
    { name: 'Social', value: 25 },
    { name: 'Email', value: 20 },
    { name: 'Referral', value: 15 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const campaignData = [
    { name: 'Spring Sale', leads: 120, conversion: 28, roi: 3.2 },
    { name: 'Product Launch', leads: 93, conversion: 36, roi: 4.1 },
    { name: 'Webinar Series', leads: 87, conversion: 24, roi: 2.8 },
    { name: 'Email Nurture', leads: 65, conversion: 19, roi: 2.4 },
    { name: 'Social Contest', leads: 54, conversion: 22, roi: 1.9 }
  ];

  const recentLeads = [
    { name: 'Sarah Thompson', email: 'sarah.t@example.com', source: 'Website Form', status: 'New', score: 85 },
    { name: 'Michael Rodriguez', email: 'mrodriguez@example.net', source: 'LinkedIn Ad', status: 'Contacted', score: 72 },
    { name: 'Jennifer Liu', email: 'jliu@company.org', source: 'Webinar', status: 'Qualified', score: 91 },
    { name: 'David Patel', email: 'd.patel@startup.co', source: 'Website Chat', status: 'New', score: 65 },
    { name: 'Alex Johnson', email: 'alexj@enterprise.com', source: 'Email Campaign', status: 'Nurturing', score: 78 }
  ];

  // Format date
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-blue-700">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">LeadPulse</h1>
          ) : (
            <span className="text-xl font-bold">LP</span>
          )}
          <button onClick={toggleSidebar} className="p-1 rounded-full hover:bg-blue-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-2">
          <a href="#" className="flex items-center px-4 py-3 text-white bg-blue-900 rounded-md">
            <BarChart3 className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Dashboard</span>}
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-blue-200 hover:bg-blue-700 rounded-md">
            <Users className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Leads</span>}
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-blue-200 hover:bg-blue-700 rounded-md">
            <TrendingUp className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Campaigns</span>}
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-blue-200 hover:bg-blue-700 rounded-md">
            <PieChart className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Analytics</span>}
          </a>
        </nav>

        <div className="p-4 border-t border-blue-700">
          <a href="#" className="flex items-center px-4 py-3 text-blue-200 hover:bg-blue-700 rounded-md">
            <Settings className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Settings</span>}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Dashboard
              </h2>
              <p className="ml-4 text-sm text-gray-500">
                {formatDate(currentDate)}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/32/32"
                  alt="User profile"
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Marketing Admin
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Total Leads</h3>
                <span className="flex items-center text-xs font-medium text-green-600">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  24.5%
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-gray-800">1,248</span>
                <span className="ml-2 text-sm text-gray-500">this month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Conversion Rate</h3>
                <span className="flex items-center text-xs font-medium text-green-600">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  12.3%
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-gray-800">18.7%</span>
                <span className="ml-2 text-sm text-gray-500">avg. this month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Avg. Lead Quality</h3>
                <span className="flex items-center text-xs font-medium text-green-600">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  8.1%
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-gray-800">72/100</span>
                <span className="ml-2 text-sm text-gray-500">score</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-500 text-sm">Cost Per Lead</h3>
                <span className="flex items-center text-xs font-medium text-red-600">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  3.2%
                </span>
              </div>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-gray-800">$21.45</span>
                <span className="ml-2 text-sm text-gray-500">avg. this month</span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Lead Trend Chart */}
            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-800">Lead Generation Trend</h3>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-md">
                    Monthly
                  </button>
                  <button className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-md">
                    Weekly
                  </button>
                  <button className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-md">
                    Daily
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={leadData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Lead Sources Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-800">Lead Sources</h3>
                <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={sourceData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Campaign Performance and Recent Leads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Campaign Performance */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-800">Campaign Performance</h3>
                <div className="flex items-center space-x-2">
                  <button className="text-sm text-blue-600 flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </button>
                  <button className="text-sm text-gray-500 flex items-center">
                    View All <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="px-4 py-2">Campaign</th>
                      <th className="px-4 py-2">Leads</th>
                      <th className="px-4 py-2">Conv. %</th>
                      <th className="px-4 py-2">ROI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {campaignData.map((campaign, index) => (
                      <tr key={index} className="text-sm">
                        <td className="px-4 py-3 font-medium text-gray-800">{campaign.name}</td>
                        <td className="px-4 py-3 text-gray-600">{campaign.leads}</td>
                        <td className="px-4 py-3 text-gray-600">{campaign.conversion}%</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            campaign.roi > 3 ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {campaign.roi}x
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Leads */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-800">Recent Leads</h3>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-md">
                    All Leads
                  </button>
                  <button className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-md">
                    New
                  </button>
                  <button className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-md">
                    Qualified
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Source</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentLeads.map((lead, index) => (
                      <tr key={index} className="text-sm hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div>
                            <div className="font-medium text-gray-800">{lead.name}</div>
                            <div className="text-gray-500 text-xs">{lead.email}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{lead.source}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            lead.status === 'New' ? 'bg-blue-100 text-blue-800' : 
                            lead.status === 'Qualified' ? 'bg-green-100 text-green-800' : 
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  lead.score > 80 ? 'bg-green-500' : 
                                  lead.score > 70 ? 'bg-blue-500' : 'bg-yellow-500'
                                }`} 
                                style={{ width: `${lead.score}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-medium text-gray-600">{lead.score}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">View all leads</a>
              </div>
            </div>
          </div>

          {/* Conversion Funnel Chart */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-800">Lead Conversion Funnel</h3>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-xs text-gray-500 hover:bg-gray-100 rounded-md flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Last 30 Days
                </button>
                <button className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-md">
                  Compare
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={conversionData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="leads" name="Total Leads" fill="#3B82F6" />
                  <Bar dataKey="conversions" name="Conversions" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Setup Lead Scoring</h3>
                  <p className="text-gray-600 mt-1">
                    Automatically qualify leads based on behavior and demographics.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                    Configure Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Import Contacts</h3>
                  <p className="text-gray-600 mt-1">
                    Import contacts from CSV, CRM or other marketing platforms.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700">
                    Import Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">Create Campaign</h3>
                  <p className="text-gray-600 mt-1">
                    Launch a new campaign to generate and nurture leads.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}