"use client"
import { motion, Variants } from "framer-motion"

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { delay: i * 0.1, type: "spring", duration: 1.5, bounce: 0 },
            opacity: { delay: i * 0.1, duration: 0.2 },
        },
    }),
}

export default function HeroSVGAnimation() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-10">
            <motion.svg
                width="100%"
                
                viewBox="0 0 600 120"
                initial="hidden"
                animate="visible"
                className="drop-shadow-[0_0_10px_rgba(215,215,215,0.3)] h-auto"
            >
                <g fill="none" stroke="#D7D7D7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {/* A */}
                    <motion.path variants={draw} custom={1} d="M40 90 L70 20 L100 90 M55 70 H85" />
                    {/* m */}
                    <motion.path variants={draw} custom={2} d="M115 90 V50 Q115 40 130 40 Q145 40 145 50 V90 M145 50 Q145 40 160 40 Q175 40 175 50 V90" />
                    {/* e */}
                    <motion.path variants={draw} custom={3} d="M190 70 H220 Q220 40 205 40 Q190 40 190 65 Q190 90 205 90 Q220 90 220 80" />
                    {/* r */}
                    <motion.path variants={draw} custom={4} d="M235 90 V50 M235 60 Q245 45 260 45" />
                    {/* i */}
                    <motion.path variants={draw} custom={5} d="M275 90 V50 M275 35 V36" />
                    {/* e */}
                    <motion.path variants={draw} custom={6} d="M290 70 H320 Q320 40 305 40 Q290 40 290 65 Q290 90 305 90 Q320 90 320 80" />
                    {/* S */}
                    <motion.path variants={draw} custom={7} d="M365 30 Q340 30 340 50 Q340 65 365 75 Q390 85 390 100 Q390 120 365 120" />
                    {/* h */}
                    <motion.path variants={draw} custom={8} d="M410 20 V110 M410 80 Q410 65 425 65 Q440 65 440 80 V110" />
                </g>

                {/* Sous-titre dessiné en dessous */}
                <motion.text
                    x="50%"
                    y="150"
                    textAnchor="middle"
                    fill="none"
                    stroke="#909090"
                    strokeWidth="0.5"
                    fontSize="14"
                    className="font-raleway uppercase tracking-[0.8em]"
                    variants={draw}
                    custom={10}
                >
                    Fullstack Developer
                </motion.text>
            </motion.svg>
        </div>
    )
}