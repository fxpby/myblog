import React, {useEffect} from 'react';
import BaseTable from './BaseTable';
import s from './styles.module.css';

export default function TableArea(props) {
  const {tableDataList, tableColumn} = props;

  return (
    <div className={s.tableArea}>
      {tableDataList?.map((table, index) => (
        <BaseTable
          key={index}
          tableIndex={index}
          tableData={table}
          tableColumn={tableColumn}
        />
      ))}
    </div>
  );
}
