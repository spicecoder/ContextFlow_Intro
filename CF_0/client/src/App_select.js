import React from "react";
import PlainSelect from './plain'
import "./App.css";

export default function App() {
  const students = [
    ["Name", "Subject", "Marks"],
    ["ABC", "Arts", 80],
    ["XYZ", "Science", "70"],
  ];
  return (
    <div>
      <table>
  <thead>
    <tr>
      {students[0].map((item, index) => {
        return <th key={index}>{item}</th>;
      })}
    </tr>
  </thead>
  <tbody>
    {students.slice(1, students.length).map((item, index) => {
      return (
        <tr key={index}>
          <td key={item[0]}>{item[0]}</td><td><PlainSelect/></td>
          <td key={item[1]}>{item[1]}</td><td><PlainSelect/> </td>
          <td key={item[2]}>{item[2]}</td><td><PlainSelect/> </td>
        </tr>
      );
    })}
  </tbody>
</table>
    </div>
  );
}