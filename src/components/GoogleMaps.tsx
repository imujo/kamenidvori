"use client";

import type { LocationBlockStoryblok } from "@/storyblok/gen/component-types-sb";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

type GoogleMapsProps = {
  location: LocationBlockStoryblok["location"];
};

const locationCoordinates: Record<
  LocationBlockStoryblok["location"],
  { lat: number; lng: number }
> = {
  house_villa: { lat: 42.54655075073242, lng: 18.360095977783203 },
  vineyard_cottage: { lat: 42.5346794128418, lng: 18.35164451599121 },
};

export default function GoogleMaps({ location }: GoogleMapsProps) {
  console.log(location);
  const position = locationCoordinates[location];

  return (
    <APIProvider apiKey={"AIzaSyBTfNNvRRLmdQQLSG1qGmerPc0bsEp6PWk"}>
      <Map
        className="w-full h-full [&>div]:w-full [&>div]:min-h-[300px] md:[&>div]:min-h-[500px] rounded-lg overflow-clip"
        defaultCenter={position}
        defaultZoom={10}
        mapId="DEMO_MAP_ID"
      >
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}
