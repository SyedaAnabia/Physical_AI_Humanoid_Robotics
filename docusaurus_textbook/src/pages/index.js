import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/introduction/intro">
              Start Reading
            </Link>
          </div>
        </div>
       
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A Hands-On Introduction to Physical AI">
      <HomepageHeader />

      {/* MODULE SECTION */}
      <main>
        <section className={styles.modulesSection}>
          <h2 className={styles.sectionHeaderTitle}>Explore All Modules</h2>

          <div className={styles.featuresGrid}>
            <div className={styles.moduleCard}>
              <h3>Module 1: ROS 2 Foundations</h3>
              <p>Learn ROS 2 basics: nodes, topics, publishers, subscribers.</p>
              <Link className="button button--primary button--sm"
               to="/docs/ros2-foundations/module-1-ros2">
                Open Module →
              </Link>
            </div>

            <div className={styles.moduleCard}>
              <h3>Module 2: Simulation & Digital Twins</h3>
              <p>Master Gazebo, Unity Robotics, Isaac Sim workflows.</p>
              <Link className="button button--primary button--sm" to="/docs/simulation/module-2-simulation">
                Open Module →
              </Link>
            </div>

            <div className={styles.moduleCard}>
              <h3>Module 3: Hardware Foundations</h3>
              <p>Motors, sensors, embedded controllers for real robots.</p>
              <Link className="button button--primary button--sm" to="/docs/hardware-basics/module-3-hardware">
                Open Module →
              </Link>
            </div>

            <div className={styles.moduleCard}>
              <h3>Module 4: VLA — Vision, Language, Action</h3>
              <p>Perception, LLM-driven robotics intelligence, action systems.</p>
              <Link className="button button--primary button--sm" to="/docs/vla-systems/module-4-vla-foundations">
                Open Module →
              </Link>
            </div>

            <div className={styles.moduleCard}>
              <h3>Module 5: Advanced AI & Motion Control</h3>
              <p>Motion planning, optimization, reinforcement learning.</p>
              <Link className="button button--primary button--sm" to="/docs/advanced-ai-control/module-5-advanced-ai">
                Open Module →
              </Link>
            </div>

            <div className={styles.moduleCard}>
              <h3>Module 6: Designing Humanoid Robots</h3>
              <p>Kinematics, actuators, morphologies, movement systems.</p>
              <Link className="button button--primary button--sm" to="/docs/humanoid-design/module-6-humanoid-design">
                Open Module →
              </Link>
            </div>

            <div className={styles.moduleCard}>
              <h3>Appendix</h3>
              <p>Glossary, research papers, references, learning tools.</p>
              <Link className="button button--primary button--sm" to="/docs/appendix/glossary">
                Open Appendix →
              </Link>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}
