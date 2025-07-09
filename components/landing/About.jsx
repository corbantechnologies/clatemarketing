import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Zap } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Clate Marketing Agency?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over a decade of experience in digital marketing, we've
              helped hundreds of businesses transform their online presence and
              achieve unprecedented growth. Our data-driven approach ensures
              every campaign delivers measurable results.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">
                  Proven track record of 250% average ROI increase
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">
                  Dedicated account managers for personalized service
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">
                  Transparent reporting with real-time analytics
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">
                  Award-winning creative team and strategists
                </span>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-purple-100">Expert Team Members</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-xl text-white text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-blue-100">Industry Awards</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white text-center">
              <Zap className="h-12 w-12 mx-auto mb-4" />
              <div className="text-2xl font-bold">99%</div>
              <div className="text-green-100">Campaign Success Rate</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-orange-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
