
// import React, {Component} from 'react';
// import { Steps } from "intro.js-react";

// class TestIntro extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             stepsEnabled: true,
//             initialStep: 0,
//             steps: [
//               {
//                 element: "#hello",
//                 intro: "Hello step"
//               },
//               {
//                 element: ".world",
//                 intro: "World step"
//               }
//             ],
//             hintsEnabled: false,
//             hints: [
//               {
//                 element: ".hello",
//                 hint: "Hello hint",
//                 hintPosition: "middle-right"
//               }
//             ]
//           };
//         }
    
//     onExit = () => {
//         this.setState(() => ({ stepsEnabled: false }));
//     };
        
//     toggleSteps = () => {
//         this.setState(prevState => ({ stepsEnabled: !prevState.stepsEnabled }));
//     };
    
   

//     render() {
//         return (
//             <div>
//                 <Steps
//           enabled={this.state.stepsEnabled}
//           steps={this.state.steps}
//           initialStep={this.state.initialStep}
//           onExit={this.onExit}
//         />
//         <button class="world" onClick={this.togglesSteps} >Start Tutor</button>
//         <button id="hello">Login Page</button>
//             </div>
//         );
//     }
// }

// export default TestIntro;