import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
export default function Homework1() {
  const [name, setName] = useState();
  const [timeData, setTimeData] = useState(new Date());
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Peşembe",
    "Cuma",
    "Cumartesi",
  ];
  const changeName = () => {
    setName(prompt("Adın Ne"));
  };
  useEffect(() => {
    if (!name) {
      changeName();
    }
    setInterval(() => setTimeData(new Date()), 1000);
  }, []);
  return (
    <Container className="mt-5">
      <h3>Merhaba {name}! Hoşgeldin</h3>
      <Alert>
        {timeData.getHours()}:{timeData.getMinutes()}:{timeData.getSeconds()}{" "}
        {days[timeData.getDay()]}
      </Alert>
    </Container>
  );
}
