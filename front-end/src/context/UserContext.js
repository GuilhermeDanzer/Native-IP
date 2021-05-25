import createDataContext from "./createDataContext";
import baseUrl from "./baseUrl";
const userReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const getAllUsersCity = () => async () => {
  try {
    const response = await baseUrl.get("/users/all/city");
    return response.data;
  } catch (err) {
    alert(err.message);
  }
};
const getUsersCity = () => async (city) => {
  try {
    const response = await baseUrl.get(`/users/${city}`);
    return response.data;
  } catch (err) {
    alert(err.message);
  }
};
const getUser = () => async (id) => {
  try {
    const response = await baseUrl.get(`/user/${id}`);
    return response.data;
  } catch (err) {
    alert(err.message);
  }
};

const updateUser = () => async (userInfo) => {
  try {
    await baseUrl.post("/user", userInfo);
    alert("Usuario Atualizado");
  } catch (err) {
    alert(err.message);
  }
};

export const { Provider, Context } = createDataContext(
  userReducer,
  { getAllUsersCity, getUsersCity, getUser, updateUser },
  []
);
