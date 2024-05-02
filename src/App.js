import './App.css';
import { ThemeProvider } from './Components/ThemeContext';
import IconSideNav from './Screens/Home';

function App() {
  return (
    <div>
        <ThemeProvider>
          <IconSideNav />
        </ThemeProvider>
    </div>
  );
}

export default App;
