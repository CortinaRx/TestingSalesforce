import { LightningElement } from 'lwc';

export default class MeetingRooms extends LightningElement {

    selectedMeetingRoom;

    meetingRoomsInfo = [
    {roomName: 'A-01', roomCapacity:'12'},
    {roomName: 'A-02', roomCapacity:'13'},
    {roomName: 'A-03', roomCapacity:'14'},
    {roomName: 'A-04', roomCapacity:'15'},
    {roomName: 'A-05', roomCapacity:'16'},


   
];

ontileSelectHandler(event){
    const meetingRoomInfo =  event.detail;
    this.selectedMeetingRoom = meetingRoomInfo.roomName;
}
}