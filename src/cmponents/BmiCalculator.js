import React,{useState} from 'react'
const BmiCalculator = () => {

    const [age, setAge] = useState(18);
    const [gender, setGender] = useState('Male');
    const [height, setHeight] = useState(60);
    const [weight, setWeight] = useState(50);
    
    const calculateBMI = () => {
        //conversion factor for inches to meters
      const heightInMeters = height / 39.37;
      const bmi = weight / (heightInMeters * heightInMeters);
  
      if (gender === 'Male') {
        if (bmi < 18.5) {
          return 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          return 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
          return 'Overweight';
        } else {
          return 'Obesity';
        }
      } else {
        if (bmi < 20.5) {
          return 'Underweight';
        } else if (bmi >= 20.5 && bmi <= 26.9) {
          return 'Normal weight';
        } else if (bmi >= 27 && bmi <= 31.9) {
          return 'Overweight';
        } else {
          return 'Obesity';
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
            <div className="mb-4">
              <label htmlFor="bmi" className="mr-2 font-medium">
                BMI:
              </label>
              <span id="bmi" className="border rounded-lg px-2 py-1 w-20">
                {((weight / (height * height)) * 703).toFixed(2)}
              </span>
            </div>
            <div>
              <label htmlFor="bmiCategory" className="mr-2 font-medium">
                BMI Category:
              </label>
              <span id="bmiCategory" className="border rounded-lg px-2 py-1">
                {calculateBMI()}
              </span>
            </div>
          </div>
        </div>
        
        </div>
        </div>
        
       
    )
    
}

export default BmiCalculator