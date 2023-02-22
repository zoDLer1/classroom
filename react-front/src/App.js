import Header from './components/header'
import Routes from './routes'
import { CloseContext } from 'contexts/closeContext';
import { useClose } from 'hooks/useClose';


function App() {
  const { add, remove, closeAll } = useClose()
  
  return (
    <CloseContext.Provider value={{add, remove}}>
      <div onClick={closeAll} className='page-root'>
          <Header />
          <Routes />
      </div>
    </CloseContext.Provider>
    
  );
}

export default App;
