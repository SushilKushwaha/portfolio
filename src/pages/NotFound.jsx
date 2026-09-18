import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
    >
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="mt-6 mb-4">Page Not Found</h2>
      <p className="text-lg text-muted max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </motion.div>
  )
}

export default NotFound