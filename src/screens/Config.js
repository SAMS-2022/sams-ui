

import React, { Component } from 'react';
import { MdAddBox, MdDeleteForever, MdRefresh } from 'react-icons/md';
import {
  Card,
  Col,
  Row,
  Button,
  Table,
  Input
} from 'reactstrap';

var defaultWidget = { select: false, id: 0, name: 'New Dropbox'}

var widgetData = [
  { select: false, id: 1, name: 'First Dropbox', deadline: '12/01/2021', notif: 'Submit your paper now!', rnotif: 'Please review!', nsnotif: 3, nrnotif: 7},
  { select: false, id: 2, name: 'Second Dropbox', deadline: '12/15/2021', notif: 'Last dropbox, submit now!!', rnotif: 'Please review!', nsnotif: 3, nrnotif: 14}
];

const widgetCols = [
  { header: '', name: 'select', style: { verticalAlign: 'top', width: '3em' } },
  { header: 'Id', name: 'id', style: { textAlign: 'center', verticalAlign: 'middle', width: '3em', color: '#6a82fb' } },
  { header: 'Dropbox', name: 'name', style: { textAlign: 'center', verticalAlign: 'middle', width: '10em', color: '#6a82fb' } },
  { header: 'Deadline', name: 'deadline', style: { textAlign: 'center', verticalAlign: 'middle', width: '15em', color: '#6a82fb' } },
  { header: 'Submitter Notification', name: 'notif', style: { textAlign: 'center', verticalAlign: 'middle', width: '15em', color: '#6a82fb' } },
  { header: 'Reviewer Notification', name: 'rnotif', style: { textAlign: 'center', verticalAlign: 'middle', width: '15em', color: '#6a82fb' } },
  { header: '# Days Submit Notif', name: 'nsnotif', style: { textAlign: 'center', verticalAlign: 'middle', width: '15em', color: '#6a82fb' } },
  { header: '# Days Review Notif', name: 'nrnotif', style: { textAlign: 'center', verticalAlign: 'middle', width: '15em', color: '#6a82fb' } },
];


class Config extends Component {

  constructor(props) {
    super(props);
    this.state = {
      widgets: widgetData,
      widgetColumns: widgetCols,
    }
  }

  onInsertWidgetRow = () => {
    var lastWidgetId = 0;
    if (this.state.widgets.length > 0) {
      lastWidgetId = this.state.widgets[this.state.widgets.length - 1].id;
    }
    var newWidget = JSON.parse(JSON.stringify(defaultWidget));
    newWidget.id = lastWidgetId + 1;
    let data = this.state.widgets;
    data.push(newWidget);
    // can add REST call here to insert new record 
    this.setState({ widgets: data })
  }

  onDeleteWidgetRow = () => {
    var data = this.state.widgets;
    for (var i = data.length - 1; i >= 0; i--) {
      if (data[i].select) {
        data.splice(i, 1);
      }
    }
    this.setState({ widgets: data });
    document.getElementById('selectAll').indeterminate = false;
    document.getElementById('selectAll').checked = false;
  }

  // refreshes widget id's so they start at 1 and are consecutive 
  onRefreshWidgetId = () => {
    var data = this.state.widgets;
    for (var idx = 0; idx < this.state.widgets.length; idx++) {
      data[idx].id = idx + 1;
    }
    this.setState({ widgets: data })
  }

  // select all widgets
  onSelectAllWidgets = () => {
    var selectAllFlag = false;
    if (document.getElementById('selectAll').checked) {
      selectAllFlag = true;
    }
    var data = this.state.widgets;
    data.forEach((d) => d.select = selectAllFlag);
    this.setState({ widgets: data });
  }

