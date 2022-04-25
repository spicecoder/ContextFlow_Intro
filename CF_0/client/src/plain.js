import React, {  useState } from 'react';

//import './style.css';
//<PlainSelect selectedValue = {selectedValue} pairselecteds={pairselecteds}/>
const  PlainSelect = ({staticentity,pairedones})=> {  
var  options ;
//var optionsArray =null;
//if( {optionsArray}== null){
options = [
  { value: 'flavor', label: 'flavor' },
  { value: 'yummy', label: 'yummy' },
  { value: 'red', label: 'red' },
  { value: 'green', label: 'green' },
  { value: 'yellow', label: 'yellow' },
]
//}
//else {options = optionsArray }
const [selectedOption,setSelectedOption] = useState("green") ;
// class App extends Component {
//   state = {
//     selectedOption: 'None',
//   }

  var handleChange = ({ target }) => {
   // this.setState({
      setSelectedOption( target.value)
       //selectedValue =  target.value ;
       pairedones[JSON.stringify(staticentity)] = target.value
       console.log("paired :"+ JSON.stringify(pairedones)+"static"+JSON.stringify(staticentity))
   // })
  };

 
    return (
      <div>
        <span>{selectedOption}</span>
        <select
          value={selectedOption}
          onChange={ handleChange}
          >
          
        {options.map(({ value, label }, index) => <option value={value}  key={value}>{label}</option>)}
        </select>
      </div>
    );
  }
 

export default PlainSelect ;
