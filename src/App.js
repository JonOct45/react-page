import logo from './logo.svg';
import './App.css';
import { Heading } from './Heading';
import { HeroBanner } from './HeroBanner';
import {Github} from './Github';
import {AboutMe} from './aboutme';


function App() {
  return (
    <html>
      <body>
    <div className="App">
      <Heading />
      <HeroBanner />
      <Github />
      <AboutMe />
      
    </div>
    </body>
    </html>
  );
}

export default App;
