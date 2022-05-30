import React, { useState } from 'react';
import './App.css';

function App() {
    const indicatorOption = ['DRAFT', 'SUBMITTED', 'L1_REVIEWED', 'APPROVED'];
    const [indicator, setIndicator] = useState('');


    const changeHandle = (e) => {
        if (e.target.value === '') {
            setIndicator('')
        }
        setIndicator(e.target.value);
    }

    return (
        <div className="Container">
            <div className="dropdown_Containt">
                <label htmlFor=""></label>
                <select value={indicator} onChange={changeHandle}>
                    <option value=''>Please select</option>
                    {
                        indicatorOption.map((item, index) => {
                            return (
                                <option value={item} key={index} className="dropdown_option">{item}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='indicator-wrap'>
                {indicatorOption.map((option, index) => {
                    let clx = ''
                    if (indicatorOption.indexOf(indicator) > index) {
                        clx = 'complete'
                    }
                    if (option === indicator) {
                        clx = 'in-progress'
                    }
                    if (indicator === 'APPROVED') {
                        clx = 'complete'
                    }
                    return (
                        <div className={`indicator ${clx}`} key={index} style={{ width: `${100 / indicatorOption.length}%` }}>
                            <div className='indicator-circle'></div>
                            <div className='indicator-line'></div>
                            <div className='indicator-text'>{option}</div>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default App;

