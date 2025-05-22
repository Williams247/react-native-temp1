import { useMemo } from "react";
import { Dimensions } from "react-native";
import { AllowedDevices, MediaResponse } from "./type";

export function useMediaQuery(): MediaResponse {
  const device = useMemo(() => {
    const deviceDimensions = Dimensions.get("window").width;
    if (deviceDimensions < 500) return "mobile";
    else if (deviceDimensions > 500) return "tab";
  }, []) as AllowedDevices;

  return { deviceType: device };
}
