
import { SnackbarProvider } from 'notistack';
import Home from './Pages/Home/Home';

function App() {
  return (
    <SnackbarProvider >
      <div>
        <Home />
      </div>
    </SnackbarProvider>
  );
}

export default App;
