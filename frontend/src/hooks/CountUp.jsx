import { useCountUp } from 'react-countup';
import { useRef, useEffect } from 'react';

const CountUp = ({ end, start = 0, inView, duration = 2 }) => { 
    const ref = useRef(null);

    const { start: startCount } = useCountUp({ 
        ref, 
        end, 
        start, 
        duration 
    });

    useEffect(() => {
        if (!inView) {
            return;
        }
        startCount();
    }, [startCount, inView]);

    return <span ref={ref} />;
};

export default CountUp;
