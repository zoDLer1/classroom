
import Routes from './routes'
import { CloseContext } from 'contexts/closeContext';
import { useClose } from 'hooks/useClose';
import GlobalUI from 'components/helpers/GlobalUI';
import { usePath } from 'hooks/usePath';
import { PathContext } from 'contexts/PathContext';

function App() {
	const { add, remove, closeAll } = useClose()



	return (
		<CloseContext.Provider value={{ add, remove, closeAll }}>

			<div onClick={closeAll} className='page-root'>
				<GlobalUI>
					<Routes />
				</GlobalUI>
			</div>

		</CloseContext.Provider>

	);
}

export default App;
