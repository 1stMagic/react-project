
import './App.css';

import SectionCallToAction from "./SectionCallToAction.js"
import SectionSpecials from "./SectionSpecials.js"
import SectionCustomersSay  from "./SectionCustomersSay.js"
import SectionChicago from "./SectionChicago.js"

// Landing page: stacks the home page sections in order
function Main() {
  return (
    <>
      <main>
        <div>
            <SectionCallToAction />
            <SectionSpecials />
            <SectionCustomersSay />
            <SectionChicago />
        </div>
      </main>
    </>
  );
}

export default Main;
