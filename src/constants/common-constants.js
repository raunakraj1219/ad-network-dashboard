export const ADV_DATA_FIELD_TYPES = {
    IMPRESSIONS: "Impressions",
    CLICKS: "Clicks",
    CTR: "CTR (in %)",
    DATE: "Date",
}

export const COUNTRY_DATA_FIELD_TYPES = {
    IMPRESSIONS: "C-Impressions",
    COUNTRY: "Country"
}

export const PATH_NAMES = {
    HOME: "/",
    CLICKS: "/clicks-graph",
    IMPRESSIONS: "/impressions-graph",
    CTR: "/ctr-graph",
    COUNTRY_IMPRESSIONS: "/country-impressions-graph",
}


export const FIELD_TYPES_PATH_MAP = {
    [ADV_DATA_FIELD_TYPES.IMPRESSIONS]: PATH_NAMES.IMPRESSIONS,
    [ADV_DATA_FIELD_TYPES.CLICKS]: PATH_NAMES.CLICKS,
    [ADV_DATA_FIELD_TYPES.CTR]: PATH_NAMES.CTR,
    [COUNTRY_DATA_FIELD_TYPES.COUNTRY]: PATH_NAMES.COUNTRY_IMPRESSIONS,
}