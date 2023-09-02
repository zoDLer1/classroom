
import Routes from './routes'
import { CloseWrapper } from 'hooks/globalUIContent/useClose';
import { GlobalUIWrapper } from 'hooks/globalUIContent/useGlobalUI';
import { GlobalStorageWrapper } from 'hooks/useGlobalStorage';

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
