import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 py-4 lg:py-8 w-full z-50 flex justify-center">
      <div className="flex justify-between w-full">
        {/* Menu Button (Mobile) */}
        <button
          className={`lg:hidden p-2 focus:outline-none flex w-full justify-start ${
            menuOpen ? "opacity-0" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="30px"
            height="30px"
            className="fill-primary"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
          </svg>
        </button>

        {/* Side Navbar (Mobile) */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed top-0 left-0 h-screen w-60 bg-background z-40 transition-transform duration-400 ease-in-out transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="pl-4 pb-8 pt-8 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
              className="fill-primary"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
          </button>
          <div className="flex flex-col items-start gap-3 pl-6 text-lg">
            <Link
              href={"/"}
              className="text-transparent bg-clip-text bg-title-gradient cursor-pointer hover:text-primary"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="text-[#696F79] opacity-55 cursor-pointer hover:text-primary hover:opacity-100"
            >
              About
            </Link>
            <Link
              href={"/projects"}
              className="text-[#696F79] opacity-55 cursor-pointer hover:text-primary hover:opacity-100"
            >
              Project
            </Link>
            <Link
              href={"/contact"}
              className="text-[#696F79] opacity-55 cursor-pointer hover:text-primary hover:opacity-100"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Navbar Links */}
        <div
          className={`lg:flex hidden flex-row items-start lg:gap-10 gap-2 text-lg`}
        >
          <Link
            href={"/"}
            className="lg:inline-block text-transparent bg-clip-text bg-title-gradient cursor-pointer hover:text-primary"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="lg:inline-block text-[#696F79] opacity-70 cursor-pointer hover:text-primary hover:opacity-100"
          >
            About
          </Link>
          <Link
            href={"/project"}
            className="lg:inline-block text-[#696F79] opacity-70 cursor-pointer hover:text-primary hover:opacity-100"
          >
            Project
          </Link>
          <Link
            href={"/contact"}
            className="lg:inline-block text-[#696F79] opacity-70 cursor-pointer hover:text-primary hover:opacity-100"
          >
            Contact
          </Link>
        </div>
        {/* Theme Toggle Button */}
        <motion.button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="py-2 rounded"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.5215 13.7611C27.4851 18.6846 23.1167 22.3806 17.8849 22.3806C11.8905 22.3806 7.01514 17.5052 7.01514 11.5107C7.01514 6.27899 10.7111 1.91056 15.6346 0.87418C15.8457 0.829742 15.9621 1.11183 15.7808 1.22882C13.309 2.82388 11.6724 5.60237 11.6724 8.76305C11.6724 13.7136 15.6821 17.7233 20.6326 17.7233C23.7933 17.7233 26.5718 16.0868 28.1668 13.6149C28.2838 13.4336 28.5659 13.55 28.5215 13.7611Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M21.4049 5.76071C19.2556 6.01508 19.0494 6.22128 18.795 8.37064C18.5406 6.22128 18.3344 6.01508 16.1851 5.76071C18.3344 5.50634 18.5406 5.30013 18.795 3.15077C19.0494 5.30013 19.2556 5.50634 21.4049 5.76071Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M5.21985 14.5123C3.0705 14.7666 2.8643 14.9728 2.60993 17.1222C2.35556 14.9728 2.14935 14.7666 0 14.5123C2.14935 14.2579 2.35556 14.0517 2.60993 11.9023C2.8643 14.0517 3.0705 14.2579 5.21985 14.5123Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M30.0001 22.4267C27.8508 22.6811 27.6446 22.8873 27.3902 25.0367C27.1358 22.8873 26.9296 22.6811 24.7803 22.4267C26.9296 22.1723 27.1358 21.9661 27.3902 19.8168C27.6446 21.9661 27.8508 22.1723 30.0001 22.4267Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M12.4147 25.5206C10.2653 25.775 10.0591 25.9812 9.80475 28.1305C9.55038 25.9812 9.34417 25.775 7.19482 25.5206C9.34417 25.2662 9.55038 25.06 9.80475 22.9106C10.0591 25.06 10.2653 25.2662 12.4147 25.5206Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M26.9161 4.30132C26.1488 4.39213 26.0752 4.46574 25.9844 5.23299C25.8936 4.46574 25.82 4.39213 25.0527 4.30132C25.82 4.21052 25.8936 4.13691 25.9844 3.36966C26.0752 4.13692 26.1488 4.21054 26.9161 4.30132Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M20.6114 25.0051C19.8441 25.0959 19.7705 25.1696 19.6797 25.9368C19.5889 25.1696 19.5153 25.0959 18.748 25.0051C19.5153 24.9143 19.5889 24.8407 19.6797 24.0735C19.7705 24.8407 19.8441 24.9143 20.6114 25.0051Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M19.6194 11.9728C18.2153 12.139 18.0806 12.2737 17.9144 13.6778C17.7483 12.2737 17.6136 12.139 16.2095 11.9728C17.6136 11.8066 17.7483 11.6719 17.9144 10.2678C18.0806 11.6719 18.2153 11.8066 19.6194 11.9728Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M25.6946 10.1632C24.2905 10.3293 24.1558 10.4641 23.9896 11.8681C23.8235 10.4641 23.6888 10.3293 22.2847 10.1632C23.6888 9.99701 23.8235 9.86229 23.9896 8.4582C24.1558 9.86231 24.2905 9.99701 25.6946 10.1632Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M6.75199 6.53433C5.69643 6.65926 5.59516 6.76053 5.47023 7.81609C5.3453 6.76053 5.24404 6.65926 4.18848 6.53433C5.24404 6.40942 5.3453 6.30814 5.47023 5.25257C5.59515 6.30814 5.69643 6.4094 6.75199 6.53433Z"
                    fill="#1E337C"
                  />
                  <path
                    d="M8.13382 20.3983C7.07826 20.5233 6.977 20.6245 6.85207 21.6801C6.72714 20.6245 6.62587 20.5233 5.57031 20.3983C6.62587 20.2734 6.72714 20.1721 6.85207 19.1166C6.97698 20.1722 7.07826 20.2734 8.13382 20.3983Z"
                    fill="#1E337C"
                  />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5492 15.4999C23.5492 20.2218 19.721 24.0494 14.9994 24.0494C10.2778 24.0494 6.4502 20.2215 6.4502 15.4999C6.4502 10.778 10.2778 6.9501 14.9994 6.9501C19.7213 6.9501 23.5492 10.778 23.5492 15.4999Z"
                    fill="#F6921E"
                  />
                  <path
                    d="M16.2638 1.76425C16.2638 2.46217 15.6979 5.10556 14.9997 5.10556C14.3021 5.10556 13.7358 2.46217 13.7358 1.76425C13.7358 1.06634 14.3018 0.500393 14.9997 0.500393C15.6976 0.500393 16.2638 1.06608 16.2638 1.76425Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M9.22603 2.9724C9.57486 3.577 10.4066 6.14889 9.8025 6.49798C9.1979 6.8468 7.38623 4.84034 7.03714 4.23601C6.68832 3.63141 6.8952 2.85884 7.49979 2.50975C8.10439 2.16066 8.87694 2.36833 9.22603 2.9724Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M3.73574 7.53761C4.34033 7.88644 6.34654 9.69839 5.99745 10.3025C5.64836 10.907 3.07673 10.0756 2.47213 9.72651C1.86728 9.37742 1.6604 8.60486 2.00948 8.00026C2.35857 7.39567 3.13141 7.18853 3.73574 7.53761Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M1.26361 14.2365C1.96178 14.2365 4.60517 14.802 4.60517 15.5001C4.60517 16.1975 1.96177 16.7637 1.26412 16.7637C0.566206 16.7637 0 16.1983 0 15.5001C0.000262867 14.802 0.566218 14.2365 1.26361 14.2365Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M2.47194 21.2735C3.07654 20.9247 5.64869 20.0929 5.99778 20.697C6.34607 21.3016 4.33987 23.1133 3.73606 23.4621C3.13147 23.8112 2.35838 23.6046 2.00955 23C1.6602 22.3951 1.86761 21.6228 2.47194 21.2735Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M7.03727 26.764C7.38636 26.1594 9.19777 24.1529 9.80237 24.5018C10.4064 24.8508 9.57473 27.423 9.22643 28.0271C8.87734 28.6317 8.10398 28.8391 7.49965 28.49C6.89479 28.1412 6.68844 27.3683 7.03727 26.764Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M13.7358 29.236C13.7358 28.5378 14.3013 25.8947 14.9997 25.8944C15.6971 25.8947 16.2633 28.5383 16.2633 29.2355C16.2633 29.9336 15.6974 30.4996 14.9992 30.4996C14.301 30.4999 13.7358 29.9339 13.7358 29.236Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M20.7733 28.0279C20.4242 27.4233 19.5927 24.8514 20.1968 24.502C20.8009 24.1537 22.6131 26.1599 22.9616 26.7637C23.3107 27.3683 23.1036 28.1412 22.499 28.4902C21.8941 28.8396 21.1218 28.6319 20.7733 28.0279Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M26.2636 23.4624C25.6587 23.1136 23.653 21.3016 24.0019 20.6975C24.351 20.0935 26.9231 20.9249 27.5267 21.2735C28.1312 21.6226 28.3389 22.3957 27.9898 23.0003C27.6405 23.6049 26.8674 23.8115 26.2636 23.4624Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M28.7358 16.764C28.0379 16.764 25.3945 16.1981 25.3945 15.5001C25.3951 14.803 28.0384 14.2363 28.7353 14.2363C29.4335 14.2368 30.0002 14.8022 30.0002 15.5004C30.0002 16.1986 29.4335 16.764 28.7358 16.764Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M27.527 9.72651C26.9224 10.0756 24.3503 10.9071 24.0012 10.303C23.6532 9.69891 25.6594 7.8867 26.2629 7.53814C26.8675 7.18905 27.6403 7.39566 27.9899 8.00052C28.3393 8.60538 28.1311 9.37768 27.527 9.72651Z"
                    fill="#FAAF3B"
                  />
                  <path
                    d="M22.9619 4.23627C22.6131 4.84086 20.8011 6.84732 20.1971 6.49824C19.5935 6.14915 20.4244 3.57699 20.773 2.97318C21.1221 2.36885 21.8952 2.16119 22.5001 2.51028C23.1049 2.85937 23.311 3.6322 22.9619 4.23627Z"
                    fill="#FAAF3B"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <div className="absolute w-screen top-0 dark:bg-black bg-white dark:bg-opacity-90 bg-opacity-95 xl:py-12 py-10 -z-10"></div>
    </nav>
  );
};

export default Navbar;
