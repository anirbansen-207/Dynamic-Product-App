import * as React from "react";

import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import {
  Box,
  Button,
  Typography,

  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import {
  useDeleteProductsQuery,
  useGetProductsQuery,
} from "../Hooks/React-Query/productQuery";
import { image } from "../api/endPoints/endPoints";



// ✅ Styled TableCell
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: "8px 12px",
    fontSize: "0.95rem",
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "0.875rem",
    padding: "6px 12px",
  },
}));

// ✅ Styled TableRow
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "& td, & th": {
    paddingTop: 6,
    paddingBottom: 6,
  },
}));

const ProductList = () => {
  const { data, isLoading, isFetching } = useGetProductsQuery();
  const { mutate } = useDeleteProductsQuery();

  const [, setOpen] = React.useState(false);
  const [, setSelectedProduct] = React.useState(null);
  const [, setLoadingDetails] = React.useState(false);

  const handledelete = (_id) => {
    mutate(_id);
  };

  const handleImageClick = async (id) => {
    setLoadingDetails(true);
    setOpen(true);
    try {
      const fetched = await productDetails(id);
      console.log("Fetched product:", fetched); // Add this
      setSelectedProduct(fetched);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
    setLoadingDetails(false);
  };



  if (isLoading) return <div>Loading...</div>;
  if (isFetching) return <div>Fetching...</div>;

  return (
    <Box sx={{ backgroundColor: "#fff8e1", minHeight: "100vh", py: 4 }}>
      <Typography
        sx={{
          fontSize: "2rem",
          color: "green",
          textAlign: "center",
          fontWeight: "bold",
          mb: 3,
        }}
      >
        Product List
      </Typography>

      <TableContainer
        component={Paper}
        sx={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "80px" }}>SL No.</StyledTableCell>
              <StyledTableCell sx={{ width: "150px" }} align="right">
                Name Of the Product
              </StyledTableCell>
              <StyledTableCell sx={{ width: "200px" }} align="right">
                About the Product
              </StyledTableCell>
              <StyledTableCell sx={{ width: "150px" }} align="right">
                Image of the Product
              </StyledTableCell>
              <StyledTableCell sx={{ width: "100px" }} align="right">
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell align="center">{item.title}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{
                    maxWidth: "180px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img
                    src={image(item.image)}
                    alt="product"
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(item._id)}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={() => handledelete(item._id)}
                    variant="contained"
                    color="error"
                  >
                    DELETE
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>




    </Box>
  );
};

export default ProductList;
