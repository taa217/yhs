import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Page not found.</p>
      <Link to="/" className="btn btn-primary mt-8 inline-flex">Go home</Link>
    </section>
  )
}


