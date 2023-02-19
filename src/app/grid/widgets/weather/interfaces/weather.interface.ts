export interface WeatherResponse {
    product:    string;
    init:       string;
    dataseries: Datasery[];
}

export interface Datasery {
    date:        number;
    weather:     string;
    temp2m:      Temp2M;
    wind10m_max: number;
}

export interface Temp2M {
    max: number;
    min: number;
}