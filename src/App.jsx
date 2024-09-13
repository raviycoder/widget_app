// import "./App.css";
import CustomCarousel from "./components/Carousel";
import Divide from "./components/Divide";
import CustomTabs from "./components/Tabs";

function App() {
  return (
    <div className="px-6 m-auto py-3 min-h-screen">
      <div className="grid grid-cols-4 gap-6 md:grid-cols-10 lg:grid-cols-12">
        {" "}
        <div className="col-span-2 lg:col-span-5"></div>
        <div className="col-span-8 lg:col-span-7">
          <CustomTabs />
          <Divide/>
          <CustomCarousel />
          <Divide/>
        </div>
      </div>
    </div>
  );
}

export default App;
