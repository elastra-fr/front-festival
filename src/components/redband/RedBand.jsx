import React, { useState, useEffect } from "react";
import "./RedBand.css";
import { fetchRedBandEvents } from "../../api";

const RedBand = () => {
  const [events, setEvents] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRedBandEvents();
        setEvents(data);
        setIsVisible(data.length > 0);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleAcknowledge = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="redBand"  style={{ display: isVisible ? "block" : "none" }}>
          <div className="redBandContent">
            <h3>Événements en cours :</h3>
            {events.map((event, index) => (
              <div key={index} className="eventItem">
                <p>Type : {event.title}</p>
                <p>Description : {event.content}</p>
                <p>Date : {event.newsDate.date}</p>
              </div>
            ))}
          </div>
          <button onClick={handleAcknowledge} id="alertButton">J'ai compris</button>
        </div>
      )}
    </>
  );
};

export default RedBand;
