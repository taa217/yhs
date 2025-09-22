import yhsImage from '../assets/yhs.jpg'
import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'

export default function About() {
  return (
    <>
      <Section className="pt-20">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold">About Youth Horizon Network</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Youth Horizon Network (YHS) empowers young people to build brighter futures through
              community-driven programs. We mentor youth projects, increase access to sanitary pads,
              and support mental health and wellbeing.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge-blue">Projects</span>
              <span className="badge-green">Health</span>
              <span className="badge-yellow">Wellbeing</span>
            </div>
          </div>
          <div>
            <img src={yhsImage} alt="Youth smiling together at a YHS activity" className="w-full rounded-xl object-cover shadow-sm" />
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Unlock the potential of every young person by expanding access to opportunity, health,
              and support systems.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Approach</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Practical mentorship, evidence-informed health programs, and strong community
              partnerships.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Impact</h3>
            <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              <li>10k+ youth reached</li>
              <li>5k+ sanitary pads distributed</li>
              <li>200+ projects supported</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="card">Equity and inclusion</li>
            <li className="card">Dignity and wellbeing</li>
            <li className="card">Collaboration and community</li>
            <li className="card">Transparency and accountability</li>
          </ul>
        </div>
      </Section>
    </>
  )
}


