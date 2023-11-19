
import Routes from './routes'
import { CloseWrapper } from 'hooks/globalUI/useClose';
import { GlobalUIWrapper } from 'hooks/globalUI/useGlobalUI';
import { GlobalStorageWrapper } from 'hooks/store/useGlobalStorage';

function App() {

	return (
		<CloseWrapper>
			<GlobalUIWrapper>
				<GlobalStorageWrapper>
					<Routes />
				</GlobalStorageWrapper>
			</GlobalUIWrapper>
		</CloseWrapper>

	);
}

export default App;
