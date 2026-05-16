import { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const navigation = useNavigation();
  const route = useRoute();
  const email = route?.params?.email;

  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
      handleConfirmSignUp();
    }
  }, [otp]);

  const handleConfirmSignUp = () => {
    console.log("Working");
    navigation.navigate("Birth");
  };

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}
    >
      <View
        style={{
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: '500' }}>
          Verification code
        </Text>
        <Text style={{ color: 'grey', fontSize: 14, marginTop: 5 }}>
          Enter the 6 digit code sent to your email
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 30,
        }}
      >
        {otp?.map((_, index) => (
          <TextInput
            key={index}
            style={{
              width: 45,
              height: 45,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              textAlign: 'center',
              fontSize: 18,
              color: '#333',
            }}
            ref={el => (inputs.current[index] = el)}
            keyboardType="number-pad"
            maxLength={1}
            value={otp[index]}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace('', index);
              }
            }}
            autoFocus={index === 0}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({});
