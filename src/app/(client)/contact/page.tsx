import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/features/contact/features/contact-form";
import Navbar from "@/features/public/components/navbar";
import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";

function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navbar slug="products" className="text-slate-800"/>
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                  <span>contact@mobilestorename.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-primary" />
                  <span>123 Mobile Street, Techville, TX 12345</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Map Placeholder</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
