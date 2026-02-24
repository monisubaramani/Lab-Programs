import { useState, useEffect } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const mins = now.getMinutes().toString().padStart(2, "0");
      const secs = now.getSeconds().toString().padStart(2, "0");

      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Night");
      }

      
      setTime(`${hour.toString().padStart(2,"0")}:${mins}:${secs}`);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
        <div className="bg-white shadow-xl rouneded-2xl p-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
                {greeting}
            </h1>
            <p className="mt-4 text-xl text-blue-600 font-semibold">
                {time}
            </p>
        </div>
    </div>
  );
}
