// import axios from "axios";

// // const axiosInstance = (history = null) => {
// const axiosInstance = (history = null) => {
// 	let headers = {};

// 	if (localStorage.token) {
// 		headers.Authorization = `Bearer ${localStorage.token}`;
// 	}

// 	const axiosInstance = axios.create({
// 		baseURL: process.env.REACT_APP_API_URL,
// 		headers,
// 	});

// 	// axiosInstance.interceptors.request.use(
// 	// 	(request) =>
// 	// 		new Promise((resolve, reject) => {
// 	// 			resolve(request);
// 	// 		}),
// 	// 	(error) => {
// 	// 		if (!error.request) {
// 	// 			return new Promise((resolve, reject) => {
// 	// 				reject(error);
// 	// 			});
// 	// 		}
// 	// 	}
// 	// );

// 	axiosInstance.interceptors.request.use(
// 		(request) => {
// 			return request;
// 		},
// 		(error) => {
// 			return Promise.reject(error);
// 		}
// 	);

// 	axiosInstance.interceptors.response.use(
// 		(response) => {
// 			return response;
// 		},
// 		(error) => {
// 			if (error.response.status === 403) {
// 				localStorage.clear();

// 				if (history) {
// 					history.push("/login");
// 				} else {
// 					window.location = "/login";
// 				}
// 			} else {
// 				return Promise.reject(error);
// 			}
// 		}
// 	);

// 	// axiosInstance.interceptors.response.use(
// 	// 	(response) =>
// 	// 		new Promise((resolve, reject) => {
// 	// 			resolve(response);
// 	// 		}),
// 	// 	(error) => {
// 	// 		if (!error.response) {
// 	// 			return new Promise((resolve, reject) => {
// 	// 				reject(error);
// 	// 			});
// 	// 		}

// 	// 		if (error.response.status === 401) {
// 	// 			localStorage.clear();

// 	// 			if (history) {
// 	// 				history.push("/login");
// 	// 			} else {
// 	// 				window.location = "/login";
// 	// 			}
// 	// 		} else {
// 	// 			return new Promise((resolve, reject) => {
// 	// 				reject(error);
// 	// 			});
// 	// 		}
// 	// 	}
// 	// );
// 	return axiosInstance;
// };

// export default axiosInstance;
