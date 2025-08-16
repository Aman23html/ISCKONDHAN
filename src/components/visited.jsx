import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VisitorCounter = () => {
    const {t}= useTranslation();
  const [count, setCount] = useState(0);
  const target = 100010;

  useEffect(() => {
    let start = 0;
    const duration = 10000; // 2 sec
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  }, []);

  return (
    <div className="w-full  py-6">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#df7326] tracking-wide">
            {count.toLocaleString()} {t("visitors.heading")}
          </h2>
          <p className="text-gray-600 text-sm italic mt-1">
            {t("visitors.title")} 
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisitorCounter;
