import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check target element data attributes or tags
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('button, a, [data-cursor], [role="button"]') as HTMLElement | null;
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else if (interactiveEl.tagName === 'A') {
          setCursorText('ACCESS');
        } else if (interactiveEl.tagName === 'BUTTON') {
          setCursorText('INTERACT');
        } else {
          setCursorText('VIEW');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing animation loop
    let animId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animId = requestAnimationFrame(updateTrailing);
    };
    animId = requestAnimationFrame(updateTrailing);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [position]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Center dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-cyan-400 transition-opacity duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isHovered ? 0.3 : 1
        }}
      />

      {/* Trailing Outer Ring / Indicator */}
      <div
        className={`fixed rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ${
          isHovered
            ? 'w-12 h-12 bg-cyan-950/40 border border-cyan-400 backdrop-blur-[2px]'
            : 'w-7 h-7 border border-cyan-500/30'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {isHovered && cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
