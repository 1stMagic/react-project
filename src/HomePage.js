
import './App.css';

import SectionCallToAction from "./SectionCallToAction.js"
import SectionSpecials from "./SectionSpecials.js"
import SectionCustomersSay  from "./SectionCustomersSay.js"
import SectionChicago from "./SectionChicago.js"

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
