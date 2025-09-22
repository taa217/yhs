import { Section } from '../components/ui/Section'
import { ButtonLink } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

export default function GetInvolved() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold">Get Involved</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Your time, resources, and voice help us reach more youth.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <ButtonLink href="#donate" variant="primary">Donate</ButtonLink>
            <ButtonLink href="#volunteer" variant="secondary">Volunteer</ButtonLink>
          </div>
        </div>
      </Section>

      <Section id="donate" muted>
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card hover>
            <h2 className="text-lg font-semibold">One-time Gift</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Support immediate program needs and outreach.</p>
            <div className="mt-4"><ButtonLink href="/contact" variant="outline">Pledge</ButtonLink></div>
          </Card>
          <Card hover>
            <h2 className="text-lg font-semibold">Monthly Support</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Sustain our programs year-round.</p>
            <div className="mt-4"><ButtonLink href="/contact" variant="outline">Set up</ButtonLink></div>
          </Card>
          <Card hover>
            <h2 className="text-lg font-semibold">Corporate Partnership</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Amplify impact with matched giving or sponsorship.</p>
            <div className="mt-4"><ButtonLink href="#partner" variant="outline">Partner</ButtonLink></div>
          </Card>
        </div>
      </Section>

      <Section id="volunteer">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card hover>
            <h2 className="text-lg font-semibold">Mentor</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Guide youth-led projects with your expertise.</p>
          </Card>
          <Card hover>
            <h2 className="text-lg font-semibold">Facilitate</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Lead workshops on skills and wellbeing.</p>
          </Card>
        </div>
      </Section>

      <Section id="partner" muted>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold">Become a Partner</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">We collaborate with schools, clinics, and community organizations.</p>
          <div className="mt-4"><ButtonLink href="/contact" variant="primary">Contact us</ButtonLink></div>
        </div>
      </Section>
    </>
  )
}


