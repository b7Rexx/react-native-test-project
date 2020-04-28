import React from "react";
import { Accordion, View } from "native-base";
const dataArray = [
  { title: "First Element", content: "1 Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "2 Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "3 Lorem ipsum dolor sit amet" }
];
export default class AccordionComponent extends React.Component {
  render() {
    return (
      <View>
        <Accordion dataArray={dataArray} expanded={0} />
      </View>
    );
  }
}
