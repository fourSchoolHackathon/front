import React from 'react';
import { subscribe } from '../../utils/webPush';

const Main = () => {
    return (
        <div>
            메인임
            <button onClick={subscribe}>Web Push 구독</button>
        </div>
    );
};

export default Main;