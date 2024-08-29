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
    const [selectedPolygons, setSelectedPolygons] = useState<Set<number>>(new Set([]));
    const [selectedOperation, setSelectedOperation] = useState<OperationType | null>(null)
    const { operation, areaCalculation, selectedSol, selectedSolIndx, area } = useContext(SolutionsContext)
    const formattedPolygons = convertToGoogleMapFormat(selectedSol);
    useEffect(() => {
        if (area.proposedSolution !== selectedSolIndx) {
            setSelectedPolygons(new Set())
            setSelectedOperation(null)
        }
    }, [selectedSolIndx])
    const handlePolygonClick = (index: number) => {
        const updatedSet = new Set(selectedPolygons);
        setSelectedOperation(null)
        if (updatedSet.has(index)) {
            updatedSet.delete(index);
        } else {
            updatedSet.add(index);
        }
        setSelectedPolygons(updatedSet);
        areaCalculation(selectedSol.features.filter((_, index) => updatedSet.has(index)))

    };

    const handleButtonClick = (name: OperationType) => {
        const [polygon1, polygon2] = selectedPolygons
        setSelectedOperation(name)
        operation(selectedSolIndx, polygon1, polygon2, name)
        setSelectedPolygons(new Set())
    }

    return (
        <div>
            <div className={buttonRow}>
                {
                    OPERATION_BUTTONS.map((name) => {
                        return <button
                            disabled={selectedPolygons.size !== 2}
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
                                fillColor={selectedPolygons.has(index) ? "blue" : "red"}
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
