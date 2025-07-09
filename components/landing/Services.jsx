import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  Target,
  Megaphone,
  BarChart3,
  Search,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description:
      "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description:
      "Maximize your ROI with expertly managed Google Ads, Facebook Ads, and other paid campaigns.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Dominate search results with our proven SEO strategies that drive organic traffic and conversions.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Build a powerful social presence that engages your audience and converts followers into customers.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Track your success with detailed analytics and transparent reporting that shows real results.",
  },
  {
    icon: Smartphone,
    title: "Mobile Marketing",
    description:
      "Reach customers on-the-go with mobile-optimized campaigns and app marketing strategies.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we offer comprehensive marketing
            solutions that help your business grow and thrive in the digital
            landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
