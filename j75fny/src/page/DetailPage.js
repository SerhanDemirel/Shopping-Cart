import { useParams, useNavigate } from "react-router-dom";
import { data } from "../db/data";
import Card from "../component/Card";
import ProductSummary from "../ProductSummary";
import "../index.css";
import "./DetailPage.css";


export const DetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const selectedItem = data.find((x) => x.id === params.id);

  return (
    <div style={{ padding: "20px" }}>
      <h5
        style={{
          cursor: "pointer",
          color: "#0077ff",
          borderBottom: "1px solid #0077ff",
          display: "inline-block",
          padding: "5px 10px",
          borderRadius: "5px",
          transition: "background-color 0.2s"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e0f0ff")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        onClick={() => navigate("/")}
      >
        ← go back
      </h5>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img
          src={selectedItem.image}
          style={{
            maxWidth: "50%",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
          }}
        />
        <span
          style={{
            marginTop: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#444"
          }}
        >
          {selectedItem.price}$
        </span>
        <span
          style={{
            marginTop: "10px",
            fontSize: "18px",
            color: "#777"
          }}
        >
          {selectedItem.name}
        </span>

        <span
          style={{
            maxWidth: "50%",
            marginTop: "10px",
            fontSize: "18px",
            color: "#777"
          }}
        >
          {selectedItem.description}
        </span>
        <button
            className="card-add"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Add to cart
          </button>
      </div>
      <ProductSummary></ProductSummary>
    </div>
  );
};
