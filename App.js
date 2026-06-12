import { useEffect } from 'react';
import StackNavigator from './navigation/StackNavigator';

function App() {
  useEffect(() => {
    let isMounted = true;

    const enableScreenGuard = async () => {
      try {
        const ScreenGuardModule = require('react-native-screenguard').default;

        await ScreenGuardModule.initSettings({
          enableCapture: false,
          enableRecord: false,
          enableContentMultitask: false,
          displayScreenGuardOverlay: true,
          displayScreenguardOverlayAndroid: true,
          timeAfterResume: 1000,
        });

        if (isMounted) {
          await ScreenGuardModule.register({
            backgroundColor: '#000000',
          });
        }
      } catch (error) {
        console.warn('Unable to enable screen protection', error);
      }
    };

    enableScreenGuard();

    return () => {
      isMounted = false;
      try {
        const ScreenGuardModule = require('react-native-screenguard').default;
        ScreenGuardModule.unregister().catch(error => {
          console.warn('Unable to disable screen protection', error);
        });
      } catch (error) {
        console.warn('Unable to load screen protection module', error);
      }
    };
  }, []);

  return <StackNavigator />;
}

export default App;
