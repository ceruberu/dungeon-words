import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';

type Props = {};

// frames = imported sprite png file
// animationType
// {
//    idle : [0, 1, 2, 3],
//    run : [4, 5, 6]
// }

class Sprite extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      animationType: 'idle',
      frameIndex: 0
    };

    this.animate = this.animate.bind(this);
  }
  componentDidMount() {
    requestAnimationFrame(this.animate);
  }

  animate() {
    setTimeout(()=>{
      let isEnd = this.props.animationTypes[this.state.animationType].length - 1 <= this.state.frameIndex;

      if (isEnd) {
        this.setState({
          frameIndex: 0
        });
      };
  
      this.setState({
        frameIndex: this.state.frameIndex + 1
      });
  
      requestAnimationFrame(this.animate);

    }, 1000 / 10);
  }  
  

  render() {
    console.log(this.props);
    // [0, 1, 2, 3] frame sequence
    return (
      <Image
        source={this.props.frames[this.state.frameIndex]}
        style={{
          width: this.props.width,
          height: this.props.height
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Sprite;
