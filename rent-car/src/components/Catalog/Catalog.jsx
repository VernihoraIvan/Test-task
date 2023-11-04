import { useEffect } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import styles from "./Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars } from "@/redux/cars/thunk";
import { getCars } from "@/redux/cars/selectors";

import {Loader} from "../Loader/Loader"
import MainLMButton from "../MainLMButton/MainLMButton";

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchAllCars()); 
  }, [dispatch]);

  if (!items) {
    return <Loader/>;
  }
  return (
    <section>
      <div className={styles.catalog_container}>
        <div className={styles.catalog_table}>
          {items.map((item) =>(
            <CatalogItem item={item} key={item.id}/>
          ) )}
        </div>
      </div>
      <MainLMButton/> 
    </section>
  );
};

export default Catalog;
