import "./styles.css";
import { useState } from "react";
var foodDetailsObj = {
  Indian: {
    Biryani: {
      description:
        "Biryani involves cooking rice and meat separately and finally cooking them together by forming layers of each in a vessel.",
      rating: "5/5"
    },
    Dosa: {
      description:
        "A properly made crisp and savory Indian dosa is wonderfully delicious, and fairly simple to make at home",
      rating: "4.5/5"
    }
  },
  Chinese: {
    Manchurian: {
      description: "Crispy veg balls in manchurian sauce is a delicious dish",
      rating: "4.5/5"
    },
    Noodles: {
      description:
        " Noodles are a type of staple food made from some type of unleavened dough which is rolled flat",
      rating: "3/5"
    }
  },
  Mexican: {
    Tacos: {
      description:
        "Exotic tacos are filled with fried brains, beef´s eyes and liver with onions",
      rating: "3.5/5"
    },
    Burritos: {
      description:
        "The most popular are the fried bean burrito with cheese and the machaca burrito.",
      rating: "4/5"
    }
  }
};

var foodemoji = "🥘";

export default function App() {
  var foodTypeArr = Object.keys(foodDetailsObj);

  var [foodSpecificList, SetfoodSpecificList] = useState([]);
  var [foodType, setFoodType] = useState("");

  // console.log(foodDetailsObj, foodTypeArr);

  function onclickHandler(item) {
    // console.log(item);
    var foodList = Object.keys(foodDetailsObj[item]);
    var foodType = item;
    console.log(foodType);
    // Setdescriptionstate(foodDetailsObj.item)
    // console.log(foodList);

    setFoodType(foodType);

    SetfoodSpecificList(foodList);

    console.log(foodSpecificList);
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "black",
          color: "#DCDCDC",
          display: "inline"
        }}
      >
        {foodemoji} Food's World
      </h1>
      <h3 style={{ padding: "10px", backgroundColor: "black", color: "gray" }}>
        See details of your favourite food
      </h3>

      {foodTypeArr.map((item) => (
        <li
          key={item}
          style={{
            display: "inline",
            padding: "0.3rem",
            margin: "1rem",
            border: "1px solid black",
            borderRadius: "5px 5px",
            backgroundColor: "#DCDCDC",
            fontSize: "smaller"
          }}
        >
          <span onClick={() => onclickHandler(item)}>
            {" "}
            <strong> {item}</strong>
          </span>
        </li>
      ))}

      <div style={{ margin: "auto", width: "60%" }}>
        <hr />
        {foodSpecificList.map((fitem) => (
          <li
            id="food-details"
            key={fitem}
            style={{
              display: "block",
              padding: "0.5rem",
              border: "1px solid black",
              borderRadius: "5px 5px",
              marginTop: "25px",
              backgroundColor: "white"
            }}
          >
            {" "}
            <span>
              {" "}
              <strong>Food Item: {fitem} </strong>
            </span>{" "}
            <span>
              {" "}
              <strong> Description:</strong>{" "}
              {foodDetailsObj[foodType][fitem]["description"]}{" "}
            </span>{" "}
            <span>
              {" "}
              <small>
                {" "}
                <strong>Rating:</strong>{" "}
                {foodDetailsObj[foodType][fitem]["rating"]}{" "}
              </small>{" "}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}
