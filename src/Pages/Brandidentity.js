import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import Records from "../json/brandidentity.json";

const BrandIdentity = () => {

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
                <div className="index-red hollow-bold">BRAND</div>
                <div className="index-red">IDENTITY</div>
            </div>
            <div className="main-slide">
                {
                    Records.map(record => {
                        return (
                            <>
                                <a className="cardx" href={record.pdflink}>
                                    <div className="internal-card">
                                    <img className="card-image" src="./images/bamboo.jpeg" />
                                    <div className="card-title">{record.name}</div>
                                    <div className="card-sub-title">{record.desc}</div>
                                    </div>
                                </a>
                            </>
                        )
                    })
                }
            </div>
        </body>
    </>)
}
export default BrandIdentity;