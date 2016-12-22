import React from 'react';

export const Hit = ({ component: Component }) => <Component />;
export const Miss = ({ component: Component }) => <Component />;

Hit.propTypes = Miss.propTypes = {
    component: React.PropTypes.any,
};

const HitMiss = ({ children }) => {
    let component = null;
    let miss = null;
    React.Children.forEach(children, (child) => {
        if (component) {
            return;
        }
        if (child.type === Miss) {
            miss = child;
            return;
        }
        if (child.props.check) {
            component = child;
        }
    });
    return component || miss;
};

HitMiss.propTypes = {
    children: React.PropTypes.node,
};

export default HitMiss;
