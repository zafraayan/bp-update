import React, { useContext, useEffect, useState } from "react";
// import styled from "styled-components";
// import Crud from "../database/Crud";
// import { FaDownload, FaEdit, FaPrint } from "react-icons/fa";
// import { FaDeleteLeft } from "react-icons/fa6";
// import Edit from "./record-components/Edit";
// import Registration from "./Registration";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setEditPopup,
//   setForPrinting,
//   setSliceId,
//   setToPrint,
// } from "../businessSlice";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PrintDownload, { PrintableDocument } from "./PrintDownload";
// import { NavContext } from "../context/context";
// import { navItems } from "../Sidebar/array/arrays";

import styled from "styled-components";
import Crud from "../../database/Crud";
import { useDispatch, useSelector } from "react-redux";
import { setEditPopup, setSliceId, setToPrint } from "../../businessSlice";
import Edit from "../record-components/Edit";
import { FaEdit, FaPrint } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import ApplicantEdit from "./ApplicantEdit";
import { formatNumber } from "../../helpers/formatNumber";

const RecordWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const ButtonStyle = styled.button`
  width: 10%;
  /* border-radius: 10px; */
  padding: 10px;
  /* margin-right: 10px; */
  background-color: rgb(0, 0, 0);
  color: white;
  font-size: 12px;
  place-content: center;
  border: none;
  border-radius: 5px;

  pointer-events: ${(props) => props.disability};

  &:hover {
    background-color: var(--bodyText);
    color: black;
    cursor: pointer;
  }
`;

const Search = styled.div`
  text-align: right;
  align-items: center;

  input {
    font-family: "Inter", serif;
    width: 32%;
    height: 35px;
    border-radius: 5px;
    border: none;
    padding: 5px;
    text-align: center;
  }
`;

const Data = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 1;
`;

const Body = styled.div`
  flex: 9;
  background-color: pink;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0px;

  tr:nth-child(odd) {
    background-color: #6b8187;
    font-size: 14px;
    transition: background-color ease-in 0.2s;

    &:hover {
      background-color: black;
      cursor: pointer;
    }
  }

  tr:nth-child(even) {
    background-color: #525d64;
    font-size: 14px;
    transition: background-color ease-in 0.2s;

    &:hover {
      background-color: black;
      cursor: pointer;
    }
  }

  th {
    padding: 10px;
    border: solid 1px gray;
    font-weight: 600;
    background-color: black;
    color: #a9cec2;
  }

  td {
    padding: 5px;
    width: 100px;
    border: solid 1px rgb(56, 56, 56);
  }
`;

const Icons = styled.td`
  font-size: 12px;

  span {
    border-radius: 3px;
    margin-left: 5px;
    padding: 5px;
  }

  span:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }

  .download {
    color: white;
  }
`;

const Popup = styled.div`
  width: 75dvw;
  height: 75dvh;
  border-radius: 10px;
  padding: 25px;
  background-color: #1e1e1e;
  color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  border: solid 2px gray;
  box-shadow: 10px 10px 5px gray;
`;

const Pagination = styled.div`
  display: flex;
  gap: 10px;
  place-content: center;
  align-items: center;
`;

function Applicants() {
  const [clicked, setClicked] = useState();
  const { useZoncertData, useZoncertDelete } = Crud();

  const deleteMutation = useZoncertDelete();
  const { data: records, isLoading, error } = useZoncertData();
  const editPopup = useSelector((state) => state.business.editPopup.state);
  const reduxTitle = useSelector((state) => state.business.title);
  const forPrinting = useSelector((state) => state.business.forPrinting);
  const toPrint = useSelector((state) => state.business.toPrint);
  const dispatch = useDispatch();

  const [isClient, setIsClient] = useState(false);
  const [asData, setAsData] = useState();
  const [dataReady, setDataReady] = useState(false);
  const [searchKey, setSearchKey] = useState();
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    setIsClient(true); // Ensures rendering happens after the component mounts
  }, []);

  function handleChange(e) {
    const searchRecord = records.filter((el) =>
      el.lName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    // console.log(records);
    setSearchKey(e.target.value);
    setSearchValue(searchRecord);
  }

  function handleEdit(id) {
    dispatch(setEditPopup({ state: true }));
    setClicked(id);
    console.log(id);
  }

  function handleDelete(id) {
    deleteMutation.mutate(id);
  }

  function handlePrint(id) {
    const toPrints = records.find((el) => el.id === id);
    dispatch(setToPrint(toPrints));
    dispatch(setSliceId("Applicant Print"));
  }

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(records?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = records
    ?.sort((a, b) => b.id - a.id)
    ?.slice(startIndex, startIndex + itemsPerPage);
  if (isLoading) return <p>Loading...</p>;
  if (error) console.log(error);

  return (
    <>
      {editPopup && (
        <Popup>
          <ApplicantEdit selected={clicked} />
        </Popup>
      )}
      <RecordWrapper>
        {clicked}
        <h1>Applicants</h1>
        <Search>
          {/* <ButtonStyle>Search</ButtonStyle> */}
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search by last name...."
          ></input>
        </Search>
        <Data>
          <Table>
            <tbody>
              <tr>
                <th>Applicant Name</th>
                <th>Barangay</th>
                <th>Land Use Classification</th>
                <th>Area</th>
                <th>Lot Number</th>
                <th>Date Applied</th>
                <th>Actions</th>
              </tr>
              {searchKey
                ? searchValue?.map((el) => (
                    <tr key={el.id}>
                      <td>{`${el.fName} ${el.mName} ${el.lName}`}</td>
                      <td>{el.barangay}</td>
                      <td>{el.zoningClassification}</td>
                      <td>{el.area}</td>
                      <td>{el.lotNumber}</td>
                      <td>{el.date}</td>
                      <Icons>
                        <span title="Edit" onClick={() => handleEdit(el.id)}>
                          <FaEdit />
                        </span>

                        <span
                          title="Delete"
                          onClick={() => handleDelete(el.id)}
                        >
                          <FaDeleteLeft />
                        </span>
                        <span title="Print" onClick={() => handlePrint(el.id)}>
                          <FaPrint />
                        </span>
                      </Icons>
                    </tr>
                  ))
                : currentItems?.map((el) => (
                    <tr key={el.id}>
                      <td>{`${el.fName} ${el.mName} ${el.lName}`}</td>
                      <td>{el.barangay}</td>
                      <td>{el.zoningClassification}</td>
                      <td>{el.area}</td>
                      <td>{el.lotNumber}</td>
                      <td>{el.date}</td>
                      <Icons>
                        <span title="Edit" onClick={() => handleEdit(el.id)}>
                          <FaEdit />
                        </span>

                        <span
                          title="Delete"
                          onClick={() => handleDelete(el.id)}
                        >
                          <FaDeleteLeft />
                        </span>
                        <span title="Print" onClick={() => handlePrint(el.id)}>
                          <FaPrint />
                        </span>
                      </Icons>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </Data>
      </RecordWrapper>
      {!searchKey && (
        <Pagination>
          <ButtonStyle
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </ButtonStyle>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <ButtonStyle
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </ButtonStyle>
        </Pagination>
      )}
    </>
  );
}

export default Applicants;
