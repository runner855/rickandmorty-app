import React, { useEffect, useState } from "react";
import Call from "../../api/Call";
import { useParams } from "react-router-dom";
import { DataProps } from "../../types/Apptypes";
import { Render } from "../Render/Render";

export const PageStructure = () => {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState<DataProps[] | undefined>();
  useEffect(() => {
    Call.get(`${params.page}?page=2`, {}).then((res) => {
      setData(res.data.results);
    });
  }, [params]);
  console.log(data);
  return (
    <div>
      <Render />
    </div>
  );
};
