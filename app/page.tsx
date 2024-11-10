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
        </div>
      </div>
    </main>
  );
}
