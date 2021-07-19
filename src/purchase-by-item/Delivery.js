import {useSelector} from "react-redux";
import {getAllProducts} from "../redux/products/products.selectors";
import {DataGrid} from '@material-ui/data-grid';
import styled from 'styled-components';
import {Button} from "@material-ui/core";
import {useState} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import {getSelectedCurrencyConversionRatio} from "../redux/currency/currency.selectors";

function LazyLoadImage(props) {
    const [loading, setLoading] = useState(true);
    return <>
        {loading && <CircularProgress color="secondary" />}
        <img style={{display: loading ? 'none' : 'block'}} onLoad={() => setLoading(false)} {...props}/>
    </>;

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    justify-content: flex-end;
    margin: 28px 0;
  }

  .tableWidth {
    width: 1100px;

    @media (max-width: 1100px) {
      width: 600px;
    }

    @media (max-width: 600px) {
      width: 320px;
    }
  }

  .table {
    height: 628px;
  }
`

function Delivery() {
    const products = useSelector(getAllProducts);
    const currency = useSelector(getSelectedCurrencyConversionRatio);

    const columnsDefinition = [
        {field: 'id', headerName: '#', hide: true,},
        {field: 'image', headerName: 'Image', renderCell: ({row}) => <LazyLoadImage src={row.image} width={64} alt={row.title}/>, width: 120,},
        {field: 'title', headerName: 'Item name', width: 240,},
        {field: 'store', headerName: 'Store', width: 120,},
        {field: 'price', headerName: 'Price', width: 110, renderCell: ({row}) => `${currency.symbol}${(row.price*currency.ratio).toFixed(2)}`},
        {field: 'deliveryEstimate', headerName: 'Delivery estimate', width: 190, renderCell: ({row}) => row.deliveryEstimate.toLocaleDateString(),},
        {field: 'category', headerName: 'Category', width: 190,},
        {field: 'action', headerName: 'Action', width: 120, renderCell: ({row}) => <Button color={'secondary'} variant={'contained'}>Archive</Button>},
    ]

    return <Container>
        <header className={'tableWidth'}>
            <Button color={'secondary'} variant={'contained'}>Add item</Button>
        </header>
        <div className={'table tableWidth'}>
            <DataGrid
                rows={products}
                columns={columnsDefinition}
                pageSize={5}
                disableSelectionOnClick
                rowHeight={100}
            />
        </div>
    </Container>;
}

export default Delivery;
