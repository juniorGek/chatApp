import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ color = 'blue', disabled = false, onPress, children, style, ...rest }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, {backgroundColor: color, opacity: disabled ? 0.5 : 1}, style]}
      {...rest}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 5,
    },
  });

export default Button;
