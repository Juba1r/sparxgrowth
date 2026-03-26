"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  external?: boolean;
}

export function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  icon = true,
  external = false,
}: CTAButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost: "text-white/70 hover:text-white underline-offset-4 hover:underline",
  };

  const classes = cn(
    "relative overflow-hidden font-semibold tracking-wide transition-all duration-300 cursor-pointer",
    sizes[size],
    variant !== "ghost" && "rounded-full",
    variants[variant],
    className
  );

  const content = (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 bg-white/10 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative flex items-center gap-2">
        {children}
        {icon && variant === "primary" && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight size={15} />
          </motion.span>
        )}
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ display: "inline-block" }}
      >
        {content}
      </Link>
    );
  }

  return content;
}
