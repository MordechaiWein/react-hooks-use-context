import React, { useState } from "react";
import { useContext } from "react/cjs/react.production.min";
import Header from "./Header";
import Profile from "./Profile";

import {UserProvider} from "./user"

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  const [hi, setHi ] = useState("Nick")
  return (
    <main className={theme}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
        <Profile theme={theme} user={user} />
        {setHi(useContext(UserProvider))}
      </UserProvider>
    </main>
  );
}

export default App;
