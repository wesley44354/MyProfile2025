import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WIdgetForm";
import { motion } from "framer-motion";

export const Widget = () => {
  return (
    <Popover>
      <motion.div
        className="fixed z-50 bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Popover.Panel>
          <WidgetForm />
        </Popover.Panel>
        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
          <ChatTeardropDots color="#ffffff" className="w-6 h-6" />
          <span className=" max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="text-[#ffffff] pl-2">Feedback</span>
          </span>
        </Popover.Button>
      </motion.div>
    </Popover>
  );
};
