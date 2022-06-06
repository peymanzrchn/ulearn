import { deleteCourse, editCourse, getCourses, newCourse } from "../services/courseService";
import { successMessage } from "../utils/messages";

export const getAllCourses = () => {
    return async (dispatch) => {
        const { data } = await getCourses();
        await dispatch({ type: "INIT", payload: data.courses });
    };
};

export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        const { data, status } = await newCourse(course);
        if (status === 201) successMessage("پست با موفقیت ساخته شد.");
        await dispatch({ type: "ADD_COURSE", payload: [getState().courses, data.course] });
    };
};

// export const handleUpdateCourse = (courseId, updatedCourse) => {
//     return async (dispatch, getState) => {
//         const courses = [...getState().courses];
//         const updatedCourses = [...courses];
//         const courseIndex = updatedCourses.findIndex((course) => course._id == courseId);

//         let course = updatedCourses[courseIndex];
//         course = { ...Object.fromEntries(updatedCourse) };

//         updatedCourses[courseIndex] = course;

//         try {
//             await dispatch({ type: "EDIT_COURSE", payload: [...updatedCourses] });
//             const { data, status } = await editCourse(courseId, updatedCourse);
//             if (status === 200) {
//                 successMessage("پست با موفقیت ویرایش شد.");
//             }
//         } catch (err) {
//             await dispatch({ type: "EDIT_COURSE", payload: [...courses] });
//         }
//     };
// };

// export const handleCourseDelete = (courseId) => {
//     return async (dispatch, getState) => {
//         const courses = [...getState().courses];
//         const filteredCourses = courses.filter((course) => course._id !== courseId);

//         try {
//             await dispatch({
//                 type: "DELETE_COURSE",
//                 payload: [...filteredCourses],
//             });
//             const { status } = await deleteCourse(courseId);

//             if (status === 200) successMessage("دوره با موفقیت پاک شد.");
//         } catch (ex) {
//             await dispatch({ type: "DELETE_COURSE", payload: [...courses] });
//         }
//     };
// };
