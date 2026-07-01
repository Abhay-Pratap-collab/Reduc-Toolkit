import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../store/slices/Slicer";
export default function ProductInterface() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productRate, setProductRate] = useState("");

  const [productPicture, setProductPicture] = useState({ bytes: "", url: "" });
  var dispatch = useDispatch();
  var navigate = useNavigate();
  const handlePicture = (e) => {
    setProductPicture({
      bytes: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleShow = () => {
    navigate("/displayproduct");
  };

  const handleClick = () => {
    var body = {
      productId,
      productName,
      productRate,
      picture: productPicture.url,
    };
    // here store the data in index.js / store
    var payload = [productId, body];
    // console.log('abhay',payload)

    // they send to redyx store for display

    dispatch(addProduct(payload));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", padding: 5, width: "40%", margin: 20 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              onChange={(e) => setProductId(e.target.value)}
              fullWidth
              variant="outlined"
              label="Product Id"
            />
          </Grid>
          <Grid size={12}>
            <TextField
              onChange={(e) => setProductName(e.target.value)}
              fullWidth
              variant="outlined"
              label="Product Name"
            />
          </Grid>
          <Grid size={12}>
            <TextField
              onChange={(e) => setProductRate(e.target.value)}
              fullWidth
              variant="outlined"
              label="Product Rate"
            />
          </Grid>
          <Grid size={12}>
            <Button variant="contained" component="label">
              Upload Image
              <input
                onChange={handlePicture}
                type="file"
                hidden
                accept="images/*"
              />
            </Button>
          </Grid>

          <Grid size={6}>
            <Button onClick={handleClick} variant="contained">
              Submit
            </Button>
          </Grid>

          <Grid size={6}>
            <Button onClick={handleShow} variant="contained">
              Show
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
