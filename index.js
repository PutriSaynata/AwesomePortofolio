/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './BottomNav';
import {name as appName} from './app.json';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


AppRegistry.registerComponent(appName, () => App);

