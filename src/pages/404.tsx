// pages/under-construction.tsx

import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function UnderConstruction() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <main
      className={`flex min-h-screen items-center justify-center bg-background ${inter.className}`}
    >
      <section className="text-center p-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            🚧 Under Construction 🚧
          </motion.h1>
          <p className="text-primary text-lg md:text-xl mb-8">
            Were working hard to bring you something amazing. Stay tuned!
          </p>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.span
              className="block h-4 w-4 bg-primary rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            />
            <motion.span
              className="block h-4 w-4 bg-primary rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            <motion.span
              className="block h-4 w-4 bg-primary rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
          </motion.div>
          <motion.button
            onClick={goBack}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 px-6 py-2 bg-primary text-indigo-600 rounded-full font-semibold hover:bg-indigo-300 transition-colors shadow-md"
          >
            🔙 Go Back
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
