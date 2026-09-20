import { 
  BarChart3, 
  Wrench, 
  FileText, 
  Users, 
  Calendar 
} from 'lucide-react';
import styles from './Features.module.css';

function Features() {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Everything you need to run your shop smoothly</h2>
          <p className={styles.subtitle}>
            Powerful tools designed specifically for auto repair shops to increase efficiency and profitability.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className={styles.grid}>
          {/* Feature 1 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <BarChart3 size={24} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Dashboard & Analytics</h3>
            <p className={styles.cardDescription}>
              Gain instant visibility into your shop's performance. Toggle interactive timeframe charts to spot trends and make data-driven decisions that drive growth.
            </p>
          </div>

          {/* Feature 2 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Wrench size={24} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Job Tracking & Archiving</h3>
            <p className={styles.cardDescription}>
              Keep your bays moving. Seamlessly transition active repairs through your pipeline and securely archive completed jobs for a pristine digital paper trail.
            </p>
          </div>

          {/* Feature 3 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FileText size={24} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Automated Invoicing</h3>
            <p className={styles.cardDescription}>
              Get paid faster with professional, printable PDF invoices. Automatically capture essential details like vehicle mileage with zero manual entry.
            </p>
          </div>

          {/* Feature 4 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Users size={24} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Client & Inventory Management</h3>
            <p className={styles.cardDescription}>
              Build lasting relationships and never run out of critical parts. Access detailed customer profiles and track inventory levels from responsive cards on any device.
            </p>
          </div>

          {/* Feature 5 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Calendar size={24} className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Calendar & Scheduling</h3>
            <p className={styles.cardDescription}>
              Eliminate double-booking and optimize your shop's daily capacity with a dynamic, easy-to-use appointment calendar.
            </p>
          </div>
        </div>

        {/* Highlighted Feature: AI Assistant */}
        <div className={styles.aiHighlightCard}>
          <div className={styles.aiContent}>
            {/* <div className={styles.aiBadge}>
              <Sparkles size={16} />
              <span>Cutting-Edge Feature</span>
            </div> */}
            <h3 className={styles.aiTitle}>Meet Your AI Shop Assistant</h3>
            <p className={styles.aiDescription}>
              Supercharge your workflow with an intelligent digital advisor. Instantly retrieve complex part numbers, generate accurate repair estimates, and summarize vehicle histories in seconds, leaving you free to focus on what you do best.
            </p>
          </div>
          <div className={styles.aiVisual}>
            {/* This acts as an abstract visual representation of the AI, using overlapping glowing circles */}
            <div className={styles.aiOrbCore}></div>
            <div className={styles.aiOrbRing}></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;