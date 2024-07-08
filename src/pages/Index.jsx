import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <img src="/placeholder.svg" alt="placeholder" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Job</h1>
          <div className="flex justify-center space-x-2">
            <Input type="text" placeholder="Job title" className="w-1/3" />
            <Input type="text" placeholder="Location" className="w-1/3" />
            <Button variant="primary" size="lg"><Search className="mr-2 h-5 w-5" />Search</Button>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((job) => (
            <Card key={job}>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
                <p>Company Name - Location</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Brief description of the job listing.</p>
                <Button variant="link" className="mt-4" as="a" href={`/apply/${job}`}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Logos */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Top Companies Hiring</h2>
          <Carousel>
            <CarouselContent className="flex space-x-4">
              {[1, 2, 3, 4, 5, 6].map((company) => (
                <CarouselItem key={company} className="flex-shrink-0 w-40 h-40 bg-white p-4 rounded-lg shadow-md">
                  <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-full" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold">Search Jobs</h3>
            <p className="text-muted-foreground">Find the perfect job that matches your skills and interests.</p>
          </div>
          <div>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold">Apply</h3>
            <p className="text-muted-foreground">Submit your application and get in touch with employers.</p>
          </div>
          <div>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold">Get Hired</h3>
            <p className="text-muted-foreground">Start your new career with your dream job.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial}>
                <CardHeader className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">User Name</h3>
                    <p className="text-muted-foreground">Job Title</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"This website helped me find my dream job! Highly recommended."</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-4 py-10">
        <div className="bg-gray-800 text-white p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">Sign up for our newsletter to get the latest job listings and updates.</p>
          <div className="flex justify-center space-x-2">
            <Input type="email" placeholder="Your email address" className="w-1/3" />
            <Button variant="primary" size="lg"><Mail className="mr-2 h-5 w-5" />Sign Up</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;