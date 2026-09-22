import { type MouseEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Wrench, 
  FileText, 
  Users, 
  Calendar, 
  Sparkles 
} from 'lucide-react';
import styles from './Features.module.css';

function Features() {
  // Add refs and state for scroll detection
  const aiSectionRef = useRef<HTMLDivElement>(null);
  const [isAiVisible, setIsAiVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section comes into view, trigger the animation
        if (entry.isIntersecting) {
          setIsAiVisible(true);
          // Stop observing so it only plays once
          if (aiSectionRef.current) observer.unobserve(aiSectionRef.current);
        }
      },
      {
        threshold: 0.4, // Triggers when 40% of the section is visible
      }
    );

    if (aiSectionRef.current) {
      observer.observe(aiSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

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

        {/* Bento Box Grid */}
        <div className={styles.bentoGrid}>
          {/* Feature 1 */}
          <div className={`${styles.card} ${styles.cardLarge}`} onMouseMove={handleMouseMove}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <BarChart3 size={28} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Dashboard & Analytics</h3>
              <p className={styles.cardDescription}>
                Gain instant visibility into your shop's performance. Toggle interactive timeframe charts to spot trends and make data-driven decisions that drive growth.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className={`${styles.card} ${styles.cardNormal}`} onMouseMove={handleMouseMove}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <Wrench size={24} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Job Tracking</h3>
              <p className={styles.cardDescription}>
                Keep your bays moving. Seamlessly transition active repairs and securely archive completed jobs.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className={`${styles.card} ${styles.cardNormal}`} onMouseMove={handleMouseMove}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <FileText size={24} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Automated Invoicing</h3>
              <p className={styles.cardDescription}>
                Get paid faster with professional, printable PDF invoices. Auto-capture essential details like mileage.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className={`${styles.card} ${styles.cardNormal}`} onMouseMove={handleMouseMove}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <Users size={24} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Client & Inventory</h3>
              <p className={styles.cardDescription}>
                Build lasting relationships. Access detailed customer profiles and track inventory levels on any device.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className={`${styles.card} ${styles.cardNormal}`} onMouseMove={handleMouseMove}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <Calendar size={24} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Scheduling</h3>
              <p className={styles.cardDescription}>
                Eliminate double-booking and optimize daily capacity with a dynamic, easy-to-use calendar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Highlighted Feature: AI Assistant */}
      {/* Attach the ref here */}
      <div className={styles.aiFullWidthSection} ref={aiSectionRef}>
        
        <div className={styles.aiBackgroundPattern}></div>

        <div className={styles.aiContainer}>
          <div className={styles.aiContent}>
            {/* <div className={styles.aiBadge}>
              <Sparkles size={16} />
              <span>Cutting-Edge Feature</span>
            </div> */}
            <h3 className={styles.aiTitle}>Meet Your AI Shop Assistant</h3>
            <p className={styles.aiDescription}>
              Supercharge your workflow with an intelligent digital advisor. Instantly retrieve complex part numbers, generate accurate repair estimates, and summarize vehicle histories in seconds, leaving you free to focus on what you do best.
            </p>
            
            <Link to="/contact" className={styles.aiCtaBtn}>
              Try AI Assistant Free
            </Link>
          </div>
          
          <div className={styles.chatContainer}>
            <div className={styles.chatWindow}>
              <div className={styles.chatHeader}>
                <Sparkles size={14} className={styles.chatHeaderIcon} />
                <span>Serviqa AI</span>
              </div>
              
              {/* Conditionally apply the animation class based on state */}
              <div className={`${styles.chatBody} ${isAiVisible ? styles.animatePlay : ''}`}>
                <div className={styles.userMessage}>
                  Summarize repair history for the 2019 Honda Civic.
                </div>
                
                <div className={styles.typingIndicator}>
                  <span></span><span></span><span></span>
                </div>
                
                <div className={styles.aiMessage}>
                  <p className={styles.aiMessageBold}>3 past visits found.</p>
                  <ul className={styles.aiList}>
                    <li>Last oil change: 5,000 miles ago.</li>
                    <li>Pending: Replace front brake pads (OEM #45022).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;