import { Button } from "antd";
import Amodal from "../modal";
import { Link } from "react-router-dom";
import {EditOutlined} from "@ant-design/icons";
import UpdateEvent from "../updateEvent";
import './style.scss';

export default function EventCard(props) {
    const {data,participant, filter} = props;
    return(
        <div className="card">
            <div className='card-header'>
                <p className='title'>{data.event_name}</p>
                <Amodal title="Modifier l'évènement" btn={<EditOutlined />}>
                    <UpdateEvent id_event={data.id} />
                </Amodal>
            </div>
            <div className='card-body'>
                <div className='card-body__element'>
                    <p className='property'>Status</p>
                    <p className='value'>{data.event_status}</p>
                </div>
                <div className='card-body__element'>
                    <p className='property'>Date et heure de début</p>
                    <p className='value'>{data.start_event}</p>
                </div>
                <div className='card-body__element'>
                    <p className='property'>Date et heure de fin</p>
                    <p className='value'>{data.end_event}</p>
                </div>
                <div className='card-body__element'>
                    <p className='property'>Responsable</p>
                    <p className='value'>{data.id_responsible}</p>
                </div>
                <div className='card-body__element'>
                    <p className='title'>Participants</p>
                    <Amodal title="Participants" btn="Voir les participants">
                        <div className="participant-content">
                            <div>{filter}</div>
                            {participant.length > 0 &&
                            participant.map((items, index) => (
                                <div className='card-body__element' key={index}>
                                    {/* <p className='property'>{items.id}</p>
                                    <p className='value'>{items.id_user}</p> */}
                                    <table>
                                        <th>STD</th>
                                        <th>Nom</th>
                                        <th>Status</th>
                                        <tr>
                                            <td>{items.id}</td>
                                            <td>{items.id_user}</td>
                                            <td>{items.participant_status}</td>
                                        </tr>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </Amodal>
                </div>
            </div>
            <div className='card-footer'>
                {data.event_status !== "" && (
                    <Link to="/rekognition">
                        <Button type="primary">Vérifier ma présence</Button>
                    </Link>
                )}
        </div>
            
        </div>
    )
}