// Export actions and reducers (duck) etc.
import * as actions from './duck';
import saga from './saga';
import * as selectors from './selectors';

export default { actions, saga, selectors };