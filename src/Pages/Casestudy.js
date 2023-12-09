import React, { useEffect, useState } from "react";
import "./style.css";
import Records from "../json/casestudy.json";

const CaseStudy = () => {

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
                                        <a href={record.pdflink} className="cardx cs-cardx" >

                                    <div className="internal-card" href="www.google.com">
                                    <img className="card-image cs-image" src={record.imagelink}  />
                                    <div className="card-title cs-title">{record.name}</div>
                                    <div className="card-sub-title">{record.desc}</div>
                                    </div>
                                </a>
                            </>
                        )
                    })
                }
            </div>
        </body></>)
}

export default CaseStudy;