import React, { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const Map = () => {
  const [data, setData] = useState([
    { date: '2022-01-01', count: 1 },
    { date: '2022-01-02', count: 2 },
    { date: '2022-01-03', count: 3 },
    // Add more data here...
  ]);

  return (
    <div>
      <CalendarHeatmap
        startDate={new Date('2022-01-01')}
        endDate={new Date('2022-12-31')}
        values={data}
        showWeekdayLabels={true}
        onClick={(value) => console.log(`Clicked on value with count: ${value.count}`)}
      />
    </div>
  );
};
// Yes, I know about ReactJS. ReactJS is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of developers. ReactJS allows developers to build reusable UI components and manage the state of those components in a declarative way.

// ReactJS is used in a wide range of applications, from simple websites to complex web applications. It is particularly well-suited for building single-page applications (SPAs) and mobile applications using React Native. Some popular applications built with ReactJS include Facebook, Instagram, Netflix, Airbnb, and Dropbox.
export default Map