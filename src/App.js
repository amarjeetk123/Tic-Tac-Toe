import React, { useState } from "react";

import Icon from "./components/Icon";

// this is my react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// this is my react bootstarp
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


// function App() {

// }
 const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  // function for game reloading
  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty", 0, 9)
  };


// function for chekinh the winner
  const checkIsWinner = () => {
    if(itemArray[0] == itemArray[1] && itemArray[0]==itemArray[2] && itemArray[0]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }
   else if(itemArray[3] == itemArray[4] && itemArray[3]==itemArray[5] && itemArray[3]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }
    else if(itemArray[6] == itemArray[7] && itemArray[6]==itemArray[8] && itemArray[6]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }
    else if(itemArray[0] == itemArray[4] && itemArray[0]==itemArray[8] && itemArray[0]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }
    else if(itemArray[2] == itemArray[4] && itemArray[2]==itemArray[6] && itemArray[2]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }
    // else{
    //   setWinMessage(`Game Deow!`)
    // }

  };


  // function for tuen moves
  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)

    } else {
      return toast("already filled", { type: "error" })
    }

    checkIsWinner()

  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">{winMessage}</h1>
              <Button color="success" block onClick={reloadGame} > Reload the game!</Button>
            </div>

          ) : (
            <h1 className="text-center text-warning ">  {isCross ? "Cross" : "Circle"} turns </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
                <Card onClick={() => changeItem(index)} >
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default App;

// import React, { useState, useEffect } from "react";

// import { Container, Row, Col, Card } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import MyCard from "./MyCard";

// import Axios from "axios";

// function App() {
//   const [details, setDetails] = useState({});
//   const fetchDetails = async () => {
//     const { data } = await Axios.get("https://randomuser.me/api/");
//     console.log("RESPONSE: ", data);

//     const details = data.results[0];

//     setDetails(details);
//   };

//   useEffect(() => {
//     fetchDetails();
//   }, []);

//   return (
//     <Container fluid className="p-4 bg-primary App">
//       <Row>
//         <Col md={4} className="offset-md-4 mt-4">
//           <MyCard details={details} />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;