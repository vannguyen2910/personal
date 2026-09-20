import { PortfolioLayout, PageHeader } from '../../components/layout'
import { experience } from '../../data/experience.js'

export default function About() {
  return (
    <PortfolioLayout active="about">
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Winnie."
        description="Senior Product Designer based in Ho Chi Minh City, working with teams across Vietnam, Australia, and the US."
      />

      <div className="section section--tight">
        <div className="about-grid">
          <div>
            <div className="about-portrait">
              <img src="/portfolio/images/headshot.jpg" alt="Winnie Nguyen" />
            </div>
            <dl className="about-fact">
              <dt>Location</dt>
                      <dd>Ho Chi Minh City, Vietnam</dd>
                      <dt>Languages</dt>
                      <dd>Vietnamese (native) · English (professional working proficiency)</dd>
                      <dt>Education</dt>
                      <dd>M.A. UX &amp; Service Design, SRH University — in progress (started Aug 2025)<br/>Bachelor of Graphic Design, Van Lang University (2011–2014)</dd>
                      <dt>Recognition</dt>
                      <dd>Top 30% mentor on ADPList across Vietnam, Australia, and the United States (2025)</dd>
            </dl>
          </div>

          <div className="about-body">
            <p>Over 11+ years in design, I've moved from crafting interfaces to shaping how design teams operate — coordinating cross-squad design across multiple product areas, coaching designers on craft and career growth, and embedding research and governance into how teams work.</p>
            <p>At NAB, I've shifted design from execution partner to strategic contributor, and I'm working toward taking full ownership of that leadership role. I'm currently pursuing a Master's in UX &amp; Service Design, and outside of my day-to-day work I mentor designers through ADPList — recognised as a top-30% mentor across Vietnam, Australia, and the US in 2025.</p>

            <h3>Experience</h3>
            <div className="timeline">
              {experience.map((job) => (
                <div className="timeline-item" key={job.when}>
                  <div className="timeline-item__when">{job.when}</div>
                  <div>
                    <div className="timeline-item__role">{job.role}</div>
                    <div className="timeline-item__desc">{job.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  )
}
