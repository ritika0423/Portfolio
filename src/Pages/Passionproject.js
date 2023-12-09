import React, { useEffect, useState } from "react";
import "./style.css";
import Records from "../json/passionproject.json";

const PassionProject = () => {
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
                <div className="index-red hollow-bold">PASSION </div>
                <div className="index-red">PROJECTS</div>
            </div>
            <div className="main-slide">
                {
                    Records.map(record => {
                        return (
                            <>
                                <div className="cardx ps-card">
                                    <div className="internal-card">
                                    <img className="card-image ps-image" src={record.imagelink} />
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

export default PassionProject;