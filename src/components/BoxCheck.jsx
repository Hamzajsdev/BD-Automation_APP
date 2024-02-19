import { View, Text } from 'react-native';
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box';

const BoxCheck = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={{ marginLeft: 5 }}>
        <CheckBox
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          label="This is a checkbox"
          checkBoxColor="gray" // Optional: Customize checkbox color
        />
      </View>
    )
}

export default BoxCheck