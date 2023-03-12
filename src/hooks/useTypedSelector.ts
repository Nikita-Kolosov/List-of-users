import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import Reducer from "../store/Reducer";

type RootState = ReturnType<typeof Reducer>

export const usedTypedSelector: TypedUseSelectorHook<RootState> = useSelector;