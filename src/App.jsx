import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'

const reactDescription = ['Core' , 'Fundamental' , 'Curtail']
function randomInt(max){
  return Math.floor(Math.random() * (max+1));
}
export function Header(){
  const description = reactDescription[randomInt(2)]
  return (
    <header>
        <img src={reactImg} />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
}
// React call these functions and pass value to this props/argument under the hood . We only use 
// these functions just like html elements ... And value used as props are in the form of objects 
// key value pair..
function CoreConcept(props) {
  return (
   <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
   </li>
  );

  
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            title="Components" 
            description="The core UI building blocks"
            image={componentsImg}
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
