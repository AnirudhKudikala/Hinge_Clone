import LottieView from 'lottie-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const BasicInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-bold',
            marginLeft: 20,
          }}
        >
          You're one of a kind.
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-bold',
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Your profile should be too.
        </Text>
      </View>

      <View>
        <LottieView
          style={{
            height: 260,
            width: 300,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}
          source={require('../assets/love.json')}
          autoPlay
          loop
          speed={0.7}
        />
      </View>
      <Pressable
        style={{ marginTop: 'auto', backgroundColor: '#900C3F', padding: 15 }}
        onPress={() => navigation.navigate('Name')}
      >
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}
        >
          Enter Basic Info
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({});
