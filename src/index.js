import React from 'react';
import { any, node } from 'prop-types';

export const Hit = ({ component: Component }) => <Component />;
export const Miss = ({ component: Component }) => <Component />;

Hit.propTypes = Miss.propTypes = {
    component: any,
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
    children: node,
};

export default HitMiss;
