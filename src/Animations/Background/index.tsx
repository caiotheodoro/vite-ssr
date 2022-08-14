import React, { ReactNode } from "react";
import { motion } from 'framer-motion'
interface IBackgroundProps {
    children: ReactNode;
}

export function BackgroundAnimation({ children }: IBackgroundProps) {
    return (
        <motion.div
            animate={{
                scale: [1, 0.9, 1],
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    )
}