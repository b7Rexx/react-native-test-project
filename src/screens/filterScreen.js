import React from 'react';
import { View } from 'react-native';
import { Item, Text, CheckBox, Button } from 'native-base';
import { connect } from 'react-redux';

import { colors } from '../styles/color';
import { styles } from '../styles/style';
import SliderSelect from '../components/sliderSelect.component';
import CircularButton from '../components/circularButton.component';
import { onChangePriceSlider, onChangeFilterTags, onApplyFilter, onResetFilter } from '../api/actions';


const mapStateToProps = state => {
  return { newFilters: state.app.search.newFilters, tags: state.app.tags };
};

function mapDispatchToProps(dispatch) {
  return {
    onChangePriceSlider: (low, high) => dispatch(onChangePriceSlider(low, high)),
    onChangeFilterTags: (tags) => dispatch(onChangeFilterTags(tags)),
    onApplyFilter: () => dispatch(onApplyFilter()),
    onResetFilter: () => dispatch(onResetFilter()),
  };
}

class FilterScreen extends React.Component {
  onPriceValueChanged(low, high) {
    this.props.onChangePriceSlider(low, high);
  }

  updateTagsFilter(item) {
    let tag = this.getTagAsArray(this.props.newFilters.tags);
    if (tag.includes(item))
      tag.splice(tag.indexOf(item), 1);
    else
      tag.push(item);
    this.props.onChangeFilterTags(tag);
  }

  getTagAsArray(tag) {
    if (Array.isArray(tag)) return tag;
    else return [tag];
  }

  onApply() {
    this.props.onApplyFilter();
    this.props.onApply();
  }

  onReset() {
    this.props.onResetFilter();
  }

  tagIncludeCheck(item, index) {
    let { newFilters } = this.props;
    if (newFilters.tags.includes(item))
      return (<Item key={index} style={[styles.searchFilterTags, { backgroundColor: colors.accentColor }]} onPress={() => this.updateTagsFilter(item)}>
        <CheckBox checked={true} color={colors.accentColor} />
        <Text style={styles.searchFilterTagsText}> {item}</Text>
      </Item>);
    else
      return (<Item key={index} style={[styles.searchFilterTags, { backgroundColor: colors.lightPrimaryColor }]} onPress={() => this.updateTagsFilter(item)}>
        <CheckBox checked={false} color={colors.lightPrimaryColor} />
        <Text style={styles.searchFilterTagsText}> {item}</Text>
      </Item>);
  }

  render() {
    let { newFilters } = this.props;
    return (
      <View style={styles.searchFilter}>
        <Text style={styles.searchFilterTitle}>Filter</Text>

        <View style={styles.searchFilter}>
          <View style={styles.searchFilterPriceBox}>
            <Text style={styles.searchFilterTitle}>Price</Text>
            <Text style={styles.searchFilterValue}>${newFilters.priceLowValue} - ${newFilters.priceHighValue}</Text>
          </View>
          <SliderSelect options={{
            ref: 'filterSlider', min: 1000, max: 10000, step: 100,
            initialLowValue: newFilters.priceLowValue, initialHighValue: newFilters.priceHighValue,
            onValueChanged: (low, high) => this.onPriceValueChanged(low, high)
          }} />
        </View>
        <View style={styles.searchFilter}>
          <Text style={styles.searchFilterTitle}>Tags</Text>
          <View style={[styles.searchFilterTagBox]}>
            {this.props.tags.map((item, index) => {
              return this.tagIncludeCheck(item, index);
            })}
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <CircularButton text='RESET' onPress={() => { this.onReset() }}></CircularButton>
          <CircularButton text='APPLY' bgColor={colors.accentColor} color='white'
            onPress={() => { this.onApply() }}></CircularButton>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen);
