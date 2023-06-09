import React, {useEffect, useState} from 'react';
import {TEST_ROUTE} from "../utils/consts";
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const GuestTest = ({category}) => {
    const navigate = useNavigate()
    const tests = useSelector((state) => state.test.tests)
    const [test, setTest] = useState()

    useEffect(() => {
        setTest(tests[0])
    }, [tests])

    return (
        <Col md={4} className="mx-lg-auto" onClick={() => navigate(TEST_ROUTE + '/' + test?.id)}>
            <Card style={{width:400, cursor: 'pointer'}} border={"light"} className="mx-lg-auto">
                <Image width={400} height={400} src={process.env.REACT_APP_API_URL || 'http://localhost:4444/' + '/' + test?.img}/>
                <div className="text-center mt-2">
                    {test?.name}
                </div>
                <div className="text-center text-black-50">
                    Прохождений: {test?.completes}
                </div>
            </Card>
        </Col>
    );
};

export default GuestTest;