import { motion, useAnimation } from 'framer-motion';
import { memo, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { usePerformance } from './hooks/usePerformance';

// Optimized ScrollReveal component with React.memo
export const ScrollReveal = memo(({ children, className = 'my-8' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold: 0.2,
    triggerOnce: true // Only trigger once for better performance
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: 'easeOut'
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
});

ScrollReveal.displayName = 'ScrollReveal';
ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Optimized Github component with React.memo
const Github = memo(() => {
  return (
    <a 
      href="https://github.com/xhuntx" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Visit Hunter's GitHub profile"
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
      </svg>
      GitHub
    </a>
  );
});

Github.displayName = 'Github';

// Data for better maintainability
const personalInfo = {
  name: 'Hunter',
  roles: [
    'Tennis Player',
    'Video Editor', 
    'Student @ UAG',
    'Up and coming developer'
  ]
};

// Optimized main component
const App = memo(() => {
  // Initialize performance monitoring
  usePerformance();
  
  const renderRole = useCallback((role, index) => (
    <li key={index} className="text-lg text-white list-none">
      {role}
    </li>
  ), []);

  return (
    <div className="bg-slate-600 min-h-screen w-full">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center gap-6 p-10">
        <h1 className="text-4xl font-bold text-white">
          Hello I'm {personalInfo.name} 👋🏻
        </h1>

        <ScrollReveal>
          <h2 className="text-3xl font-semibold text-blue-400">
            And this is my landing page!
          </h2>
        </ScrollReveal>
      </section>

      {/* About Section */}
      <section className="h-screen flex flex-col items-center justify-center gap-6 p-10">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold text-green-400">
            Who am I?
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center">
            <h3 className="text-2xl text-white mb-4">I'm a:</h3>
            <ul className="space-y-2">
              {personalInfo.roles.map(renderRole)}
            </ul>
          </div>
        </ScrollReveal>
      </section>

      {/* Social Section */}
      <section className="h-screen flex flex-col items-center justify-center gap-6 p-10">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-purple-400 mb-6">
              And here are my socials:
            </h2>
            <Github />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
});

App.displayName = 'App';
export default App;
