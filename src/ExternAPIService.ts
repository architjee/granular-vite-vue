export interface ResultantValue {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    boundingbox: string[];
    lat: string;
    lon: string;
    display_name: string;
    place_rank: number;
    category: string;
    type: string;
    importance: number;
    icon: string

}
function parseDataAndFilterResults(results: Array<ResultantValue>): ResultantValue[] {
    let filtered_response:Array<ResultantValue> = []
    if (results) {
        results.forEach((result) => {
            if (result && result["type"] && result["type"] == "administrative")
                filtered_response.push(result)
        })
    }
    return filtered_response
}

export { parseDataAndFilterResults }