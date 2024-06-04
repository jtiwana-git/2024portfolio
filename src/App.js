import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl text-red-600 gradiant-text running-text ">
                Jag's Portfolio
              </h1>
            </div>
            <div>
              <ul className="flex gap-4 text-xl">
                <li>
                  <a className="text-gray-400 hover:text-red-600 cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-red-600 cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-red-600 cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
