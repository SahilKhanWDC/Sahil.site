import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <nav className="w-full flex justify-between items-center px-4 py-3 overflow-hidden box-border">
      <div className="flex items-center gap-3">
        <img 
            className="rounded-3xl object-cover" 
            width="30px" 
            height="30px"
            src="/avatar_1724865660.png" 
            alt="logo" 
        />
        <p className="font-medium text-md sm:text-base whitespace-nowrap">Sahil.site</p>
      </div>

      <div className="text-gray-400 text-sm sm:text-sm font-mono whitespace-nowrap">
        {time}
      </div>
    </nav>
  );
};

export default Navbar;