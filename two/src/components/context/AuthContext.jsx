// import { useState } from "react";
import { createContext, useState, useContext,useEffect } from "react";

export const AuthContext = createContext();//Yeh ek context object create karta hai  Context ka kaam hota hai global state management provide karna, taaki kisi bhi component ko bina props drilling ke access mile.
export const AuthContextProvider = ({ children }) => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [data, setData] = useState(null);
      //isLoggedIn: Yeh boolean state hai jo yeh track karega ki user logged in hai ya nahi.
      //data: Yeh user data ko store karega (jaise name, email, token, etc.).

      useEffect(()=>{
            // verify api call ko yahan daalna hai on page load karne per logout na  hai

            // eslint-disable-next-line no-unused-vars
            const verifyUser = async () => {
                  try {
                        const res = await fetch("http://localhost:5000/api/auth/verify", {
                              method: "GET",
                              credentials:"include",
                        });
                        const result = await res.json();
                        if(result.authenticated){
                              setIsLoggedIn(true);
                              setData(result.data);
                        }else{
                              setIsLoggedIn(false);
                              setData(null);
                        }
                  
                  } catch (error) {
                        console.log("error verifying",error);
                        setIsLoggedIn(false);
                        setData(null);
                  }
                  verifyUser();
            }
      },[])// will run only once when the component mounts
      // useEffect ke andar humne verifyUser function ko call kiya hai jo API se data fetch karega aur isLoggedIn aur data ko update karega. 
      // useEffect ke andar humne empty dependency array pass kiya hai taaki yeh sirf component mount hone par chale.
     
      return (
            <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, data, setData }}>
              {children}
            </AuthContext.Provider>
          );
        };
        
        export const useAuthContext = () => {
          const abc = useContext(AuthContext);
          return abc;
        };


// AuthContextProvider: Yeh component apne children ko AuthContext.Provider ke andar wrap karta hai, jisse isLoggedIn aur data ki state ko access kiya ja sakta hai kisi bhi child component se.