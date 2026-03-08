import { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface RegistrationModalProps {
  formLink: string | null;
  onClose: () => void;
}

const RegistrationModal = forwardRef<HTMLDivElement, RegistrationModalProps>(({ formLink, onClose }, ref) => {
  if (!formLink) return null;

  const embedUrl = formLink.includes("/viewform")
    ? formLink
    : formLink.endsWith("/")
      ? formLink + "viewform?embedded=true"
      : formLink + "/viewform?embedded=true";

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl h-[80vh] rounded-2xl overflow-hidden border-2 border-primary/30 bg-background shadow-[0_0_60px_hsl(var(--fest-teal)_/_0.2)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-3 border-b-2 border-primary/20 bg-card">
            <h3 className="font-display text-sm tracking-wider text-primary font-bold">REGISTRATION FORM</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-destructive hover:bg-destructive/30 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <iframe
            src={embedUrl}
            className="w-full h-[calc(100%-52px)] border-0"
            title="Registration Form"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

RegistrationModal.displayName = "RegistrationModal";

export default RegistrationModal;
