import { Section } from '../components/ui/Section'
import { Card } from '../components/ui/Card'

export default function Programs() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Our Programs</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            YHS supports youth through initiatives that expand access to opportunity, health, and wellbeing.
          </p>
        </div>
      </Section>

      <Section id="projects" muted>
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card hover>
            <h2 className="text-xl font-semibold">Project Support</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Mentorship, training, and micro-grants to help youth design, build, and launch impact projects.
            </p>
          </Card>
          <Card hover>
            <h2 className="text-xl font-semibold">Skills Workshops</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Hands-on sessions covering entrepreneurship, digital literacy, leadership, and community organizing.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="sanitary">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card hover>
            <h2 className="text-xl font-semibold">Sanitary Pads Access</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Distribution programs and partnerships ensuring dignity, health, and continuous education for girls.
            </p>
          </Card>
          <Card hover>
            <h2 className="text-xl font-semibold">Health Education</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              School and community outreach focused on menstrual health, hygiene, and wellbeing.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="mental" muted>
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card hover>
            <h2 className="text-xl font-semibold">Mental Health Support</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Partner-led counseling, peer support groups, and resilience-building workshops.
            </p>
          </Card>
          <Card hover>
            <h2 className="text-xl font-semibold">Awareness Campaigns</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Community campaigns to normalize conversations around mental health and reduce stigma.
            </p>
          </Card>
        </div>
      </Section>
    </>
  )
}


