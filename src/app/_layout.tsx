import { Stack } from "expo-router"
import {colors} from "@/styles/theme"

import {
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"
import { Loading } from "@/components/laoding"
import { GestureHandlerRootView } from "react-native-gesture-handler"
function Layout() {
    const [fontsLoads] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold,
    })

    if(!fontsLoads) {
        return <Loading/>
    }
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <Stack 
    screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.gray[100]}
    }}/>
    </GestureHandlerRootView>
  )
}

export default Layout