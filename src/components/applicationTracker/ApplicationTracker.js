import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApplicationsByUserIdAsync, selectApplications } from './appTrackerSlice';
import './ApplicationTracker.css';
import Stepper from './components/Stepper';

// function Stepper({ steps, activeStep }) {

//   function getStepClass(step) {
//     let cls = 'step';
//     if (activeStep === step) {
//       cls += ' step-active';
//     }
//     else if (activeStep > step) {
//       cls += ' step-done';
//     }
//     else {
//       cls += ' step-inactive'
//     }
//     return cls;
//   }

//   return (
//     <div className="steps-container">
//       {
//         steps.map((label, index) =>
//           <div className={getStepClass(index)} key={index}>
//             <div><div className="circle">{index + 1}</div></div>
//             <div className="label">{label}</div>
//             {index < steps.length - 1 && <div className="line"></div>}
//           </div>
//         )
//       }
//     </div>
//   );
// }


const RequestDetails = () => {
  console.log("Request Detail");
  return <h1>
    Request Details
  </h1>

}
const Payment = () => {
  console.log("Payment");
  return <h1>
    Payment
  </h1>

}
const Confirmation = () => {
  console.log("Confirmantion");
  return <h1>
    Confirmantion
  </h1>
}

function ApplicationTracker() {
  const dispatch = useDispatch();
  const applications = useSelector(selectApplications);

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    'Request details',
    'Payment',
    'Booking confirmation',
  ];

  const getSectionComponent = () => {
    switch (activeStep) {
      case 0: return <RequestDetails />;
      case 1: return <Payment />;
      case 2: return <Confirmation />;
      default: return null;
    }
  }

  useEffect(() => {
    dispatch(fetchApplicationsByUserIdAsync(1));
  }, [dispatch]);

  useEffect(() => {
    console.log(applications);
  }, [applications]);

  return (
    <Fragment>
      <div className='container '>
        <div className="row">
          <div className='progresses'>
            <h1>Application Tracker</h1>
          </div>
        </div>
        <div class="row align-items-start ">
          <div className='col'>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Loan Type</th>
                  <th scope="col">Loan Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications && applications.map((application) => {
                    return (
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className='row' style={{margin: "auto 10px"}}>
          <div className='col-3' style={{backgroundColor: "aliceblue", padding: "10px"}}>
            <Stepper steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              application={applications} />
          </div>
          <div className='col-9' style={{padding: "15px"}}>
            Content Here
          </div>
        </div>
      </div>
      {/* <Stepper
        steps={steps}
        activeStep={activeStep}
      />
      <div style={{ padding: '20px' }}>
        {getSectionComponent()}
        {(activeStep !== 0 && activeStep !== steps.length - 1)
          && <button onClick={() => setActiveStep(activeStep - 1)}>Previous</button>
        }
        {activeStep !== steps.length - 1
          && <button onClick={() => setActiveStep(activeStep + 1)}>Next</button>
        }
      </div> */}
    </Fragment>
  )
}

export default ApplicationTracker;