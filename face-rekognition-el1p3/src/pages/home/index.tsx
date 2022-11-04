import React, { useEffect, useState } from "react";
import EventCard from "../../components/eventCard";
import AddIcon from "../../components/icons/add";
import { EventService } from "../../service/event";
import "./style.scss";
import Amodal from "../../components/modal";
import AddEvent from "../../components/addEvent";
import { ParticipantService } from "../../service/participants";
import { Button } from "antd";

export default function Home() {
    const [dataEvent, setDataEvent] = useState([]);
    const [dataParticipant, setDataParticipant] = useState([]);

    const fetchDataEvent = async function () {
        try {
          const data = await EventService.getEvent();
          setDataEvent(data);
          console.log(data, dataEvent);
        } catch (error) {
          console.log("error", error);
        }
      };

    const fetchDataParticipant = async function () {
        try {
          const data = await ParticipantService.getParticipant();
    
          setDataParticipant(data);
          console.log(data, dataParticipant);
        } catch (error) {
          console.log("error", error);
        }
      };
    
      const fetchDataParticipantMissing = async function () {
        try {
          const data = await ParticipantService.getParticipantMissing();
    
          setDataParticipant(data);
          console.log(data, dataParticipant);
        } catch (error) {
          console.log("error", error);
        }
      };
      
      const fetchDataParticipantHere = async function () {
        try {
          const data = await ParticipantService.getParticipantHere();
    
          setDataParticipant(data);
          console.log(data, dataParticipant);
        } catch (error) {
          console.log("error", error);
        }
      };
    
    const fetchAllParticipant = function() {
      fetchDataParticipant();
    }

    const fetchMissingParticipant = function() {
      fetchDataParticipantMissing();
    }

    const fetchHereParticipant = function() {
      fetchDataParticipantHere();
    }

      useEffect(() => {
        fetchDataEvent();
        fetchDataParticipant();
        fetchDataParticipantMissing();
        fetchDataParticipantHere();
      }, []);
    return(
        <div className="home">
          <div className="header">
            <h1>Liste des évènements</h1>
            <Amodal title="Ajouter un évènement" btn={<AddIcon/>} typeBtn="primary">
                <AddEvent/>
            </Amodal>
          </div>
          {/* <hr className="divider"/> */}
          <div className="event-list">
              {dataEvent.length > 0 &&
              dataEvent.map((items, index) => (
                  <EventCard data={items} key={index} participant={dataParticipant} 
                    filter={<div className="filter">
                        <p>Filtrer par:</p>
                        <div>
                            <Button onClick={fetchAllParticipant}>Tous</Button>
                            <Button onClick={fetchMissingParticipant}>Absent</Button>
                            <Button onClick={fetchHereParticipant}>Présent</Button>
                        </div>
                    </div>}
                  />
              ))}
          </div>
        </div>
    )
}