

const baseURL = "http://localhost:3009/"
const apiUri = {
    auth: {
        otplogin: '/otp-login',
        verifyotp: '/otp-verfication',
        sessioninfo: 'session_info', 
        logout:"logout",
        update_user_details:"update_user_details",
    },
    saurav: {
        pagename:"/pages?pagename=",
        contact:"/contact",
        course_enquiry:"course-enquiry",
    },
  
};
export { apiUri, baseURL }