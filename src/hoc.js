import React from 'react';

const hitMiss = (check, Component) => NextComponent =>
    (props) => {
        if (check(props)) {
            return React.createElement(Component, props);
        }
        return React.createElement(NextComponent, props);
    };

export default hitMiss;
