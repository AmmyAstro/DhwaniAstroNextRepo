import { useGetSunSignPredTodayMutation } from "@/app/redux/services/astrologyAPI";
import HoroscopeList from "./HoroscopeList";
export default function Today() {
  return <HoroscopeList usePredictionHook={useGetSunSignPredTodayMutation} />;
}
