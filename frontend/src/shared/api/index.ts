import axios from 'axios';

export const DOMAIN = 'http://localhost:8000/api/v1';

export const defaultConfig = {
    baseURL: DOMAIN,
    headers: {},
    withCredentials: true,
};

export const ApiInstanse = axios.create(defaultConfig);

export const setAccessToken = (token: string) => {
    ApiInstanse.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
};
// ApiInstanse.interceptors.request.use((config) => {
//     const token = useAppSelector((store) => store.userReducer.accessToken);

//     config.headers.Authorization = `Bearer ${token}`;

//     // if (token) {
//     // }
//     return config;
// });

// useAppSelector()

// ApiInstanse.interceptors.response.use()
