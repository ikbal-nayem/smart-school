import React from 'react';
import IntlMessages from 'util/IntlMessages'
import TableItem from './TableItem'


function createData(username, name, thumb, roll, Class, section, group) {
  return {username, name, thumb, roll, Class, section, group};
}

const data = [
  createData('ik', 'Alex Dolgove', "https://via.placeholder.com/150x150", '4', 'ii', 'A', null),
  createData('df', 'Domnic Brown', "https://via.placeholder.com/150x150", '28', 'vii', 'B', null),
  createData('sd', 'Garry Sobars', "https://via.placeholder.com/150x150", '5', 'ix', 'A', 'Arts'),
  createData('kjs', 'Stella Johnson', "https://via.placeholder.com/150x150", '23', 'x', 'B', 'Science'),
];


export default function StudentTable() {

  return (
    <div className="jr-card">
      <div className="jr-card-header d-flex align-items-center">
        <h3 className="mb-0"><IntlMessages id="student"/></h3>
        <div className="ml-3">
                          <span className="text-white badge badge-success">
                              <IntlMessages id="class"/></span>
        </div>
      </div>

      <div className="table-responsive-material" style={{minWidth: 600}}>
        <table className="default-table table-unbordered table table-sm table-hover">
          <thead className="th-border-b">
          <tr>
            <th><IntlMessages id="student"/></th>
            <th className="text-center"><IntlMessages id="class.roll"/></th>
            <th className="text-center"><IntlMessages id="class"/></th>
            <th className="text-center"><IntlMessages id="class.section"/></th>
            <th className="status-cell text-center"><IntlMessages id="class.group"/></th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {data.map(data => {
            return (
              <TableItem key={data.username} data={data}/>
            );
          })}
          </tbody>
        </table>
      </div>

    </div>
  );
}