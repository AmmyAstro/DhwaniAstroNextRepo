import HoroscopeList from "./HoroscopeList";
import { useGetSunSignPredNxtMutation } from "@/app/redux/services/astrologyAPI";

export default function Tomorrow() {
  return <HoroscopeList usePredictionHook={useGetSunSignPredNxtMutation} />;
}
