import React from "react";
import Marquee from "react-fast-marquee";
import { notifications } from "../../data/notifications/notifications";

export default function Notification() {
  return (
    <div
      className="container mt-4"
      style={{
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        borderRadius: "5px",
      }}
    >
      <h3 className="display-6 mt-3">Notifications</h3>
      <div
        className="marquee m-2"
        style={{
          overflow: "hidden",
        }}
      >
        <Marquee direction="left" autoFill={true} pauseOnHover={true}>
          {notifications.map((notification) => (
            <div style={{ margin: "20px", color: "#000" }}>
              <a
                key={notification.id}
                href={notification.link}
                className="d-block mb-2"
                style={{ textDecoration: "none", color: "#000" }}
              >
                📢 {notification.text}
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
