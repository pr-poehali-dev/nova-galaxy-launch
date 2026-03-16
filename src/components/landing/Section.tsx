import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, extraContent, isActive, showButton, buttonText, buttonLink, games }: SectionProps) {
  const handleButtonClick = () => {
    if (!buttonLink) return
    const target = document.querySelector(buttonLink)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-y-auto">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {content}
        </motion.p>
      )}
      {extraContent && (
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-4 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {extraContent}
        </motion.p>
      )}
      {games && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {games.map((game, i) => (
            <div key={i} className="border border-[#00FF88]/20 bg-white/5 rounded-lg p-4 hover:border-[#00FF88]/50 transition-colors">
              <h3 className="text-white font-semibold text-base md:text-lg mb-1">{game.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{game.description}</p>
            </div>
          ))}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 md:mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleButtonClick}
            className="text-[#00FF88] bg-transparent border-[#00FF88] hover:bg-[#00FF88] hover:text-black transition-colors cursor-pointer"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
