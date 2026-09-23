import { Award, GithubIcon, LinkedinIcon, Mail, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { PageShell, PageHero, Section, SectionHeading, Card } from '../components/ui/Page';

const founders = [
  {
    name: "Shashank Madala",
    role: "Founder & Co-CEO",
    bio: "Committed to revolutionizing STEM education through accessible AI learning. Leads Lumin AI's mission to empower the next generation of innovators.",
    vision: "Empowering every student to understand and shape the future of AI technology.",
    image: "/images/shashank1.png",
    links: {
      linkedin: "https://www.linkedin.com/in/shashank-madala-320989295/",
      github: "https://github.com/shashankmadala",
      email: "mailto:madala.shashank@gmail.com"
    }
  },
  {
    name: "Ayur Munipalli",
    role: "Founder & Co-CEO",
    bio: "Driven by the vision of making advanced technology education engaging and accessible. Shapes Lumin AI's innovative approach to teaching artificial intelligence.",
    vision: "Making complex AI concepts approachable and exciting for every student.",
    image: "/images/ayur.png",
    links: {
      linkedin: "https://www.linkedin.com/in/ayur-munipalli/",
      github: "https://github.com/ayurmunipalli",
      email: "mailto:26munipallia@gmail.com"
    }
  }
];

const SOCIALS = [
  { key: 'linkedin', Icon: LinkedinIcon, label: 'LinkedIn', external: true },
  { key: 'github', Icon: GithubIcon, label: 'GitHub', external: true },
  { key: 'email', Icon: Mail, label: 'Email', external: false },
];

export default function Leadership() {
  return (
    <PageShell>
      <SEO
        title="Our Founders & Leadership"
        description="Meet the founders and leadership team behind Lumin AI: student leaders committed to expanding AI education for grades 6–12 worldwide."
        canonicalPath="/founders"
      />

      <PageHero
        eyebrow="Leadership Team"
        icon={Users}
        title="The people behind"
        accent="Lumin AI"
        subtitle="Student leaders working to make AI education accessible to everyone, everywhere."
      />

      <Section width="5xl" first>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((founder) => (
            <Card key={founder.name} className="p-7 flex flex-col">
              {/* Portrait + identity */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={founder.image}
                  alt={founder.name}
                  loading="lazy"
                  className="w-20 h-20 rounded-2xl object-cover object-top bg-gray-100 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-gray-900 leading-tight">{founder.name}</h2>
                  <p className="text-sm font-medium text-blue-600 mt-0.5">{founder.role}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-5">{founder.bio}</p>

              <blockquote className="pl-4 border-l-2 border-blue-200 text-gray-700 italic leading-relaxed mb-6">
                {founder.vision}
              </blockquote>

              <div className="mt-auto flex items-center gap-2 pt-1">
                {SOCIALS.map(({ key, Icon, label, external }) => (
                  <a
                    key={key}
                    href={founder.links[key]}
                    aria-label={`${founder.name} on ${label}`}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="p-2.5 rounded-xl text-gray-500 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section width="5xl" className="bg-gray-50/60">
        <SectionHeading
          eyebrow="Recognition"
          icon={Award}
          tone="amber"
          title="New Jersey Senate Citation"
          subtitle="Shashank Madala was honored by Senator Angela V. McKnight on behalf of the 31st New Jersey Legislative District for representing New Jersey and the United States."
        />
        <Card hover={false} className="p-3 sm:p-4">
          <a
            href="/images/recognition/nj-senate-citation-shashank-madala.jpg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the full New Jersey Senate Citation"
          >
            <img
              src="/images/recognition/nj-senate-citation-shashank-madala.jpg"
              alt="New Jersey Senate Citation awarded to Shashank Madala by Senator Angela V. McKnight, 31st Legislative District, dated September 3, 2026"
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </a>
          <p className="text-sm text-gray-500 text-center mt-3">
            Presented September 3, 2026 · 31st New Jersey Legislative District
          </p>
        </Card>
      </Section>
    </PageShell>
  );
}
