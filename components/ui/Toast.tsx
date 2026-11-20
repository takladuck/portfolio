"use client";

import React, { useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastState = {
  message: string;
  visible: boolean;
};

export function useToast(duration = 2000) {
  const [toast, setToast] = useState<ToastState>({
    message: "",
    visible: false,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const showToast = useCallback(
    (message: string) => {
      // Clear any existing timer
      if (timerRef.current) clearTimeout(timerRef.current);

      setToast({ message, visible: true });

      timerRef.current = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, duration);
    },
    [duration],
  );

  return { toast, showToast } as const;
}

type ToastProps = {
  message: string;
  visible: boolean;
};

export function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={[
            "fixed bottom-8 left-1/2 z-50 -translate-x-1/2",
            "rounded-full border border-border bg-bg-elevated px-5 py-2.5",
            "shadow-[0_8px_30px_rgba(20,20,40,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]",
            "font-mono text-[13px] font-medium text-text",
          ].join(" ")}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
