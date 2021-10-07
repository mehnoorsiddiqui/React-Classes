import React from "react";

// 1.Create the context
// Setting default value
const UserContext = React.createContext('Codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider , UserConsumer}

export default UserContext