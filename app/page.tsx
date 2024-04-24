import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Bhavuk kalra's Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Cybersecurity professional with hands-on experience in network security,
        Incident Response, Creating security standards for startups adhering to NIST/ISO 
        standards.
        Currently honing my skills in cloud computong to seamlessly integrate security
        measures into cloud infrastructure, ensuring robust protection against evolving cyber threats.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
