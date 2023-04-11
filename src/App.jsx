import Navbar from "./components/Navbar";
import Content from "./Content";

function App() {
  return (
    <section className="container min-w-full min-h-screen text-white bg-slate-300 dark:bg-slate-600">
      <Navbar />
      <Content></Content>
    </section>
  );
}

export default App;
