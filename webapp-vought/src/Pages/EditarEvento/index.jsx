import React from "react";
import './index.css'
import Navbar from '../../components/Navbar/index'
import EditarEvento from "../../components/EditarEvento/index";


const editarEvento = () => {
  return (
    <>
        <Navbar></Navbar>
        <EditarEvento></EditarEvento>
    </>
  )
}

export default editarEvento;
