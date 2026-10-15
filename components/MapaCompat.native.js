// components/MapaCompat.native.js
// Em iOS/Android, MapaCompat é apenas um re-export do react-native-maps.
// O Metro escolhe este arquivo automaticamente; MapaCompat.web.js usa Leaflet.
import MapView, { Callout, Marker } from "react-native-maps";

export { Callout, MapView, Marker };
export default MapView;
