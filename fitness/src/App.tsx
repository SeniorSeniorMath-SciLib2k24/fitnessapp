// import './App.css';
import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "./shared/types";

//does exist in the actual build
// enum SelectedPage {
//   Home = 'home',
//   Benefits = 'benefits',
//   OurClasses = 'ourclasses',
//   ContactUs = 'contactus'

// }

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
