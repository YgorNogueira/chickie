import { useEffect, useState } from "react";
import { Animated, View } from "react-native";

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    ]).start(() => {
      setTimeout(() => setShowSplash(false), 500);
    });
  }, []);

  if (showSplash) {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FCB53B',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Animated.Image
            source={require('../assets/images/chickielogo.png')}
            style={{
              width: 200,
              height: 200,
              opacity: fadeAnim,
              transform: [{
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                })
              }]
            }}
            resizeMode="contain"
          />
          <Animated.Image
            source={require('../assets/images/chickiepoppins.png')}
            style={{
              width: 200,
              height: 200,
              opacity: fadeAnim,
              transform: [{
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                })
              }]
            }}
            resizeMode="contain"
          />
         
        </View>
      </View>
    );
  }

  
}