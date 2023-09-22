import React from "react";

const CV = () => {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-between">
      <div className="w-3/4">
        <h1 className="font-bold">Personal Information</h1>
        <p>School 2013 - 2017</p>
        <p>School 2012 - 2013</p>
        <p>High School 2006 - 2012</p>
        <p>School 2002 - 2006 </p>
        <p>Born 1996 in Datteln</p>
      </div>
      <div className="w-3/4">
        <h1 className="font-bold">Documents</h1>
        <p>Fachinformatiker</p>
        <p>Informationstechnischer Assisstent</p>
        <p>Fachabitur</p>
      </div>
      <div className="w-3/4">
        <h1 className="font-bold">Certificates</h1>
        <p>Azure Fundamentals</p>
      </div>
    </div>
  );
};

export default CV;
