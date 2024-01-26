import React, { useEffect, useState } from "react";
import useFetch from "./hook/useFetch";
import { GetBookData } from "./service/book.service";
import {Routes,Route} from "react-router-dom";
import { DetailBookPage, HomePage } from "./page";
import { NavComponents } from "./components";
import NotFound from "./Not.found";

const App = () => {
  const { error, loading, data } = useFetch(GetBookData,"book");


  return (
    <div className=" main">
      <NavComponents/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/detail/:id" element={<DetailBookPage/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  );
};

export default App;

//custom hook
// => build in hook => useState,useEffect ,useRef, useContext,useReducer,useLayoutEffect,useId,useTransition,useCallback,useMemo etc...
// => lib provide hook => useParams,useNavigate, useLocation,useSearchParams
// => custom hook =>
