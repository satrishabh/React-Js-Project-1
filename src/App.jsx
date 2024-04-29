
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(selectedButton) {
    alert(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            /> */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={()=>handleSelect('components')}>Components</TabButton>
            <TabButton onClick={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onClick={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onClick={()=>handleSelect('state')}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