  // changes widget state from contentEditable changes in Table
  onWidgetChange = (id, colName, e) => {
    // find row index from record id
    var rowIndex;
    for (var i = 0; i < this.state.widgets.length; i++) {
      if (this.state.widgets[i].id === parseInt(id)) {
        rowIndex = i;
        break;
      }
    }
    var data = this.state.widgets;
    // update appropriate parameter
    if (colName === 'select') {
      data[rowIndex].select = !data[rowIndex].select;
    } else if (colName === 'name') {
      if (data[rowIndex][colName] === e.currentTarget.textContent) {
        return;
      }
      data[rowIndex][colName] = e.currentTarget.textContent;
    } else {
      if (e.currentTarget.textContent === '' || data[rowIndex][colName] === parseFloat(e.currentTarget.textContent)) {
        return;
      }
      let val = parseFloat(e.currentTarget.textContent)
      data[rowIndex][colName] = val;
    }
    // determine selectAll property
    var ctr = 0;
    data.forEach((d) => {
      if (d.select) ctr ++;
    })
    document.getElementById('selectAll').indeterminate = false;
    if (ctr === data.length) {
      document.getElementById('selectAll').checked = true;
    } else if (ctr > 0) {
      document.getElementById('selectAll').indeterminate = true;
    } else {
      document.getElementById('selectAll').checked = false;
    }
    // add REST call here to update table cell changes
    this.setState({ widgets: data });
  }

  // prevents new line from being added to table cell during edit
  preventNewLine = (evt) => {
    if (evt.keyCode === 13) {
      evt.preventDefault();
    }
  }

  render() {

    return (
        <div className="App">
              <header className="App-header">
              <pageTitle>SAMS 2022 Configuration</pageTitle>

        <Row style={{ marginTop: '3em' }}>
          <Col md={1} sm={1} xs={1} className="mb-3"></Col>
          <Col md={10} sm={10} xs={10} className="mb-3">
            
            <Button color='primary' size='sm' onClick={this.onInsertWidgetRow} ><MdAddBox />&nbsp; Insert</Button>
            <Button color='info' size='sm' onClick={this.onRefreshWidgetId} ><MdRefresh />&nbsp; Reset</Button>
            <Button color='danger' size='sm' onClick={this.onDeleteWidgetRow} ><MdDeleteForever />&nbsp; Delete</Button>
          </Col>
          <Col md={1} sm={1} xs={1} className="mb-3"></Col>
        </Row>

        <Row>
          <Col md={1} sm={1} xs={1} className="mb-3"></Col>
          <Col md={10} sm={10} xs={10} className="mb-3">
            <Card className="flex-row">
              <Table bordered id='widgetTable'>
                <thead>
                  <tr>
                    {/* map column dictionary to table column headers */}
                    {this.state.widgetColumns.map(col =>
                      col.name === 'select' ?
                        <th key={col.name} style={col.style}>
                          <Input type='checkbox' id='selectAll'
                            style={{ margin: 'auto', marginTop: '0.35em' }}
                            onClick={this.onSelectAllWidgets}
                          />
                        </th> :
                        <th key={col.name} style={col.style}>{col.header}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {/* map widgets to table row columns */}
                  {/* First column 'select' is set to input type=checkbox */}
                  {/* Other columns except 'id' column is set to contentEditable=true */}
                  {this.state.widgets.map(row =>
                    <tr key={row.id}>
                      {this.state.widgetColumns.map(col =>
                        col.name === 'select' ?
                          <td key={col.name} >
                            <Input type='checkbox'
                              style={{ margin: 'auto', marginTop: '0.35em' }}
                              onChange={(evt) => this.onWidgetChange(row.id, col.name, evt)}
                              checked={row[col.name]}
                            />
                          </td> :
                          <td key={col.name}
                            style={{ textAlign: 'center' }}
                            contentEditable={col.name !== 'id' ? true : false}
                            suppressContentEditableWarning={true}
                            onKeyDown={this.preventNewLine}
                            onBlur={(evt) => this.onWidgetChange(row.id, col.name, evt)}
                          >
                            {row[col.name]}
                          </td>
                      )}
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col md={1} sm={1} xs={1} className="mb-3"></Col>
        </Row>
    
      </header>
          </div>
      
    )
    
  }

}

export default Config;