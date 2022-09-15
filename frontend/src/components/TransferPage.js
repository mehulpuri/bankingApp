import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "./Card";
import axios from "axios";

const TransferPage = () => {
  const [senderId, setSenderId] = useState();
  const [receiverId, setReceiverId] = useState();

  const [senderData, setSenderData] = useState();
  const [receiverData, setReceiverData] = useState();

  const location = useLocation(); //sender id
  let { id } = useParams(); //receiver id

  useEffect(() => {
    if (!senderData) idFunct();
  }, [senderId]);

  const idFunct = async () => {
    const senderId = await location.state; //sender id
    const receiverId = await id;

    setSenderId(senderId);
    retrieveSenderData(senderId);
    retrieveRecieverData(receiverId);
  };

  const retrieveSenderData = async (_senderId) => {
    const senderRes = await axios.get(
      `https://thawing-crag-83984.herokuapp.com/find/${_senderId}`
    );
    const senderData = await senderRes.data;
    setSenderData(senderData);
  };

  const retrieveRecieverData = async (_receiverId) => {
    const receiverRes = await axios.get(
      `https://thawing-crag-83984.herokuapp.com/find/${_receiverId}`
    );
    const receiverData = await receiverRes.data;
    setReceiverData(receiverData);
  };

  return (
    <div className="bg-slate-100	">
      <Card receiverData={receiverData} senderData={senderData} />
    </div>
  );
};

export default TransferPage;
