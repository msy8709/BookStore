import React from 'react';
import Header from '../components/common/Header';
import { formatNumber } from '../utils/format';

const Home = () => {

    const Count =10000
    return (
        <div>

            <div>home body</div>
            <div>count: {formatNumber(Count)}</div>
        </div>
    );
};

export default Home;