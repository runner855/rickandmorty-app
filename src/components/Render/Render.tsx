import * as React from "react";
import { DataProps } from "../../types/Apptypes";
import "../Render/Render.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { GoPrimitiveDot } from "react-icons/go";

const { Meta } = Card;

type CardsProps = {
  data: DataProps[] | undefined;
};

export const Render = ({ data }: CardsProps) => {
  console.log(data);
  return (
    <div className="main_container">
      {data &&
        data.map((item, index) => {
          return (
            <div className="card_container" key={index}>
              <div className="image_container">
                <img
                  className="article_image"
                  src={item.image}
                  alt={item.image ? "article_image" : ""}
                />
              </div>
              <div className="text_content">
                <div className="title">{item.name}</div>
                <div className="article_content">
                  {item.status === "Alive" ? (
                    <div className="alive">
                      <GoPrimitiveDot />
                      <div className="alive_text">{item.status} - </div>
                      <div className="type"> {item.type}</div>
                    </div>
                  ) : item.status === "Dead" ? (
                    <div className="dead">
                      <GoPrimitiveDot />
                      <div className="dead_text">{item.status} - </div>
                      <div className="type"> {item.type}</div>
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
