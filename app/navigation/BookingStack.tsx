import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BookingSuccessScreen from '../screens/booking/BookingSuccessScreen';
// import ConfirmDetailsScreen from '../screens/booking/ConfirmDetailsScreen';
import SelectDateScreen from '../screens/booking/SelectDateScreen';
// import SelectTimeScreen from '../screens/booking/SelectTimeScreen';

const Stack = createNativeStackNavigator();

export default function BookingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SelectDate" component={SelectDateScreen} options={{ title: 'Select Date' }} />
      {/* <Stack.Screen name="SelectTime" component={SelectTimeScreen} options={{ title: 'Select Time' }} />
      <Stack.Screen name="ConfirmDetails" component={ConfirmDetailsScreen} options={{ title: 'Confirm Booking' }} />
      <Stack.Screen name="BookingSuccess" component={BookingSuccessScreen} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}
