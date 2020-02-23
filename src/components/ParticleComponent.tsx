import React from 'react';
import Particles from 'react-particles-js';

const ParticleComponent: React.FC = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }}
        >
            <Particles
                params={{
                    'particles': {
                        'number': {
                            'value': 80
                        },
                        'size': {
                            'value': 4
                        }
                    },
                    'interactivity': {
                        'events': {
                            'onhover': {
                                'enable': true,
                                'mode': 'repulse'
                            }
                        }
                    }
                }}
            />


        </div>
    );
}
export default ParticleComponent;