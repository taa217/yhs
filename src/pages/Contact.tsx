export default function Contact() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <form className="mt-8 grid gap-4">
          <input className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 dark:border-slate-700 dark:bg-slate-800" placeholder="Your name" />
          <input className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 dark:border-slate-700 dark:bg-slate-800" placeholder="Email" type="email" />
          <textarea className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 dark:border-slate-700 dark:bg-slate-800" placeholder="Message" rows={5} />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}


