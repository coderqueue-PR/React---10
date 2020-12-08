import React, { useState } from 'react';


const App = () => {
    let time = new Date().toLocaleTimeString();
    const [cTIme , sCtime] = useState(time); 

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        sCtime(time);
    };

    setInterval(UpdateTime , 1000)

    return (
        <>
        <h1>{cTIme}</h1>
        </>
    );
}

export default App;