import { useEffect, useRef, useState } from 'react';
import styles from './HowItWorks.module.css';

// Placeholders for your actual images
import onboardImg from '../../assets/onboard.png';
import repairImg from '../../assets/kanban.png';
import invoiceImg from '../../assets/invoice.png';

const stepsData = [
  {
    id: '01',
    title: 'Onboard & Organize',
    description: "Import your client list, sync your inventory, and set your shop's schedule in minutes.",
    image: onboardImg,
  },
  {
    id: '02',
    title: 'Track & Repair',
    description: "Create digital job cards, assign mechanics, and let the AI Assistant help diagnose issues instantly.",
    image: repairImg,
  },
  {
    id: '03',
    title: 'Invoice & Get Paid',
    description: "Generate professional, automated PDFs and close out jobs with a single click.",
    image: invoiceImg,
  }
];

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        // Triggers when the step hits the middle of the viewport
        rootMargin: '-40% 0px -40% 0px', 
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>How Serviqa Works</h2>
          <p className={styles.subtitle}>
            From the moment a customer walks in to the moment they drive away, Serviqa streamlines every step.
          </p>
        </div>

        <div className={styles.layout}>
          
          {/* Left Column: Vertical Timeline */}
          <div className={styles.timelineColumn}>
            {/* The vertical tracking line */}
            <div className={styles.trackLine}>
              <div 
                className={styles.trackProgress} 
                style={{ height: `${(activeStep / (stepsData.length - 1)) * 100}%` }}
              ></div>
            </div>

            <div className={styles.stepsWrapper}>
              {stepsData.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                
                return (
                  <div 
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className={`${styles.stepBlock} ${isActive ? styles.activeStep : ''} ${isPast ? styles.pastStep : ''}`}
                  >
                    {/* The timeline dot */}
                    <div className={styles.stepDot}>
                      <div className={styles.stepDotInner}></div>
                    </div>
                    
                    <div className={styles.stepContent}>
                      <span className={styles.stepNumber}>{step.id}</span>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDescription}>{step.description}</p>
                      
                      {/* Mobile-only Image (Hidden on Desktop) */}
                      <div className={styles.mobileImageWrapper}>
                        <img src={step.image} alt={step.title} className={styles.mobileImage} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Visual (Hidden on Mobile) */}
          <div className={styles.visualColumn}>
            <div className={styles.stickyContainer}>
              <div className={styles.imageCard}>
                {stepsData.map((step, index) => (
                  <img 
                    key={`img-${step.id}`}
                    src={step.image} 
                    alt={step.title} 
                    className={`${styles.crossfadeImg} ${index === activeStep ? styles.visibleImg : ''}`} 
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;