import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import Chatbot from "../../components/Chatbot";

const Home = () => {
    return (
        <div className="home-container-1">
            <LeftSidebar />
            <div className="home-container-2">
                <HomeMainbar />
                <RightSidebar />
                <Chatbot />
            </div>
        </div>
    );
};

export default Home;



