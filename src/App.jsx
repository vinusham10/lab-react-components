import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryBody from './components/GallaryBody';
import GallaryHeader from './components/GallaryHeader';
import imageData from "./components/GallaryData"

function App(props) {
  // const imageData = props.data
  return (
    <div>
      <GallaryHeader /> 
      <GallaryBody imageData = {imageData}/> 
      <GallaryFooter/> 
    </div>
  )
}

export default App;
