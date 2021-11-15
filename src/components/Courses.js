import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { MyVerticalCenteredModal } from "./Modal";

function Courses() {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    axios.get(" http://localhost:3001/Course").then((res) => setData(res.data));
  });

  return (
    <div>
      <h1
        className="products-heading"
        style={{ textAlign: "center", margin: "20px 0px" ,color:"blue"}}
      >
        Courses
      </h1>
      <Table
        striped
        bordered
        hover
        variant="primary"
        style={{ width: "70%", margin: "0px auto" }}
      >
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Course</th>
            <th>Duration</th>
            <th style={{ textAlign: "center" }}>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((index) => (
            <tr>
              <td>{index.cid}</td>
              <td>{index.name}</td>
              <td>{index.duration} yrs</td>
              <td style={{ textAlign: "center" }}>
                <Button
                  onClick={() => {
                    setModalShow(true); setCourse(index.name);
                  }}
                  variant="warning"
                >
                  Enquiry
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <MyVerticalCenteredModal
        course={course}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Courses;




