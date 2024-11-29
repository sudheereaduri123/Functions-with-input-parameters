import logo from './logo.svg';
import './App.css';

function App() {
let sachinTenthResult =()=>{
  
  let engMarks = 66;
  let telMarks =99;
  let hinMarks =89;
  let matMarks =90;
  let sciMarks =76;
  let socMarks =69;

  let passMarks = 35;
  if(engMarks >= passMarks &&
    telMarks >= passMarks &&
    hinMarks >= passMarks &&
    matMarks >= passMarks &&
    sciMarks >= passMarks &&
    socMarks >= passMarks 
  ){
    console.log("sachin passed in tenth")
  }else{
    console.log("sachin failed in tenth")
  }
  
};

let DhoniTenthResult = ()=>{
let engMarks = 76;
let telMarks =89;
let hinMarks =88;
let matMarks =92;
let sciMarks =86;
let socMarks =79;

let passMarks = 35;
if(engMarks >= passMarks &&
  telMarks >= passMarks &&
  hinMarks >= passMarks &&
  matMarks >= passMarks &&
  sciMarks >= passMarks &&
  socMarks >= passMarks 
){
  console.log("Dhoni passed in tenth")
}else{
  console.log("Dhoni failed in tenth")
}

};

let KholiTenthResult = ()=>{
let engMarks = 86;
let telMarks =72;
let hinMarks =66;
let matMarks =85;
let sciMarks =66;
let socMarks =56;

let passMarks = 35;
let studentName;
if(engMarks >= passMarks &&
  telMarks >= passMarks &&
  hinMarks >= passMarks &&
  matMarks >= passMarks &&
  sciMarks >= passMarks &&
  socMarks >= passMarks 
){
  console.log( `${studentName}passed in Tenth`);

}else{
  console.log(`${studentName}failed in Tenth`);
}

};
sachinTenthResult();
DhoniTenthResult();
KholiTenthResult();

let CalculateTenthResult = (telMarks,hinMarks,engMarks,matMarks,sciMarks,socMarks,studentName)=>{
  let passMarks = 35;
  console.log(engMarks);
  console.log(telMarks);
  console.log(hinMarks);
  console.log(matMarks);
  console.log(sciMarks);
  console.log(socMarks);
};
CalculateTenthResult(1,2,3,4,5,6,"Rohitsharma");
CalculateTenthResult(1,2,3,4,5,5,"sky");

return(
  <div className="APPS" >
    <h1>Learning Function With Parameters</h1>
  </div>
  
);



}
export default App;
