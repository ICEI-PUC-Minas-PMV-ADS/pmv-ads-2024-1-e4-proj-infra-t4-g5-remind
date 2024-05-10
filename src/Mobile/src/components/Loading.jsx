// Loading.js


import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Ball = ({ animatedValue, style }) => {
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 50], // Ajuste a distância do movimento
  });

  return (
    <Animated.View style={[style, { transform: [{ translateX }] }]}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

const Loading = () => {
  const ball1Value = useRef(new Animated.Value(0)).current;
  const ball2Value = useRef(new Animated.Value(0)).current;
  const ball3Value = useRef(new Animated.Value(0)).current;
};

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.stagger(100, [
          Animated.timing(ball1Value, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(ball2Value, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(ball3Value, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.stagger(100, [
          Animated.timing(ball3Value, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(ball2Value, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(ball1Value, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ])
    );

    animation.start();

    return () => animation.stop(); // Limpeza
  }, []);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'purple',
    margin: 10,
  },
});

export default Loading;