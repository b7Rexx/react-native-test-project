import React from 'react';
import {
	Text,
	TouchableOpacity
} from 'react-native';

import { styles } from '../../styles/style.css';

class ButtonElement extends React.Component {
	render() {
		return (
			<TouchableOpacity style={styles.box}>
				<Text style={styles.text}>
					{this.props.title}
				</Text>
			</TouchableOpacity>
		);
	}
}

export default ButtonElement;
