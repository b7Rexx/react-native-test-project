import React from 'react';
import { ScrollView } from "react-native";
import { Container, Icon, Button } from 'native-base';
import HeaderLayout from './components/layouts/header.layout';
import FooterLayout from './components/layouts/footer.layout';
import AccordionComponent from './components/accordion.component';
import { connect } from 'react-redux';
import { changeAppView } from './api/actions';
import { layouts } from "./styles/layout.css";
import { styles } from './styles/style.css';

const mapStateToProps = state => ({
  app: state.app.view,
});

const mapDispatchToProps = dispatch => ({
  changeAppView: (view) => dispatch(changeAppView(view))
});


class Main extends React.Component {

  changeView() {
    this.props.changeAppView('DETAIL');
  }

  render() {
    return (
      <>
        <Container style={layouts.container}>
          <HeaderLayout />
          <AccordionComponent></AccordionComponent>
          <ScrollView style={layouts.content}>
            <Icon name="ios-person" style={styles.icon} />
            <Button style={styles.button} onPress={() => this.changeView()} />
          </ScrollView>
          <FooterLayout />
        </Container>
      </>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
