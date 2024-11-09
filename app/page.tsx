"use client";

import styles from "@/styles/index.module.css";

export default function HomePage() {
  return (
    <main>
      <div className={`${styles.bodyContainer} `}>
        <div>
          <section>
            <p>Full stack software engineer based in Los Angeles.</p>
            <p>
              Currently working at an early-stage startup in the real estate
              sector.
            </p>
          </section>
          {/* <hr /> */}
          {/* <section>
            <h2>Contact</h2>
            <ul className={`${styles.contactList}`}>
              <li>
                <a href="mailto:ani.nishioka@gmail.com">
                  ani.nishioka@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/aninishioka">github</a>
              </li>
            </ul>
          </section> */}
        </div>
      </div>
    </main>
  );
}
