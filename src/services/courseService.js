import http from "./httpService";
import config from "./config.json";

export const getCourses = () => {
    return http.get(`${config.localapi}/api/courses`);
};

export const getCourse = (courseId) => {
    return http.get(`${config.localapi}/api/course/${courseId}`);
};

export const newCourse = (course) => {
    return http.post(`${config.localapi}/dashboard/add-course`, course);
};

export const deleteCourse = (courseId) => {
    return http.delete(`${config.localapi}/dashboard/delete-course/${courseId}`);
};

export const editCourse = (courseId, course) => {
    return http.put(`${config.localapi}/dashboard/edit-course/${courseId}`, course);
};
