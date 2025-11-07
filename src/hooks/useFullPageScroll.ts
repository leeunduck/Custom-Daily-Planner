"use client";

import { useEffect } from "react";

export function useFullPageScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".scroll-section");
    if (!sections.length) return;

    let isScrolling = false;
    let startY = 0;

    const getClosestSectionIndex = () => {
      const scrollY = window.scrollY;
      let closestIndex = 0;
      let smallestDiff = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const diff = Math.abs(section.offsetTop - scrollY);
        if (diff < smallestDiff) {
          smallestDiff = diff;
          closestIndex = index;
        }
      });
      return closestIndex;
    };

    const scrollToSection = (index: number) => {
      const target = sections[index];
      if (!target) return;

      const sectionTop = target.offsetTop;
      const sectionHeight = target.offsetHeight;
      const viewportHeight = window.innerHeight;

      const lastIndex = sections.length - 1;
      const isLast = index === lastIndex;

      // 마지막 섹션만 위 정렬, 나머지는 중앙 정렬
      const targetY = isLast ? sectionTop : sectionTop - (viewportHeight - sectionHeight) / 2;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    };

    const moveOneSection = (direction: 1 | -1) => {
      if (isScrolling) return;
      isScrolling = true;

      const currentIndex = getClosestSectionIndex();
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);

      scrollToSection(nextIndex);

      setTimeout(() => {
        isScrolling = false;
      }, 900);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const deltaY = event.deltaY;
      if (Math.abs(deltaY) < 10) return;

      const direction: 1 | -1 = deltaY > 0 ? 1 : -1;
      moveOneSection(direction);
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;
      if (Math.abs(deltaY) < 50) return;

      const direction: 1 | -1 = deltaY > 0 ? 1 : -1;
      moveOneSection(direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // 첫 진입 시 Hero 섹션으로 스냅
    scrollToSection(0);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
}
