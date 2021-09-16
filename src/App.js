import './App.css';
import Header from './Header'
import Converter from './Converter'
import Price from './Price'


export default function App() {
  return (
    <div className="header">
      <Header />
      <Converter />
      <Price />
    </div>
  );
}


