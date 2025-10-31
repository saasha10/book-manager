// screens/booking/SelectDateScreen.tsx
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';
import { CalendarDate } from 'react-native-paper-dates/lib/typescript/Date/Calendar';

export default function SelectDateScreen() {
  const navigation = useNavigation<NavigationProp<Record<string, object | undefined>>>();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const handleConfirm = (params: { date: CalendarDate }) => {
    setVisible(false);
    if (params?.date) {
      //TODO Remember to fix the day, always one day behind issue
      setSelectedDate(params.date.toISOString().split('T')[0]);
    }
  };

  const handleNext = () => {
    if (selectedDate) {
      navigation.navigate('SelectTime' as any, { date: selectedDate });
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Select a Date</Text>

      <Button
        title={selectedDate ? `Selected: ${selectedDate}` : 'Choose date'}
        onPress={() => setVisible(true)}
      />

      <DatePickerModal
        locale="en"
        mode="single"
        visible={visible}
        onDismiss={() => setVisible(false)}
        date={selectedDate ? new Date(selectedDate) : undefined}
        onConfirm={handleConfirm}
        saveLabel="Save"
        label="Select date"
      />

      <View style={{ marginTop: 16 }}>
        <Button title="Next" onPress={handleNext} disabled={!selectedDate} />
      </View>
    </View>
  );
}
