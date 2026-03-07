import { useGetSunSignPredPrevMutation } from "@/app/redux/services/astrologyAPI";
import HoroscopeList from "./HoroscopeList";

export default function Yesterday() {
  return <HoroscopeList usePredictionHook={useGetSunSignPredPrevMutation} />;
}
