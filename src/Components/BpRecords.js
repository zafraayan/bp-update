import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Crud from "../database/Crud";
import { FaDownload, FaEdit, FaPrint } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Edit from "./record-components/Edit";
import Registration from "./Registration";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditPopup,
  setForPrinting,
  setSliceId,
  setToPrint,
} from "../businessSlice";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PrintDownload, { PrintableDocument } from "./PrintDownload";
import { NavContext } from "../context/context";
import { navItems } from "../Sidebar/array/arrays";

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
  margin-right: 10px;
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
  overflow: scroll;
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

function BpRecords() {
  const [clicked, setClicked] = useState();
  const { useData, useDelete } = Crud();
  const { data: deleteData, isLoading: deleteLoading } = useDelete();
  const deleteMutation = useDelete();
  const { data: records, isLoading, error } = useData();
  const editPopup = useSelector((state) => state.business.editPopup.state);
  const reduxTitle = useSelector((state) => state.business.title);
  const forPrinting = useSelector((state) => state.business.forPrinting);
  const toPrint = useSelector((state) => state.business.toPrint);
  const dispatch = useDispatch();

  const [isClient, setIsClient] = useState(false);
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures rendering happens after the component mounts
  }, []);

  useEffect(() => {
    if (toPrint) {
      setDataReady(true);
    }
  }, [toPrint]);

  function handleEdit(id) {
    dispatch(setEditPopup({ state: true }));
    setClicked(id);
  }

  function handleDelete(id) {
    deleteMutation.mutate(id);
  }

  // function handlePrint(id) {
  //   console.log(id);
  //   dispatch(setSliceId("Print / Download"));
  // }

  function handleDownload(id) {
    const toPrint = records.find((el) => el.id === id);

    dispatch(setToPrint(toPrint));
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) console.log(error);

  return (
    <>
      {editPopup && (
        <Popup>
          <Edit selected={clicked} />
        </Popup>
      )}
      <RecordWrapper>
        {toPrint.id}
        <h1>Records</h1>
        <Search>
          <ButtonStyle>Search</ButtonStyle>
          <input type="text" placeholder="Search...."></input>
        </Search>
        <Data>
          <Table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Barangay</th>
                <th>Business Name</th>
                <th>Business Type</th>
                <th>Zoning Classification</th>
                <th>Legal Basis</th>
                <th>Actions</th>
              </tr>
              {records.map((el) => (
                <tr key={el.id}>
                  <td>{`${el.fName} ${el.mName} ${el.lName}`}</td>
                  <td>{el.barangay}</td>
                  <td>{el.busName}</td>
                  <td>{el.busType}</td>
                  <td>{el.zonClassification}</td>
                  <td>{el.legalBasis}</td>
                  {/* <td>{el.inspector}</td> */}
                  <Icons>
                    <span title="Edit" onClick={() => handleEdit(el.id)}>
                      <FaEdit />
                    </span>

                    {isClient ? (
                      <PDFDownloadLink
                        document={<PrintableDocument toPrint={toPrint} />}
                        fileName="locationla-clearance.pdf"
                      >
                        <span
                          onClick={() => handleDownload(el.id)}
                          className="download"
                          title="Download"
                        >
                          <FaDownload />
                        </span>
                      </PDFDownloadLink>
                    ) : (
                      "Preparing PDF..."
                    )}

                    <span title="Delete" onClick={() => handleDelete(el.id)}>
                      <FaDeleteLeft />
                    </span>
                    {/* <span title="Print" onClick={() => handlePrint(el.id)}>
                      <FaPrint />
                    </span> */}
                  </Icons>
                </tr>
              ))}
            </tbody>
          </Table>
        </Data>
      </RecordWrapper>
      <div>Pages</div>
    </>
  );
}

export default BpRecords;
