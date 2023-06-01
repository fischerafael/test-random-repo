import React from "react";

export const MapPage = () => {
  const imoveis = [
    { id: 1, city: "Curitiba", price: 199000 },
    { id: 2, city: "São Paulo", price: 600000 },
    { id: 3, city: "Jaboatão", price: 150000 },
    { id: 4, city: "Rio De Janeiro", price: 150000 },
  ];

  return (
    <div>
      {imoveis.map((item) => {
        return (
          <div key={item.id} style={{ background: "gray" }}>
            <p>{item.city}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};
