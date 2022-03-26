import React from 'react';
import './QusAns.css'
const QusAns = () => {
    return (
        <div>
            <div className='qus-ans'>
            <h2>Difference between Props and State</h2>
            <div className='ans'>
                <div>
                <ul>
                <li>
                    Props are read-only.
                </li>
                <li>
                    Props are immutable.
                    </li>
                    <li>Props allow pass data from one component to other
                        component as an arguments.
                    </li>
                    <li>Props can be accessed by the child component</li>
                        <li>Stateless component can have props.
                            
                    </li>
            </ul>
            </div>
            <div>
                <ul>
                <li>
                    State changes can be asynchronous.
                </li>
                <li>
                    State is mutable.
                </li>
                <li>State holds information about the components.</li>
                <li>State Can not be accessed by child components.</li>
                <li>Stateless components can not have state.</li>
            </ul>
            </div>
            </div>
            </div>
            <h2>How React Works?</h2>
            <p className='react'>React implements a virtual DOM that is basically a DOM tree.
                So when it needs to read or write to the DOM it will use
                virtual DOM.Diff algorithm manage the process.Then the virtual
                DOM will find and update Browser DOM esialy.
            </p>
        </div>
        
    );
};

export default QusAns;