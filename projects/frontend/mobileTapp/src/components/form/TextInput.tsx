import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput<TextInputProps>`
  padding-left: 15px;
  justify-content: center;
  height: 50px;
  border-radius: 8px;
  border: ${({theme}) => `1px solid ${theme.palette.grey500}`};
  margin-bottom: 20px;
  color: ${({theme}) => theme.palette.black};
  background-color: ${({theme}) => theme.palette.grey100};
  font-family: ${({theme}) => theme.font.fontFamily.regular};
  ::placeholder {
    color: ${({theme}) => theme.palette.grey500};
  }
`;

const TextInput = ({
  testID,
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
  keyboardType,
  autoFocus,
  textContentType,
  // autoCompleteType,
  importantForAutofill,
}: TextInputProps) => {
  const theme = useTheme();
  return (
    <StyledTextInput
      testID={testID}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      autoCapitalize="none"
      keyboardType={keyboardType}
      autoFocus={autoFocus}
      textContentType={textContentType}
      // autoCompleteType={autoCompleteType}
      importantForAutofill={importantForAutofill}
      placeholderTextColor={theme.palette.grey500}
    />
  );
};

export default TextInput;
