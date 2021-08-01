import React from 'react';

function Rank({ name,surname,entries }) {;
    return (
        <div>
            <div className='white f3'>
                {`${name} ${surname}, your current entry count is: `}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;
