import React, { useState, useEffect } from "react";
import AntInput from "../input";
import { Button, Select, TimePicker } from "antd";
import './style.scss';
import { Option } from "antd/lib/mentions";
import { PlaceService } from "../../service/place";
import { EventService } from "../../service/event";

export default function AddEvent() {
    const [dataPlace, setDataPlace] = useState([]);
    const[params, setParams] = useState({});
    const[eventList, setEventList] = useState([]);

    const[eventName, setEventName] = useState('');
    const[responsible, setResponsible] = useState('');
    const[eventStatus, setEventStatus] = useState('');
    const[idPlace, setPlace] = useState('');
    const[eventGroup, setEventGroup] = useState('');
    const[startTime, setStartTime] = useState('');
    const[endTime, setEndTime] = useState('');

    const fetchDataPlace = async function(){
        try {
            const data = await PlaceService.getPlace();
      
            setDataPlace(data);
            console.log(data, dataPlace);
          } catch (error) {
            console.log("error", error);
          }
    }

    const createNewEvent = async function() {
        try {
            const data = await EventService.putEvent(params);
            setEventList(data);
            console.log(data, eventList);
        } catch (error) {
            console.log("error", error);
        }
    }

    const addEventname = function(event) {
        setEventName(event.target.value);
    }
    const addResponsible = function(event) {
        setResponsible(event.target.value);
    }
    const onChangeStatus = function(value) {
        setEventStatus(value);
    }
    const onChangePlace = function(value) {
        setPlace(value);
    }
    const addEventGroup = function(event) {
        setEventGroup(event.target.value);
    }
    const addStartTime = function(value) {
        const dateValue = value._d;
        const date = dateValue.toISOString(value._d);
        console.log(date);
        setStartTime(date);
    }
    const addEndTime = function(value) {
        const dateValue = value._d;
        const date = dateValue.toISOString(value._d);
        console.log(date);
        setEndTime(date);
        console.log(date);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        createNewEvent();
            // setEventName('');
            // setResponsible('');
            // setEventStatus('');
            // setPlace('');
            // setEventGroup('');
            // setStartTime('');
            // setEndTime('');
        setParams([
            {
                eventName: eventName,
                startEvent: startTime,
                endEvent: endTime,
                eventStatus: eventStatus,
                idResponsible: responsible,
                place: {
                    id: idPlace
                }
            }
        ])
    
        return console.log(params);
      };

      useEffect(() => {
        fetchDataPlace();
      }, []);
    return(
        <div className="add-event">
            <AntInput label="Nom de l'évènement" name="event_name" value={eventName} onChange={addEventname} />

            <AntInput label="Nom du responsable" name="id_responsible" value={responsible} onChange={addResponsible} />

            <Select
                showSearch
                placeholder="Status"
                onChange={onChangeStatus}
            >
                <Option value="inProgress">En cours</Option>
                <Option value="done">Fini</Option>
            </Select>

            <Select
                showSearch
                placeholder="Place"
                onChange={onChangePlace}
            >
                {dataPlace.length > 0 &&
                dataPlace.map((items, index) => (
                    <Option value={items.place_name} key={index}>{items.place_name}</Option>
                ))}
            </Select>

            <AntInput label="Groupe" name="end_event" value={eventGroup} onChange={addEventGroup}/>

            <div className="date-hour">
                <div>
                    <p>Date et heure de début</p>
                    <TimePicker onChange={addStartTime} />
                </div>
                <div>
                    <p>Date et heure de fin</p>
                    <TimePicker onChange={addEndTime} />
                </div>
            </div>

            <Button type="primary" htmlType="submit" onClick={submitHandler}>
                Terminer
            </Button>
        </div>
    )
}