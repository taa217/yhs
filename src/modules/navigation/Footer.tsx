export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-8 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="h-6 w-6 rounded bg-brand-gradient" aria-hidden />
              Youth Horizon Network
            </div>
            <p className="mt-3 max-w-xs">Empowering youth through projects, health, and mental wellness initiatives.</p>
          </div>
          <div>
            <div className="font-semibold">Programs</div>
            <ul className="mt-3 space-y-2">
              <li><a href="/programs#projects" className="hover:underline">Project Support</a></li>
              <li><a href="/programs#sanitary" className="hover:underline">Sanitary Pads</a></li>
              <li><a href="/programs#mental" className="hover:underline">Mental Health</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Get Involved</div>
            <ul className="mt-3 space-y-2">
              <li><a href="/get-involved#donate" className="hover:underline">Donate</a></li>
              <li><a href="/get-involved#volunteer" className="hover:underline">Volunteer</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200/60 pt-6 text-center text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
          © {new Date().getFullYear()} Youth Horizon Network. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


