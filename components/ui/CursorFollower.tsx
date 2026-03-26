"use client";

import { useEffect, useRef } from "react";

export function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    const dot = dotRef.current;
    if (!follower || !dot) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 2.5}px`;
      dot.style.top = `${mouseY - 2.5}px`;
    };

    const animate = () => {
      followerX += (mouseX - followerX - 14) * 0.12;
      followerY += (mouseY - followerY - 14) * 0.12;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    const raf = requestAnimationFrame(animate);

    // Scale up on hoverable elements
    const handleEnter = () => {
      follower.style.transform = "scale(2)";
      follower.style.borderColor = "rgba(6, 182, 212, 0.8)";
    };
    const handleLeave = () => {
      follower.style.transform = "scale(1)";
      follower.style.borderColor = "rgba(37, 99, 235, 0.6)";
    };

    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor-follower" ref={followerRef} className="hidden md:block" />
      <div id="cursor-dot" ref={dotRef} className="hidden md:block" />
    </>
  );
}
