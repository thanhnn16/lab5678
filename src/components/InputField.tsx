import { Image, Pressable, TextInput, View } from "react-native";
import { inputStyles } from "../assets/styles/MyStyles.tsx";

export const NormalInput = (props) => {
    return (
        <TextInput
            style={inputStyles.input}
            placeholder={props.placeholder}
            placeholderTextColor="#666"
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    );
}

export const PasswordInput = (props) => {
    return (
      <View style={inputStyles.inputWithIcon}>
        <TextInput
            style={{width: '100%'}}
            placeholder={props.placeholder}
            placeholderTextColor="#666"
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            value={props.value}
            textContentType={'password'}
        />
        <Pressable onPress={props.onPress}>
            <Image
                source={props.secureTextEntry ? require('../assets/images/input_field_icons/eye.png') : require('../assets/images/input_field_icons/eye-slash.png')}
                style={inputStyles.postInputIcon}
            />
        </Pressable>

      </View>
    );
}
