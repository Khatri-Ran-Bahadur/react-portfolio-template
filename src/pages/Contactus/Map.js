import React from "react";

const Map = () => {
  return (
    <div className="container map">
      <h1 className="text-center">Map</h1>
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.9243268315013!2d82.50910651443367!3d28.893959678952786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39bd3f333eb5b513%3A0x218cf816742f0549!2sRan%20Bahadur%20kc!5e1!3m2!1sen!2snp!4v1585750752865!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </p>
    </div>
  );
};

export default Map;
