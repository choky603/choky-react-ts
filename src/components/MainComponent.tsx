import React from "react";
import { useNavigate } from "react-router";
import Button from "@material-ui/core/Button";

const MainComponent = () => {

    const navigate = useNavigate();

    // function goPage(path: string) {
    //     navigate(`/${path}`);
    // };

    return (
        <>
            <h1>메인 컴포넌트!!!!!!!!</h1>            
            <Button onClick={() => navigate("/page1")}
                variant="contained" color="primary"> 
                페이지1
            </Button>
            <Button onClick={() => navigate("/page2")}
                variant="outlined" color="primary"> 
                페이지2
            </Button>
        </>
    )
}

export default MainComponent;