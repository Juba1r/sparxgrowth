"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Tell us about your business",
    fields: [
      { id: "business_name", label: "Business Name", type: "text", placeholder: "e.g. The Grand Hotel London" },
      { id: "website", label: "Website URL", type: "url", placeholder: "https://yourwebsite.com" },
      { id: "industry", label: "Industry", type: "select", options: ["Hospitality", "Restaurant & Food", "E-Commerce", "Professional Services", "Healthcare", "Real Estate", "Technology", "Education", "Other"] },
    ],
  },
  {
    id: 2,
    title: "What are your main goals?",
    goals: [
      "Increase organic traffic",
      "Generate more leads",
      "Improve Google rankings",
      "Grow social media presence",
      "Improve conversion rates",
      "Increase online revenue",
    ],
  },
  {
    id: 3,
    title: "Your marketing budget",
    budgets: ["£500–£1,000/month", "£1,000–£3,000/month", "£3,000–£5,000/month", "£5,000–£10,000/month", "£10,000+/month"],
  },
  {
    id: 4,
    title: "How should we contact you?",
    fields: [
      { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
      { id: "email", label: "Email Address", type: "email", placeholder: "you@company.com" },
      { id: "phone", label: "Phone Number", type: "tel", placeholder: "+44 7700 900000" },
    ],
  },
];

export function FreeCheckupClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep) / (steps.length - 1)) * 100;

  const toggleGoal = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
    else setSubmitted(true);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  return (
    <div style={{ paddingTop: '128px' }} className="min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
          style={{ background: "linear-gradient(135deg, #064226, #1b9058)" }} />
      </div>

      <div className="section-container-sm relative" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
        {!submitted ? (
          <>
            <AnimatedSection className="text-center mb-10">
              <span className="section-tag mb-5 inline-flex">Free & No Obligation</span>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
                Free Visibility <span className="glow-text">Check-Up</span>
              </h1>
              <p className="text-white/60 text-lg">
                Complete the form below and our experts will analyse your entire digital presence within 48 hours.
              </p>
            </AnimatedSection>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-white/40 mb-3">
                <span>Step {currentStep + 1} of {steps.length}</span>
                <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #1b9058, #ffde59)" }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Step content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-6">{step.title}</h2>

                {/* Fields step */}
                {step.fields && (
                  <div className="space-y-5">
                    {step.fields.map((field) => (
                      <div key={field.id}>
                        <label className="block text-sm font-medium text-white/70 mb-2">{field.label}</label>
                        {field.type === "select" ? (
                          <select
                            className="w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#1b9058]/50 transition-colors"
                            value={formData[field.id] || ""}
                            onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                          >
                            <option value="" disabled className="bg-[#020818]">Select your industry</option>
                            {field.options?.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#020818]">{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-[#1b9058]/50 transition-colors"
                            value={formData[field.id] || ""}
                            onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Goals step */}
                {step.goals && (
                  <div className="grid grid-cols-2 gap-3">
                    {step.goals.map((goal) => (
                      <button
                        key={goal}
                        onClick={() => toggleGoal(goal)}
                        className={`flex items-center gap-2.5 p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 ${
                          selectedGoals.includes(goal)
                            ? "border-[#1b9058]/60 bg-[#1b9058]/15 text-white"
                            : "border-white/[0.1] bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          selectedGoals.includes(goal) ? "border-[#1b9058] bg-[#1b9058]" : "border-white/30"
                        }`}>
                          {selectedGoals.includes(goal) && <CheckCircle size={10} className="text-white" />}
                        </div>
                        {goal}
                      </button>
                    ))}
                  </div>
                )}

                {/* Budget step */}
                {step.budgets && (
                  <div className="space-y-3">
                    {step.budgets.map((budget) => (
                      <button
                        key={budget}
                        onClick={() => setSelectedBudget(budget)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                          selectedBudget === budget
                            ? "border-[#1b9058]/60 bg-[#1b9058]/15 text-white"
                            : "border-white/[0.1] bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {budget}
                        {selectedBudget === budget && <CheckCircle size={16} className="text-[#1b9058]" />}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-4 mt-6">
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all text-sm font-semibold"
                >
                  <ArrowLeft size={14} /> Back
                </button>
              )}
              <motion.button
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #064226, #1b9058)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentStep === steps.length - 1 ? "Submit & Get My Free Audit" : "Continue"}
                <ArrowRight size={14} />
              </motion.button>
            </div>
          </>
        ) : (
          /* Success state */
          <AnimatedSection className="text-center py-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #064226, #1b9058)" }}
            >
              <Sparkles size={36} className="text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-heading font-bold text-white mb-4"
            >
              You&apos;re All Set! 🎉
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-lg max-w-md mx-auto mb-8"
            >
              Your free visibility check-up is underway. Our team will have your full analysis ready within 48 hours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {["Full SEO audit", "Competitor analysis", "Quick wins roadmap"].map((item) => (
                <div key={item} className="flex items-center gap-3 justify-center text-sm text-white/60">
                  <CheckCircle size={16} className="text-[#1b9058]" />
                  {item}
                </div>
              ))}
            </motion.div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
