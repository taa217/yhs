import { Section } from '../components/ui/Section'
import { ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import yhsImage from '../assets/yhs.jpg'

export default function Home() {
  return (
    <>
      <Section className="pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-800">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'hsl(var(--yhs-yellow))' }} />
              Empowering the next generation
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-gradient-brand">Youth Horizon Network</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              Supporting youth through project mentorship, access to sanitary pads, and mental health initiatives.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 sm:justify-start">
              <ButtonLink href="/get-involved#donate" variant="primary">Donate</ButtonLink>
              <ButtonLink href="/get-involved#volunteer" variant="secondary">Volunteer</ButtonLink>
            </div>
          </div>
          <div className="relative">
            <img
              src={yhsImage}
              alt="Smiling youth at a YHS activity"
              className="w-full rounded-xl object-cover shadow-sm"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </Section>

      <Section id="initiatives" muted>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Our Initiatives</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card hover>
              <div className="badge-blue">Projects</div>
              <h3 className="mt-4 text-lg font-semibold">Project Support</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Mentorship, resources, and training to help youth build and launch impactful projects.
              </p>
            </Card>
            <Card hover>
              <div className="badge-green">Health</div>
              <h3 className="mt-4 text-lg font-semibold">Sanitary Pads Access</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Providing essential sanitary products to ensure dignity, health, and uninterrupted education.
              </p>
            </Card>
            <Card hover>
              <div className="badge-yellow">Wellbeing</div>
              <h3 className="mt-4 text-lg font-semibold">Mental Health</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Workshops and counseling partnerships to support mental wellness and resilience.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section id="impact">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Stat value="10k+" label="Youth reached" />
            <Stat value="5000+" label="Pads distributed" />
            <Stat value="200+" label="Projects supported" />
          </div>
        </div>
      </Section>

      <Section id="how">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">How we work</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card hover>
              <h3 className="text-lg font-semibold">Listen</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">We co-design with youth, schools, and communities.</p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-semibold">Support</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Mentorship, workshops, and health resources where they matter most.</p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-semibold">Sustain</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">We build lasting partnerships to keep impact growing.</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section id="cta" muted>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold">Join us in shaping brighter futures</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Your support powers programs that change lives.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <ButtonLink href="/get-involved#donate" variant="primary">Donate</ButtonLink>
            <ButtonLink href="/get-involved#partner" variant="outline">Become a Partner</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</div>
    </div>
  )
}


