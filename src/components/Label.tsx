/* eslint-disable react/react-in-jsx-scope */
import { StyleSheet, Text, View } from 'react-native';
import Icon from '../assets/Icon';

interface LabelProps {
  text: string;
  icon?: string;
  iconColor?: string;
  image?: any;
}

const Label: React.FC<LabelProps> = ({ text, icon, iconColor, image }) => {
  return (
    <View style={styles.container}>
      {image ? image : <Icon icon={icon} style={{width: 30, height: 30}} color={iconColor} />}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    marginLeft: 8,
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Label;