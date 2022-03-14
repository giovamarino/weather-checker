// index.js -> App.js
import Content from "./Content";
import Navbar from "./Navbar";
import Test from "./Test";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
      {/* <Test /> */}
    </div>
  );
};

export default App;
