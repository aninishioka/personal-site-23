import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <main>
      <div className={`${styles.bodyContainer} `}>
        <div>
          <section>
            <p>
              Adaptable software engineer with a passion fo solving complex
              problems to deliver high-quality projects.
            </p>
            <p>
              Graduated with a BA in Cognitive Science and minor in Computer
              Science from UC Berkeley, spent a fews years working in
              healthcare, and recently completed Rithm School's full stack
              development bootcamp.
            </p>
            <p>
              When I’m not at my computer, I enjoy reading and watching movies
              (I totaled 53 books in 2023 and the most films I've watched in a
              year is 102!).
            </p>
          </section>
          <hr />
          <section>
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
              <li>
                <a href="https://www.linkedin.com/in/aninishioka/">linkedin</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
