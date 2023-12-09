import React, { useEffect, useState } from "react";
import "./style.css";
import Records from "../json/posters.json";

const Posters = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            document.getElementById("brand-body").classList.add("light-theme");
        }
        else {
            document.getElementById("brand-body").classList.remove("light-theme");
        }
    };

    return (<>
    <body id="brand-body">
            <div className="navigation">
                <div className="horizontal-gutter"></div>
                <div className="head-box">
                    <div className="box name">RITIKA SAHANI</div>
                    <div className="box">
                        <label className="switchx">
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                            <span className="sliderx"></span>
                        </label>
                    </div>
                </div>

            </div>
            <div className="head-slide">
                <div className="index-red hollow-bold">CASE</div>
                <div className="index-red">STUDY</div>
            </div>
            <div className="main-slide">
                {
                    Records.map(record => {
                        return (
                            <>
                                <div className="cardx">
                                    <div className="internal-card">
                                    <img className="card-image" src="./images/bamboo.jpeg" />
                                    <div className="card-title">{record.name}</div>
                                    <div className="card-sub-title">{record.desc}</div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </body></>)
}

export default Posters;