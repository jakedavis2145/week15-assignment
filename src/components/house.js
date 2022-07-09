import React from "react";
import NewRoomForm from "./new-room-form";

export default class House extends React.Component{
    render(){
        const rooms = this.props.data.rooms
        ? this.props.data.rooms.map((room, index) =>
        <li id="room-data" key={index}>
            {room.name} Area: {room.area}
            <button id='delete-room' onClick={e =>
            this.props.deleteRoom(e, this.props.data, room)
            }>Delete</button>
        </li>)
        : null;
        return(
            <div>
                <h1 id="house-name"><u>{this.props.data.name}</u></h1>
                <ul>
                    {rooms}
                </ul>
                <NewRoomForm
                addNewRoom={this.props.addNewRoom} data={this.props.data} />
            </div>
        );
    }
}