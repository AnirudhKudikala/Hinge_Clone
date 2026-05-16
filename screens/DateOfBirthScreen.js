import { useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';


const DateOfBirthScreen = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Location');
  };

  const handleDayChange = text => {
    setDay(text);

    if (text.length == 2) {
        monthRef.current.focus();
    }
  };

  const handleMonthChange = text => {
    setMonth(text);

    if (text.length == 2) {
        yearRef.current.focus();
    }
  };

  const handleYearChange = text => {
    setYear(text);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: 80, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialDesignIcons
              name="calendar-blank"
              size={23}
              color="black"
            />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-bold',
            marginTop: 15,
          }}
        >
          What's your date of birth?
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 80,
            justifyContent: 'center',
          }}
        >
          <TextInput
            value={day}
            onChangeText={handleDayChange}
            autoFocus={true}
            keyboardType="numeric"
            placeholder="DD"
            placeholderTextColor={'#BEBEBE'}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              width: 60,
              fontFamily: 'GeezaPro-Bold',
              fontSize: 22,
            }}
          />
          <TextInput
            value={month}
            onChangeText={handleMonthChange}
            keyboardType="numeric"
            ref={monthRef}
            maxLength={2}
            placeholder="MM"
            placeholderTextColor={'#BEBEBE'}
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              width: 60,
              fontFamily: 'GeezaPro-Bold',
              fontSize: 22,
            }}
          />
          <TextInput
            ref={yearRef}
            value={year}
            onChangeText={handleYearChange}
            placeholder="YYYY"
            placeholderTextColor={'#BEBEBE'}
            max={4}
            keyboardType="numeric"
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              padding: 10,
              width: 80,
              fontFamily: 'GeezaPro-Bold',
              fontSize: 22,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: 'auto' }}
        >
          <Ionicons
            name="chevron-forward-circle-outline"
            size={45}
            color="#581845"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DateOfBirthScreen;

const styles = StyleSheet.create({});
