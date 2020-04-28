import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../styles/color.css';

function IconElement(props) {
	return <Icon {...props} size={props.size || 20} color={props.color || colors.textIcons} />;
}

export default IconElement;
