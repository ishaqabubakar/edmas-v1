import React from 'react';
import Scheduler, { Resource, SchedulerTypes } from 'devextreme-react/scheduler';
import { assignees,data, priorities } from '../../../public/timeTable/scheduler';

const currentDate = new Date(2021, 4, 11);
const views: SchedulerTypes.ViewType[] = ['agenda'];

const SchedulerTable = () => (
  <Scheduler
    timeZone="America/Los_Angeles"
    dataSource={data}
    views={views}
    currentView="agenda"
    defaultCurrentDate={currentDate}
    height={400}
    startDayHour={9} style={{ border:"0px", borderRadius:'5px'}} >
    <Resource
      dataSource={assignees}
      allowMultiple={true}
      fieldExpr="assigneeId"
      label="Assignee"
      useColorAsDefault={true}
    />
    <Resource
      dataSource={priorities}
      fieldExpr="priorityId"
      label="Priority"
    />
  </Scheduler>
);

export default SchedulerTable;