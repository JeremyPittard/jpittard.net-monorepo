import { motion } from "framer-motion";

const Hamburger = ({ isOpen = false }) => {
  if (!isOpen) {
    return (
      <motion.button
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ transform: "rotate(180deg)", opacity: 0 }}
        transition={{
          duration: 0.25,
        }}
        type="button"
        className="p-2"
        aria-label="open navigation menu"
      >
        <svg width="25" height="19" viewBox="0 0 49 37">
          <path
            d="M42 6H45H46L48 4.5L46 3.5L42 1L6 1H3L1 2L3 3.5L6 6L42 6Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M7 21H4H3L1 19.5L3 18.5L7 16L43 16H46L48 17L46 18.5L43 21L7 21Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <path
            d="M42 36H45H46L48 34.5L46 33.5L42 31L6 31H3L1 32L3 33.5L6 36H42Z"
            fill="currentColor"
            stroke="currentColor"
          />
        </svg>
      </motion.button>
    );
  } else {
    return (
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.25,
        }}
      >
        <button
          type="button"
          className="p-2"
          aria-label="close navigation menu"
        >
          <svg width="19" height="19" viewBox="0 0 38 37">
            <path
              d="M33.5269 7.77817L35.6482 5.65685L36.3553 4.94975L36.7089 2.47487L34.5876 3.18198L29.9914 4.24264L4.53554 29.6985L2.41422 31.8198L1.70711 33.9411L4.18199 33.5876L8.07107 33.234L33.5269 7.77817Z"
              fill="currentColor"
              stroke="currentColor"
            />
            <path
              d="M8.77817 4.24264L6.65685 2.12132L5.94975 1.41422L3.47487 1.06066L4.18198 3.18198L5.24264 7.77818L30.6985 33.234L32.8198 35.3553L34.9411 36.0624L34.5876 33.5876L34.234 29.6985L8.77817 4.24264Z"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </button>
      </motion.div>
    );
  }
};

export default Hamburger;
