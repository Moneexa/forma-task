import { OPERATION_BUTTONS, OperationType } from '../../../helpers/constants';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Polygon } from './Polygon';
import { useEffect, useState } from 'react';
import { buttonRow, containerStyle } from './MapArea.css';
import { useContext } from 'react';
import { SolutionsContext } from '../../../store/Solutions';
import { convertToGoogleMapFormat } from '../../../helpers/convertToGoogleMapFormat';
import { buttonStyle, buttonStyleVariant } from '../Workspace.css';

const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY || ""
const center = {
    lng: 2.2919046878814697, lat: 48.85770582708133
};

export function MapArea() {
    const [selectedPolygons, setSelectedPolygons] = useState<number[]>([]);
    const [selectedOperation, setSelectedOperation] = useState<OperationType | null>(null)
    const { operation, areaCalculation, selectedSolIndx, area, sols } = useContext(SolutionsContext)
    const selectedSol = sols[selectedSolIndx]
    const formattedPolygons = convertToGoogleMapFormat(selectedSol);
    useEffect(() => {
        if (area.proposedSolution !== selectedSolIndx) {
            setSelectedPolygons([])
            setSelectedOperation(null)
        }
    }, [selectedSolIndx])
    const handlePolygonClick = (index: number) => {
        const updatedSet = structuredClone(selectedPolygons);
        setSelectedOperation(null)
        if (updatedSet.includes(index)) {
            updatedSet.filter(val => val != index);
        } else {
            updatedSet.push(index);
        }
        setSelectedPolygons(updatedSet);
        areaCalculation(updatedSet)

    };

    const handleButtonClick = (name: OperationType) => {
        setSelectedOperation(name)
        operation(selectedPolygons, name)
        setSelectedPolygons([])
    }

    return (
        <div>
            <div className={buttonRow}>
                {
                    OPERATION_BUTTONS.map((name) => {
                        return <button
                            disabled={selectedPolygons.length !== 2}
                            className={`
                                ${buttonStyle}
                                ${selectedOperation === name
                                    ? buttonStyleVariant.clicked
                                    : buttonStyleVariant.default}`
                            } onClick={() => handleButtonClick(name)}>
                            {name}
                        </button>
                    })
                }
            </div>
            <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
                <Map
                    defaultCenter={center}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    className={containerStyle}
                >
                    {
                        formattedPolygons.map((coordinates, index) => (
                            <Polygon
                                key={index}
                                paths={coordinates}
                                fillColor={selectedPolygons?.includes(index) ? "blue" : "red"}
                                fillOpacity={0.4}
                                strokeColor={"black"}
                                strokeOpacity={0.8}
                                strokeWeight={2}
                                onClick={() => handlePolygonClick(index)} />
                        ))
                    }
                </Map>
            </APIProvider>
        </div>
    );
}

export default MapArea;
