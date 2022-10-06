import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../common/api';
import QueryString from 'qs';

const Call = () => {
    const location = useLocation();
    const phoneNumber = QueryString.parse(location.search, {
        ignoreQueryPrefix: true
    }).phoneNumber;

    useEffect(() => {
        (async () => {
            if (typeof phoneNumber !== 'string' || phoneNumber.length !== 11) return;
            try {
                await api.post('/application/call', {phone_number: phoneNumber});
                window.location.replace(`tel://${phoneNumber}`);
            } catch (error) {
                console.log(error);
                alert('에러가 발생하였습니다');
            }
        })()
    }, [phoneNumber]);

    return (<></>);
}

export default Call;
