/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import Address from "./Address";
import BasicInfos from "./BasicInfos";
import Payment from "./Payment";
import FormPageStyles from "./FormPageStyles";

export default function Checkout() {
  const [page, setPage] = useState(1);
  const [client, setClient] = useState(null);
  const [address, setAddress] = useState(null);

  return (
    <FormPageStyles>
      <div className="back">
        <Link to="/">
          <span>
            <BiArrowBack />
            Home
          </span>
        </Link>
      </div>
      <div>
        {(page === 1 && (
          <BasicInfos setPage={setPage} setClient={setClient} />
        )) ||
          (page === 2 && (
            <Address setPage={setPage} setAddress={setAddress} />
          )) ||
          (page === 3 && (
            <Payment setPage={setPage} address={address} client={client} />
          ))}
      </div>
    </FormPageStyles>
  );
}
