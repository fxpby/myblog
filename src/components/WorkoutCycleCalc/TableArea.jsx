import React, {useEffect} from 'react';
import BaseTable from './BaseTable';

const styles = {
  tableArea: {
    padding: '10px',
    display: 'flex',
    gap: '8px',
    flexDirection: 'column',
  },
};

export default function TableArea(props) {
  const {tableDataList, tableColumn, unit} = props;

  return (
    <div style={styles.tableArea}>
      {tableDataList?.map((table, index) => (
        <BaseTable
          key={index}
          tableIndex={index}
          tableData={table}
          tableColumn={tableColumn}
          unit={unit}
        />
      ))}
    </div>
  );
}
