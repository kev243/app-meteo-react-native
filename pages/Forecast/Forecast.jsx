import { useRoute } from "@react-navigation/native";
import { Container } from "../../components/Container/Container";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecast.style";

export function Forecast({}) {
  const { params } = useRoute();
  console.log("***", params);
  return (
    <Container>
      <Txt>Forecast</Txt>
    </Container>
  );
}
