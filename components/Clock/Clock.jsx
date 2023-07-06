import { Image, Text, View } from "react-native";
import { s } from "./Clock.style";
import { Txt } from "../Txt/Txt";
import { nowToHHMM } from "../../services/date.service";
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Txt style={s.time}>{time}</Txt>
    </>
  );
}
