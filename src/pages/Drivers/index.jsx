import { Table } from 'antd';
import { useState,useEffect } from 'react';
import { getAllData } from '../../api/requests';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Birth Year',
    dataIndex: 'birth_year',
  },
  {
    title: 'Eye Color',
    dataIndex: 'eye_color',
  },
  {
    title: 'Skin Color',
    dataIndex: 'skin_color',
  },
  {
    title: 'Hair Color',
    dataIndex: 'hair_color',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title:"Information",
    render: (text, record) => (
      <button onClick={()=> console.log(record)}>
        Add Favorites
      </button>
    )
  }
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const [categories,setCategories]=useState([]);

  useEffect(() => {
    getAllData().then((data) => {
      setCategories(data.results);
    });
  }, [setCategories])


  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return <Table rowSelection={rowSelection} columns={columns} dataSource={categories}  rowKey="id"/>;
};
export default App;