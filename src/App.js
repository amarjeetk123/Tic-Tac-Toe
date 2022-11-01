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
      setWinMessage(`${itemArray[3]} is winner `)
    }
    else if(itemArray[6] == itemArray[7] && itemArray[6]==itemArray[8] && itemArray[6]!="empty" ){
      setWinMessage(`${itemArray[6]} is winner `)
    }
    else if(itemArray[0] == itemArray[3] && itemArray[0]==itemArray[6] && itemArray[0]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }
    else if(itemArray[1] == itemArray[4] && itemArray[1]==itemArray[7] && itemArray[1]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }
    else if(itemArray[2] == itemArray[5] && itemArray[2]==itemArray[8] && itemArray[2]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }

    else if(itemArray[0] == itemArray[4] && itemArray[0]==itemArray[8] && itemArray[0]!="empty" ){
      setWinMessage(`${itemArray[0]} is winner `)
    }
    else if(itemArray[2] == itemArray[4] && itemArray[2]==itemArray[6] && itemArray[2]!="empty" ){
      setWinMessage(`${itemArray[2]} is winner `)
    }
   
   else {
    let rse =  itemArray.every((ele)=>  ele!="empty")
  //  console.log(rse)
    if(rse==true){
      setWinMessage(`Game Draw`)
    }
   
   }
  };


  // function for tuen moves
  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }

  else{
    if (itemArray[itemNumber] === "empty") {
      console.log(itemNumber)
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)

    } else {
      console.log(itemNumber)
      return toast("already filled", { type: "error" })
      
    }
  }

    checkIsWinner()

  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      {/* if we remove the below row then not any problrm  */}
      <Row> 
        <Col md={6} className="offset-md-3">
 
          {winMessage ? (
            //  return toast("already filled", { type: "error" })
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
