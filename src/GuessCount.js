import PropTypes from 'prop-types';
import React from 'react';

import './GuessCount.css';

function GuessCount(props) {
    const guesses = props.guesses
       
    if (guesses < 2) {
        return <div className="guesses">{guesses} guess</div> ;
    } else {
        return <div className="guesses">{guesses} guesses</div>;
    };
}

GuessCount.propTypes = {
    guesses: PropTypes.number.isRequired,
}

export default GuessCount;