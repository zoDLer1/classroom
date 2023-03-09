
import Routes from './routes'
import { CloseContext } from 'contexts/closeContext';
import { useClose } from 'hooks/useClose';


function App() {
  const { itms, add, remove, closeAll } = useClose()
  
  return (
    <CloseContext.Provider value={{add, remove}}>
      {/* {JSON.stringify(itms)} */}
      <div onClick={closeAll} className='page-root'>
          <Routes />
      </div>
    </CloseContext.Provider>
    
  );
}

export default App;
