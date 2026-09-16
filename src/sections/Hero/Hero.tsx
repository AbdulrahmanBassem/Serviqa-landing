import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

import dashboardMain from "../../assets/dashboard.png";
import dashboardOverlap from "../../assets/kanban.png";

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* Ambient Background Glows */}
      <div className={styles.bgGlowContainer}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
        <div className={styles.glow3}></div>
      </div>

      <div className={styles.container}>
        {/* Left Column: Content */}
        <div className={styles.content}>
          {/* <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Next-Gen Auto & Repair Management
          </div> */}

          <h1 className={styles.title}>
            Revolutionize Your
            <br />
            Shop's Workflow.
          </h1>

          <p className={styles.description}>
            Streamline repairs, manage inventory, and boost productivity with
            Serviqa, the modern shop management app.
          </p>

          <div className={styles.actions}>
            <Link to="/contact" className={styles.primaryBtn}>
              Start Your Free Trial
            </Link>
            <a href="#features" className={styles.secondaryBtn}>
              Explore Features
            </a>
          </div>
        </div>

        {/* Right Column: Mac Window & Overlapping Image */}
        <div className={styles.imageWrapper}>
          {/* Main Mac Window Frame */}
          <div className={styles.macWindow}>
            <div className={styles.macHeader}>
              <div className={styles.macDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <div className={styles.macUrl}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                serviqa.app/dashboard
              </div>
              <div className={styles.macHeaderSpacer}></div>
            </div>

            <img
              src={dashboardMain}
              alt="Serviqa Main Dashboard"
              className={styles.mainMockup}
            />
          </div>

          {/* Overlapping Secondary Image */}
          <img
            src={dashboardOverlap}
            alt="Serviqa Inventory Overlap"
            className={styles.secondaryMockup}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
