import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Call from "../../api/Call";
import { DataProps } from "../../types/Apptypes";

export const SingleElement = () => {
  const [cardDetails, setCardDetails] = useState<DataProps[]>([]);
  const params = useParams();

  useEffect(() => {
    params.id &&
      Call.get(`${params.page}/${params.id}`, {}).then((res) => {
        setCardDetails(res.data);
      });
  }, [params]);

  console.log(cardDetails);

  return <div>Data here</div>;
};
