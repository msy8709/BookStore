import React from 'react';
import Header from '../components/common/Header';
import { formatNumber } from '../utils/format';
import Title from '../components/common/Title';
import Button from '../components/common/Button';

const Home = () => {

    const Count =10000
    return (
        <div>
            <Title size="large">제목 테스트</Title>
            <div>home body</div>
            <Button size='large' scheme='normal'>
                버튼 테스트
            </Button>
        </div>
    );
};

export default Home;