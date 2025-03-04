/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { AppNavigation } from './src/navigation/AppNavigation';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
 import * as SplashScreen from 'expo-splash-screen'; 

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
SplashScreen.preventAutoHideAsync();
function App(): React.JSX.Element {
const [loaded, error] = useFonts({
    'DynaPuff-Bold': require('./src/assets/fonts/DynaPuff-Bold.ttf'),
    'DynaPuff-Regular': require('./src/assets/fonts/DynaPuff-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return  <></>;
  }
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}
export default App;
