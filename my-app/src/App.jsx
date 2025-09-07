import './App.css'
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import PropTypes from "prop-types"

export function ScrollReveal({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden")
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="my-8"
    >
      {children}
    </motion.div>
  )
}

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
}

function Github() {
  return (
    <a href="https://github.com/xhuntx" target="_blank" rel="noopener noreferrer">
      <img src="/github-mark.png" alt="Github logo" className=" size-16" />
    </a>
  )
}

export default function Main() {
  return (
    <div className="bg-slate-600 min-h-screen w-full">
      {/* Section 1 */}
      <section className="h-screen flex flex-col items-center justify-center gap-6 p-10">
        <h1 className="text-4xl font-bold">Hello I'm Hunter 👋🏻</h1>

        <ScrollReveal>
          <h2 className="text-3xl font-semibold text-blue-600">
            And this is my landing page!
          </h2>
        </ScrollReveal>
      </section>

      {/* Section 2 */}
      <section className="h-screen flex flex-col items-center justify-center gap-6 p-10">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold text-green-500">
            Who am I?
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <h3 className='text-2xl'> I'm a:</h3>
          <li className="text-lg text-white">Tennis Player</li>
          <li className="text-lg text-white">Video Editor</li> 
          <li className="text-lg text-white">Student @ UAG</li>
          <li className="text-lg text-white">Up and coming developer</li>
        </ScrollReveal>
      </section>

      {/* Section 3 */}
      <section className="h-screen flex flex-col items-center justify-center gap-6 p-10">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold text-purple-500 mb-6">
            And here are my socials:
          </h2>
          <Github/>
        </ScrollReveal>
      </section>
    </div>
  )
}
