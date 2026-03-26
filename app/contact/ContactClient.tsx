"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Office", value: "123 Liverpool Street, London, EC2M 7PY", color: "#2563eb" },
  { icon: Phone, label: "Phone", value: "+44 20 7123 4567", color: "#06b6d4" },
  { icon: Mail, label: "Email", value: "hello@sparxgrowth.co.uk", color: "#8b5cf6" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 9am–6pm GMT", color: "#10b981" },
];

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '128px' }} className="min-h-screen">
      <div className="section-container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <AnimatedSection className="text-center mb-16">
          <span className="section-tag mb-6 inline-flex">Get In Touch</span>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-4">
            Let&apos;s <span className="glow-text">Talk Growth</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto">
            Book a free 30-minute strategy call and discover how we can help your business grow faster.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-5">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <AnimatedSection key={info.label} direction="left">
                  <div className="glass-card p-5 flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${info.color}20`, border: `1px solid ${info.color}30` }}
                    >
                      <Icon size={17} style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">{info.label}</p>
                      <p className="text-white text-sm font-medium">{info.value}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}

            <AnimatedSection direction="left" delay={0.3}>
              <div className="glass-card p-6 mt-4">
                <h3 className="text-white font-semibold mb-3 text-sm">What happens next?</h3>
                <div className="space-y-3">
                  {[
                    "We review your enquiry within 2 hours",
                    "A strategist calls you to learn more",
                    "We prepare a custom growth proposal",
                    "We start delivering results",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
                      >
                        {i + 1}
                      </div>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="right">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                  <h2 className="text-xl font-semibold text-white mb-2">Book Your Free Strategy Call</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                      { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
                      { id: "phone", label: "Phone", type: "tel", placeholder: "+44 7700 000000" },
                      { id: "company", label: "Company", type: "text", placeholder: "Your business name" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label className="block text-sm font-medium text-white/60 mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-blue-500/50 transition-colors"
                          value={formData[field.id as keyof typeof formData]}
                          onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Monthly Budget</label>
                    <select
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-500/50 transition-colors"
                      value={formData.budget}
                      onChange={(e) => setFormData((p) => ({ ...p, budget: e.target.value }))}
                    >
                      <option value="" className="bg-[#020818]">Select your budget</option>
                      {["£500–£1,000", "£1,000–£3,000", "£3,000–£5,000", "£5,000–£10,000", "£10,000+"].map((b) => (
                        <option key={b} value={b} className="bg-[#020818]">{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Tell us about your goals</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your business, current challenges, and what you'd like to achieve..."
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-blue-500/50 transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={16} />
                    Send My Enquiry
                  </motion.button>

                  <p className="text-center text-xs text-white/30">
                    We respond to every enquiry within 2 business hours. No spam, ever.
                  </p>
                </form>
              ) : (
                <div className="glass-card p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
                  >
                    <CheckCircle size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">Message Received!</h3>
                  <p className="text-white/60">
                    Thanks for reaching out. A member of our team will contact you within 2 business hours.
                  </p>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
