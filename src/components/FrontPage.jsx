import React, { useEffect } from 'react';
import Section2 from './Section2';
import SearchBar from './SearchBar';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

const Frontpage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='frontpage-container'>
            <div className="frontpage-background">
                <SearchBar/>
            </div>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
        </div>
    );
};

export default Frontpage;