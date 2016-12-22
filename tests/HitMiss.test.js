import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import HitMiss, { Hit, Miss } from '../src/index';

describe('HitMiss', () => {
    it('should render HIT', () => {
        const wrapper = mount(<HitMiss>
            <Hit
                check={false}
                component={() => (<div>
                    First
                </div>)}
            />
            <Hit
                check // true
                component={() => (<div>
                    Second
                </div>)}
            />
            <Miss
                component={() => (<div>
                    Miss
                </div>)}
            />
        </HitMiss>);
        expect(wrapper.text()).to.be.equal('Second');
    });

    it('should render only one HIT', () => {
        const wrapper = mount(<HitMiss>
            <Hit
                check // true
                component={() => (<div>
                    First
                </div>)}
            />
            <Hit
                check // true
                component={() => (<div>
                    Second
                </div>)}
            />
        </HitMiss>);
        expect(wrapper.text()).to.be.equal('First');
    });

    it('should render Miss if nothing is Hit', () => {
        const wrapper = mount(<HitMiss>
            <Hit
                check={false}
                component={() => (<div>
                    First
                </div>)}
            />
            <Hit
                check={false}
                component={() => (<div>
                    Second
                </div>)}
            />
            <Miss
                component={() => (<div>
                    Miss Text
                </div>)}
            />
        </HitMiss>);
        expect(wrapper.text()).to.be.equal('Miss Text');
    });
});
