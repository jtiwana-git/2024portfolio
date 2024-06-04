import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="text-red-900">
          Jag's portfolio ..... Nav, Projects, About me
        </h1>
      </header>
      <main>
        {/* INTRO BANNER SECTION */}
        <section>
          <h1 className="text-black">
            Hello, I'm Jagdeep.... Junior Developer ..... short intro ...
            profile pic
          </h1>
        </section>
        {/* PROJECTS */}
        <section>
          <h1 className="text-black">List of projects ....... 3 projects</h1>
        </section>
        {/* TECHNOLOGIES / SKILLS  */}
        <section>
          <h1 className="text-black">Your technologies and skills</h1>
        </section>
        {/* About me!  */}
        <section>
          <h1 className="text-black">Sell yourself.....</h1>
        </section>
      </main>
      <footer>
        <h1 className="text-black">Links</h1>
      </footer>
    </>
  );
}

export default App;
