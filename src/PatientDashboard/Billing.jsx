import React, { useState, useEffect } from 'react';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';

const Billing = () => {
  const [searchData, setSearchData] = useState([
    { Index: "s1", Country: "Alaska" },
    { Index: "s2", Country: "California" },
    { Index: "s3", Country: "Florida" },
    { Index: "s4", Country: "Georgia" }
  ]);

  const [filter, setFilter] = useState(null);

  const handleFiltering = (e) => {
    const query = new Query();
    if (e.text !== "") {
      query.where("Country", "startswith", e.text, true);
    }
    e.updateData(searchData, query);
  };

  useEffect(() => {
    const dataManager = new DataManager();
    dataManager.loadData(searchData, {
      schema: {
        fields: [{ name: "Index", type: "string" }, { name: "Country", type: "string" }]
      }
    });
    const dropDownList = new DropDownList({
      dataSource: dataManager.getDataSource(),
      fields: { text: "Country", value: "Index" },
      placeholder: "Select a country",
      allowFiltering: true,
      filtering: handleFiltering
    });
    setFilter(dropDownList);
  }, []);

  return (
    <div>
      {filter ? filter.appendTo('#ddlelement') : null}
    </div>
  );
};

export default Billing;
