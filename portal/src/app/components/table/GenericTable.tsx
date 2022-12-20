import { Table } from 'antd';
export function GenericTable(props) {
  const { columns, dataSource, openEditRowPage } = props;

  return (
    <Table
      rowKey={'_id'}
      columns={columns}
      dataSource={dataSource}
      onRow={(record, rowIndex) => {
        return {
          onMouseUp: () => {
            openEditRowPage(record);
          },
        };
      }}
    />
  );
}
