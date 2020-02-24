import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { ITimeline } from '../types/types';

interface Props {
    data: ITimeline[];
    backgroundColor?: string;
}

const Timeline: React.FC<Props> = ({ data, backgroundColor }) => {
    // set default color
    if (!backgroundColor) {
        backgroundColor = 'rgb(33, 150, 243)';
    }

    return (
        <>
            <VerticalTimeline>
                {data.map(item => (

                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        contentArrowStyle={{ borderRight: `7px solid #fff` }}
                        date={item.date}
                        iconStyle={{ background: `${backgroundColor}`, color: '#fff' }}
                        icon={<item.icon />}
                    >
                        <h3 className='vertical-timeline-element-title'>{item.heading}</h3>
                        <p>
                            {item.content}
                        </p>
                    </VerticalTimelineElement>

                ))}
            </VerticalTimeline>
        </>
    )
}

export default Timeline;