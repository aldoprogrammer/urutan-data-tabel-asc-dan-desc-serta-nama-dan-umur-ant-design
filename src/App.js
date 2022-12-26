import React, { useState} from 'react';
import './App.css';
import { Select, Switch, Table } from 'antd';
function App() {
  const [ sortAscending, setSortAscending] = useState(true)
  const [dataSource, setDataSource] = useState([
    {
    name: 'tanwu',
    age: 19
    },
    {
    name: 'sindri',
    age: 23
    },
    {
    name: 'Cinta',
    age: 21
    },
    {
    name: 'Andi',
    age: 22
    }])

    const onSorterChange = (selectedSorter) => {
      const sortedDataSource = [...dataSource];
      if (selectedSorter === 'name') {
        sortedDataSource.sort((a, b) =>
        a.name > b.name ? 1 : a.name === b.name?0:-1
        );
      } else if ( selectedSorter === "age") {
        sortedDataSource.sort((a, b) => a.age - b.age)
      }

      setDataSource(sortedDataSource);
    };

    const updatedDataSource = sortAscending
    ?[...dataSource] 
    : [...dataSource].reverse();

  return ( 
  <div className="App">
    <h2 style={{marginTop:50, marginBottom: -50}}>DATA TABEL NIH</h2>
    <div style={{
      margin: 80,
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      
      <span>Urutkan data berdasarkan:</span>
      <Select onChange={onSorterChange} placeholder="Cari disini!">
      <Select.Option value="name">Name</Select.Option>
      <Select.Option value="age">Age</Select.Option>
      </Select>
      <Switch checkedChildren="Asc" unCheckedChildren="Desc" defaultChecked={sortAscending} onChange={setSortAscending}></Switch>
    </div>
    <Table
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        }
      ]}
      dataSource={updatedDataSource}
    ></Table>
  </div>
  );
}
export default App;