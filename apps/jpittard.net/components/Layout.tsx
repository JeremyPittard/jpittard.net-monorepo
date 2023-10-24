import { motion } from "framer-motion";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <motion.div
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -5, opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
      className="max-w-6xl m-auto py-3 px-2 min-h-[70vh]"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
