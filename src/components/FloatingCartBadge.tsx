import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface FloatingCartBadgeProps {
  totalItemsCount: number;
  onScrollToInvoice: () => void;
}

export default function FloatingCartBadge({ totalItemsCount, onScrollToInvoice }: FloatingCartBadgeProps) {
  const badgeRef = useRef<HTMLButtonElement>(null);
  const [isNear, setIsNear] = useState(false);

  // Proximity-based magnetic pull parameters using smooth springs
  const pullX = useMotionValue(0);
  const pullY = useMotionValue(0);

  const springX = useSpring(pullX, { stiffness: 140, damping: 12 });
  const springY = useSpring(pullY, { stiffness: 140, damping: 12 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!badgeRef.current) return;
      const rect = badgeRef.current.getBoundingClientRect();
      const badgeCenterX = rect.left + rect.width / 2;
      const badgeCenterY = rect.top + rect.height / 2;

      // Distance calculation
      const distance = Math.hypot(e.clientX - badgeCenterX, e.clientY - badgeCenterY);

      if (distance < 160) {
        setIsNear(true);
        // Soft pull value limits to prevent flying away
        const deltaX = (e.clientX - badgeCenterX) * 0.25;
        const deltaY = (e.clientY - badgeCenterY) * 0.25;
        pullX.set(deltaX);
        pullY.set(deltaY);
      } else {
        setIsNear(false);
        pullX.set(0);
        pullY.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [pullX, pullY]);

  return (
    <motion.button
      ref={badgeRef}
      onClick={onScrollToInvoice}
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        scale: isNear ? 1.15 : 1,
        boxShadow: isNear 
          ? "0 10px 30px rgba(212, 175, 55, 0.45)" 
          : "0 6px 20px rgba(9, 10, 15, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#090a0f] border-2 border-[#d4af37] text-[#d4af37] duration-150 cursor-pointer shadow-2xl overflow-visible"
      title="View Custom Basket Invoice"
    >
      <div className="relative">
        {/* Tilting Cake Icon */}
        <motion.div
          animate={{ 
            rotate: isNear ? [0, -10, 10, -5, 5, 0] : 0 
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <i className="fa-solid fa-cake-candles text-2xl"></i>
        </motion.div>

        {/* Counter Badge */}
        <motion.span 
          animate={{
            scale: totalItemsCount > 0 ? [1, 1.3, 1] : 1
          }}
          transition={{ duration: 0.3 }}
          className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center text-[10px] font-mono font-black text-espresso bg-[#d4af37] rounded-full border border-espresso shadow-md"
        >
          {totalItemsCount}
        </motion.span>
      </div>

      {/* Pulsing ring indicating magnetic interaction range */}
      {isNear && (
        <span className="absolute inset-0 rounded-full border border-[#d4af37]/35 animate-ping opacity-60 pointer-events-none"></span>
      )}
    </motion.button>
  );
}
