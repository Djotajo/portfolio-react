function Footer() {
  return (
    <>
      <section className="footer-background">
        <footer>
          <div className="footer-info">
            <h2>Contact me</h2>
            <p>
              Please get in touch if you think our work could be mutually
              beneficial.
            </p>
            <address>
              Box 564, Disneyland
              <br />
              USA
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <title>phone</title>
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
              </svg>{" "}
              555 555 555
              <br />
            </address>

            <a href="mailto:djordjekenjalo@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <title>email</title>
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>{" "}
              djordjekenjalo@gmail.com
            </a>
            <br />
            <p>
              <a href="https://github.com/Djotajo">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://ba.linkedin.com/in/djordje-kenjalo-12b874b5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
              </a>
            </p>
          </div>
          <picture>
            <source
              srcSet="https://github.com/Djotajo/Homepage/blob/main/assets/footer-image-large.jpg?raw=true"
              media="(min-width: 1200px)"
            />
            <source
              srcSet="https://github.com/Djotajo/Homepage/blob/main/assets/footer-image-medium2.jpg?raw=true"
              media="(min-width: 800px)"
            />
            <img
              src="https://github.com/Djotajo/Homepage/blob/main/assets/footer-image-small.jpg?raw=true"
              alt="Coding laptop"
            />
          </picture>
        </footer>
      </section>
    </>
  );
}

export default Footer;
