import React from 'react';
import RangeSlider from 'rn-range-slider';
import { colors } from '../styles/color';

class SliderSelect extends React.Component {

  render() {
    let { options } = this.props;
    return (<>
      <RangeSlider
        style={{ width: '100%', height: 60 }}
        gravity={'center'} thumbRadius={15} thumbBorderWidth={5}
        min={options.min} max={options.max} step={options.step}
        initialLowValue={options.initialLowValue} initialHighValue={options.initialHighValue}
        selectionColor={colors.accentColor} blankColor={colors.lightPrimaryColor}
        onValueChanged={options.onValueChanged} />

    </>);
  }
}

export default SliderSelect;
