import React,{useState} from 'react'
const BmiCalculator = () => {

    const [age, setAge] = useState(18);
    const [gender, setGender] = useState('Male');
    const [height, setHeight] = useState(60);
    const [weight, setWeight] = useState(50);
    const [BMI, setBMI] = useState(0.0);
  const [BMICategory, setBMICategory] = useState('');
    
   
  const calculateBMI = () => {
    const heightInMeters = height / 39.37;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI);

    if(gender === 'Male'){

      if (calculatedBMI < 18.5) {
        setBMICategory('Underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
        setBMICategory('Normal weight');
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setBMICategory('Overweight');
      } else {
        setBMICategory('Obese');
      }
    }
    else {
      if (calculatedBMI < 20.5) {
        setBMICategory('Underweight');
      } else if (calculatedBMI < 27) {
        setBMICategory('Normal weight');
      } else if (calculatedBMI < 32) {
        setBMICategory('Overweight');
      } else {
        setBMICategory('Obese');
      }
    }
  };

    return(
        <div className='flex justify-center items-center mt-4 flex-col'>
         <div className="card container shadow-lg ">
         <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
        <div className="mb-4">
          <label htmlFor="age" className="mr-2 font-medium">
            Age:
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border rounded-lg px-2 py-1 w-20"
            min="2"
            max="100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="mr-2 font-medium">
            Gender:
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border rounded-lg px-2 py-1 w-24"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="height" className="mr-2 font-medium">
            Height (inches):
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border rounded-lg px-2 py-1 w-20"
            min="24"
            max="96"
            step="0.01"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="mr-2 font-medium">
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border rounded-lg px-2 py-1 w-20"
            step="0.01"
            />
            </div>
            <button onClick={calculateBMI}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mb-3">Calculate BMI</button>
  <br />
  {BMI > 0 && (
    <div>
      <p>Your BMI is: {BMI.toFixed(2)}</p>
      <p>Your BMI category is: {BMICategory}</p>
    </div>
  )}
          </div>
        </div>
        
        </div>
        </div>
        
       
    )
    
}

export default BmiCalculator