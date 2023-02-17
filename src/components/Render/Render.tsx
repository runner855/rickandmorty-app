import * as React from "react";
import { DataProps } from "../../types/Apptypes";
import "../Render/Render.css";
import { useParams, useNavigate } from "react-router-dom";

import { GoPrimitiveDot } from "react-icons/go";

type CardsProps = {
  data: DataProps[] | undefined;
};

export const Render = ({ data }: CardsProps) => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="main_container">
      {data &&
        data.map((item, index) => {
          return (
            <div
              className="card_container"
              key={index}
              onClick={() => navigate(`/${params.page}/${item.id}`)}
            >
              <div className="image_container">
                {item.image ? (
                  <img
                    className="character_image"
                    src={item.image}
                    alt={item.image ? "character_image" : ""}
                  />
                ) : (
                  <img
                    className="image_not_available"
                    src="https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
                    alt="Media Not Available"
                  />
                )}
              </div>
              <div className="character_details">
                <div className="name">{item.name}</div>
                <div className="character_details_content">
                  {item.status === "Alive" ? (
                    <div className="alive">
                      <GoPrimitiveDot />
                      <div className="alive_text">{item.status} </div>
                    </div>
                  ) : item.status === "Dead" ? (
                    <div className="dead">
                      <GoPrimitiveDot />
                      <div className="dead_text">{item.status} </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {item.location ? (
                    <div className="location">
                      <div className="location_title">Location:</div>
                      <div className="location_text">{item.location.name}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
