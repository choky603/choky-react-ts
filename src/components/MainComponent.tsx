import React from "react";
import { useNavigate } from "react-router";

const MainComponent = () => {

    const navigate = useNavigate();

    // function goPage(path: string) {
    //     navigate(`/${path}`);
    // };

    return (
        <>
            <h1>메인 컴포넌트!!!!!!!!</h1>
            <button onClick={() => navigate("/page1")}>페이지1</button>
            <button onClick={() => navigate("/page2")}>페이지2</button>
        </>
    )
}

export default MainComponent;