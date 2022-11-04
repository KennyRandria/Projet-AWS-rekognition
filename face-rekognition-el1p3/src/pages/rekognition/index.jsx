import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import './style.scss';
import UploadImage from "../../components/uploadImage";
import Amodal from "../../components/modal";

export default function Rekognition() {
    const navigate = useNavigate();
    const goBack = function() {
        navigate(-1);
    }
    return(
        <div className="reko">
            <div className="header">
                <Button onClick={goBack}>
                    <ArrowLeftOutlined />
                </Button>
                <h1>Vérifier ma présence</h1>
            </div>
            <div className="content">
                <UploadImage/>
                <Amodal title="Résultat de la vérification de présence" btn="Vérifier maintenant" typeBtn="primary">
                    <div>Cette image vous réssemble à 90%</div>
                </Amodal>
            </div>
        </div>
    )
}